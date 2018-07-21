import Web3 from 'web3';          //Step 1 of To-do's for the Campaign List Page
                                  //This file is executed twice 1. Next.js server 2. Browser

/*const web3 = new Web3(window.web3.currentProvider);    //window is defined in the browser and not on the
                                                       //node.js(next.js) server where next.js is running
*/

let web3;

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {     //typeof window returns type of 'window' i.e object and
  //We are in the browser and metamask is running.                            //typeof window.web3 checks if web3 has been injected by metamask
  web3 = new Web3(window.web3.currentProvider);
} else {
  //We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(         //creating our own provider using infura
    'https://rinkeby.infura.io/0wKA21HKGFAbkwrcXEg0'
  );
  web3 = new Web3(provider);
}
export default web3;
