
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';



import { ethers } from "ethers";

const REC_URL= "https://api.zan.top/node/v1/eth/sepolia/82e61ce59b28464d9d8ddb97942c315d";
const REC_URL_M= "https://api.zan.top/node/v1/eth/mainnet/82e61ce59b28464d9d8ddb97942c315d";

const WALLECTKEY = "091e015d1a2c569801043f7394d07117920d6a84a341f0e0116d7bb7e1bceb20";
const WALLECT_ADDRESS ="0xf60A5876A62F41c209F24C4F45dC215B42736dA4";

var provider=null;




function App() {
  const [eth, setEth] = useState(0);
 
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <select name="selevtValue" v-model="sv" className = "select" onChange={selected}>
                <option value="1">spolia</option>
                <option value="2">mainnet</option>
               
          </select>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         <p>
          eth: {eth}
         </p>
        </a>
      </header>
    </div>
  );

  async function selected(event){
    let str = event.target.value;
    if(str == 1){
      provider = await ethers.getDefaultProvider(REC_URL);
    }
    if(str == 2){
       provider =await ethers.getDefaultProvider(REC_URL_M);
    }
  
    const balance = await provider.getBalance(WALLECT_ADDRESS);

    let show = (Number(balance)/1000000000000000000).toFixed(5);

    setEth(show);
  
  }


}

//main()
 


  


 







export default App;



 
  
