import { ethers } from "ethers";

const REC_URL= "https://api.zan.top/node/v1/eth/mainnet/82e61ce59b28464d9d8ddb97942c315d";
const WALLECTKEY = "091e015d1a2c569801043f7394d07117920d6a84a341f0e0116d7bb7e1bceb20";


const provider = ethers.JsonRpcProvider(REC_URL);
const main = async () => {
    const balance = await provider.getBalance(WALLECTKEY);
    console.log(`ETH Balance: ${ethers.formatEther(balance)} ETH`);
}
main()