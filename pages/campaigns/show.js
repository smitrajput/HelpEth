import React,{Component} from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card, Grid,Button,Header,Icon } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import {Link} from '../../routes';

class CampaignShow extends Component{
	static async getInitialProps(props){
		const campaign = Campaign(props.query.address);

		const summary = await campaign.methods.getSummary().call();

		//console.log(summary);

		return {
			address: props.query.address,
			chooseCategory: summary[0],
			title: summary[1],
			details: summary[2],
			minimumContribution: summary[3],
			balance: summary[4],
			requestsCount: summary[6],
			approversCount: summary[5],
			manager: summary[7]
		};
	}

	renderCards(){
		const {
			chooseCategory,
			title,
			details,
			balance,
			manager,
			minimumContribution,
			requestsCount,
			approversCount
		} = this.props;

		return(
			<Card.Group>

				<Card>
					<Card.Content>
						<Card.Header style={{overflowWrap:'break-word', color:'teal'}}>
							<Icon fitted name='hashtag' size='big' /> {chooseCategory}
						</Card.Header>
						<Card.Meta>Category</Card.Meta>
						<Card.Description>The category eligible for help</Card.Description>
					</Card.Content>
				</Card>

				<Card>
					<Card.Content>
						<Card.Header style={{overflowWrap:'break-word', color:'teal'}}>
							<Icon fitted name='file' size='big' /> {title}
						</Card.Header>
						<Card.Meta>Title</Card.Meta>
						<Card.Description>What the need is?</Card.Description>
					</Card.Content>
				</Card>

				<Card>
					<Card.Content>
						<Card.Header style={{overflowWrap:'break-word', color:'teal'}}>
							<Icon fitted name='pencil' size='big' />Description
						</Card.Header>
						<Card.Description>{details}</Card.Description>
					</Card.Content>
				</Card>

				<Card>
					<Card.Content>
						<Card.Header style={{overflowWrap:'break-word', color:'teal'}}>
							<Icon fitted name='id badge outline' size='big' /> Person in Need (address)
						</Card.Header>
						<Card.Meta style={{overflowWrap:'break-word'}} fitted>{manager}</Card.Meta>
						<Card.Description>The manager created this campaign and can create requests to withdraw money.</Card.Description>
					</Card.Content>
				</Card>

				<Card>
					<Card.Content>
						<Card.Header  style={{overflowWrap:'break-word', color:'teal'}}> <Icon fitted name='money bill alternate outline' size='big' /> { minimumContribution } </Card.Header>
						<Card.Meta>Minimum Contribution (wei)</Card.Meta>
						<Card.Description>You must contribute atleast to become an approver.</Card.Description>
					</Card.Content>
				</Card>

				<Card>
					<Card.Content>
						<Card.Header  style={{overflowWrap:'break-word', color:'teal'}}> <Icon fitted name='send outline' size='big' /> { requestsCount } </Card.Header>
						<Card.Meta>Number of Requests</Card.Meta>
						<Card.Description>A request tries to withdraw money from the contract. Requests must be approvers by approvers.</Card.Description>
					</Card.Content>
				</Card>

				<Card>
					<Card.Content>
						<Card.Header  style={{overflowWrap:'break-word', color:'teal'}}> <Icon fitted name='spy' size='big' /> { approversCount } </Card.Header>
						<Card.Meta>Numbers of approvers</Card.Meta>
						<Card.Description>Number of people who have already donated to this campaign.</Card.Description>
					</Card.Content>
				</Card>

				<Card>
					<Card.Content>
						<Card.Header  style={{overflowWrap:'break-word', color:'teal'}}> <Icon fitted name='dollar' size='big' /> { web3.utils.fromWei(balance,'ether') } </Card.Header>
						<Card.Meta>Campaign Balance (ether)</Card.Meta>
						<Card.Description>The balance is how much money this campaign has left to spend.</Card.Description>
					</Card.Content>
				</Card>
			</Card.Group>
		);
	}

	render() {
		return(
			<Layout>
				<div style={{margin:50}}>
						<Header as='h2' icon textAlign='center' color='teal'>
      								<Header.Content>
        							 	About
      								</Header.Content>
  				 	 	</Header>
  				 	 </div>
				<Grid>
					<Grid.Row>
						<Grid.Column  width={10}>
							{this.renderCards()}
						</Grid.Column>

						<Grid.Column  width={6}>
							<div>
						  <Grid.Row>
							 <ContributeForm address= { this.props.address } />
							</Grid.Row>
							</div>

							<div style={{marginTop:'155px'}}>

							<Grid.Row>
								<Grid.Column width={8}>
									<Link route={`/campaigns/${this.props.address}/requests`}>
										<a>
											<Button animated color='teal'>
			      									<Button.Content visible>View Requests</Button.Content>
			      										<Button.Content hidden>
			      								        	<Icon name='right arrow' />
			      										</Button.Content>
			    						</Button>
										</a>
									</Link>
								</Grid.Column>
						  </Grid.Row>
							</div>

						</Grid.Column>
					</Grid.Row>


				</Grid>

			</Layout>
		);
	}
}

export default CampaignShow;
