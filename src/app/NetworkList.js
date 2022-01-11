import React, { useState, useEffect } from "react";
import { useWeb3React, Web3ReactProvider } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { ethers } from "ethers";
import NetworkInfo from "./NetworkInfo";
import networkData from "./utils/networkData";
const injected = new InjectedConnector();

const NetworkList = () => {
  function getLibrary(provider, _) {
    return new ethers.providers.JsonRpcProvider("https://api.avax.network/ext/bc/C/rpc");
  }

  return (
    <>
      {networkData.map((network) => {
          function getLibrary(provider, _) {
            return new ethers.providers.JsonRpcProvider(network.rpcUrl);
          }
          return (
            <Web3ReactProvider getLibrary={getLibrary}>
              <NetworkInfo networkData={network} />
            </Web3ReactProvider>        
          )
      })}
    </>
  )
}

export default NetworkList;
