import web3 from './web3';                //File purpose: for easy access to deployed factory instance; Step 2
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xD9c712b77B5A296EaE980161dB00D8942FC03e45'
);

export default instance;
