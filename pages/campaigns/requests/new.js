import React, {Component } from 'react';
import {Form,Button,Message,Input,Header,Icon} from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import {Link,Router} from '../../../routes';
import Layout from '../../../components/Layout';

class RequestNew extends Component {
	state = {
		value: '',
		description:'',
		recipient:'',
		loading: false,
		errorMessage:''
	};
	
	static async getInitialProps(props){
		const {address} = props.query;
		
		return { address };
		}
		
		onSubmit = async event => {
			event.preventDefault();
			
			const campaign = Campaign(this.props.address);
			const { description, value, recipient } = this.state;
			 
			 this.setState({loading:true, errprMessage:''});
			 
			try{
				const accounts = await web3.eth.getAccounts();
				await campaign.methods
				.createRequest(
					description, 
					web3.utils.toWei(value,'ether'),
					 recipient
				).send({ from: accounts[0] });
				
				Router.pushRoute(`/campaigns/${this.props.address}/requests`);	
			} catch(err) {
				this.setState({errorMessage: err.message});
			}
			
			this.setState({loading:false});
		};
	
	render() {
		return (
			<Layout>
			
			<Link route = {`/campaigns/${this.props.address}/requests`}>
				<a>
					<p style={{color:'teal'}}>Back</p>
				</a>
			</Link>
			<div style={{marginTop:30, textAlign:'center',color:'teal'}}>
				<Header as='h2' icon>
    							  	<Icon name='users' circular color='teal' />
    							  	Add Requests
  				 	 	</Header>
  				 	 	
  				 </div>
			<Form onSubmit={this.onSubmit } error={!!this.state.errorMessage}>
				<Form.Field>
					<label style={{color:'teal'}}>Description</label>
					<Input
						value={this.state.description}
						onChange={event => this.setState({description: event.target.value })}
					 />
				</Form.Field>
								
				<Form.Field>
					<label style={{color:'teal'}}>Value in Ether</label>
					<Input
						value={this.state.value}
						onChange={event => this.setState({value: event.target.value })}
					 />
				</Form.Field>
				
				<Form.Field>
					<label style={{color:'teal'}}>Recipient</label>
					<Input
						value={this.state.recipient}
						onChange={event => this.setState({recipient: event.target.value })}
					 />
				</Form.Field>
				<Message error header="Oops!" content={this.state.errorMessage} />
				<Button color='teal' loading={this.state.loading}>Create!</Button>
			</Form>
			
			<Message info>
				<Message.Header>Notes before these filling Form...</Message.Header>
				<ul>
					<li>This form will add your requests in the table of requirements.</li>
					<li>Please provide a proper Description which help your friends to provide fund for the purpose.</li>
					<li>Enter the value in Ether</li>
					<li>*Recipient will be the address of the seller from which you need stuff.</li>
					<li>Receipent will provide you the stuff for your project.</li>
				</ul>
			</Message>
			</Layout>
		);
	}
}

export default RequestNew; 