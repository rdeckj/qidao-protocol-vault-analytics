import {initializeConnector} from "@web3-react/core";
import {Network} from "@web3-react/network";
import {URLS} from "../../Connectors/Chains";
import {NetworkInfo} from "../Network/NetworkInfo";
import React from "react";

const MasterChefEndblockList = ({}: {}) => {
    return (
        <div className="min-w-100 m-6 block flex w-96 flex-col gap-y-4 rounded-lg bg-gray-50 p-6 shadow-md dark:border-gray-700 dark:bg-dm-secondary">
            <div className="flex h-28 text-blue">
                {/*<img className="mx-auto my-auto max-h-full max-w-full" src={logo} alt="Router Liquidity Logo" />*/}
            </div>
            {/*{networkData.map((network, key) => {*/}
            {/*    const connector = initializeConnector<Network>(*/}
            {/*        (actions) => new Network(actions, URLS),*/}
            {/*        Object.keys(URLS).map((chainId) => Number(chainId))*/}
            {/*    )*/}
            {/*    return <NetworkInfo key={key} networkData={network} connector={connector} />*/}
            {/*})}*/}
        </div>
    )
}


export default MasterChefEndblockList