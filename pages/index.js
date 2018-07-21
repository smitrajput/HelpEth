import React, {Component} from 'react';
import { Card, Button ,Icon,Header} from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import {Link} from '../routes';
import contri from '../components/ContributeForm';

class CampaignIndex extends Component {
	static async getInitialProps(){
		const campaigns = await factory.methods.getDeployedCampaigns().call();

		return { campaigns };
	}

	renderCampaigns() {

		const items = this.props.campaigns.map(address => {
			return {
				header:address,
				description:(
					<Link route={`/campaigns/${address}`}>
					<a><p style={{color:'teal'}}>View<Icon name='right arrow' /></p></a>
					</Link>
				),
				fluid: true
			};
		});

		return <Card.Group items={items} />;
	}

	render(){
		return (
			<Layout>
				<div>
					<div>

					<img src='../static/HelpEth.png' style={{width:350, height:350, marginLeft:380, marginTop:0}} />

					<h2 align='center' style={{marginTop:0, color:'teal'}}>Get Sponsors for your events, and Philanthropists for your welfare orgs, all at one place!</h2>

					</div>
					<div style={{margin:50}}>
						<Header as='h2' icon textAlign='center' color='teal'>
    							  	<Icon name='users'  circular />
      								<Header.Content>
        								Needs
      								</Header.Content>
  				 	 	</Header>
  				 	</div>
					<Link route="/campaigns/new">
						<a>
							<Button animated='fade' floated="right" basic color='teal'>
								 <Button.Content visible><p style={{color:'teal'}}>Create Need</p></Button.Content>
    							<Button.Content hidden>
        						<Icon name='add circle' color='teal' />
        					</Button.Content>
							</Button>
						</a>
					</Link>
					{ this.renderCampaigns() }
			</div>
		</Layout>
		);
	}
}

export default CampaignIndex;
