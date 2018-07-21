import React, { Component } from 'react';
import { Form,Button,Input,Message,Header,Icon } from 'semantic-ui-react'
import Layout from '../../components/Layout.js';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class CampaignNew extends Component{
	state={
		minimumContribution:'',
		chooseCategory:'',
		title:'',
		description:'',
		errorMessage:'',
		loading:false
	};

	onSubmit = async (event) => {
		event.preventDefault();

		this.setState({loading: true, errorMessage:''});

		try{
			const accounts = await web3.eth.getAccounts();
			await factory.methods.createCampaign(this.state.chooseCategory, this.state.title,
																					this.state.minimumContribution, this.state.description)
				.send({
				from: accounts[0]
			});

			Router.pushRoute('/');
		} catch(err){
			this.setState({ errorMessage: err.message });
		}

		this.setState({loading:false});
	};

	render(){
		return(
			<Layout>
			 <div>
					<div style={{margin:50}}>
						<Header as='h2' icon textAlign='center' color='teal'>
      				<Header.Content>
        				Create a Need
      				</Header.Content>
  				 	 </Header>
  				 	 </div>
  				</div>

			  <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
					<Form.Field>
						<div>
							<label>Choose a Category</label>
							<Input
								list='categories'
								value={this.state.chooseCategory}
				  			onChange={event => this.setState({ chooseCategory:event.target.value })}
								/>
							<datalist id='categories'>
								<option value='Event Sponsorship' />
								<option value='Welfare'/>
							</datalist>
						</div>
					</Form.Field>

					<Form.Field>
						<label>Title</label>
						<Input
							value={this.state.title}
							onChange={event => this.setState({ title: event.target.value })}
						/>
					</Form.Field>

					<Form.Field>
						<label>Description</label>
						<Input
							value={this.state.description}
							onChange={event => this.setState({ description: event.target.value })}
						/>
					</Form.Field>

			  	<Form.Field>
			  		<label>Minimum Contribution</label>
			  		<Input
			  			label="wei"
			  			labelPosition="right"
			  			value={this.state.minimumContribution}
			  			onChange={event => this.setState({ minimumContribution: event.target.value })}
			  		/>
			  	</Form.Field>
			  	<Message error header="Oops!" content={this.state.errorMessage} />
			  	<Button loading={this.state.loading} basic color='teal'>Create</Button>
			  </Form>
			 </Layout>
		);
	}
}

export default CampaignNew;
