require("@nomicfoundation/hardhat-toolbox");

const NEXT_PUBLIC_RPC_URL = "https://rpc.ankr.com/eth_holesky";
const NEXT_PUBLIC_PRIVATE_KEY = "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      viaIR: true,
    },
  },
  networks: {
    //hardhat: {
      //chainId: 31337,
    //},
    holesky: {
       url: NEXT_PUBLIC_RPC_URL,
       accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
     },
  },
};
