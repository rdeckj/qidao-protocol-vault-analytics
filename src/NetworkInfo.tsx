import React, {useEffect, useState} from 'react'
import {ethers} from 'ethers'
import maiAbi from './abis/maiAbi.json'
import {formatAmount} from './utils/utils'
import {AddressData, MaiAddresses} from './Connectors/HubData'
import {Network} from '@web3-react/network'
import {Web3ReactStore} from '@web3-react/types'
import {Web3ReactHooks} from '@web3-react/core'
import MaiLogo from './imgs/logos/mimatic-red.png'

export const NetworkInfo = ({
    networkData,
    connector,
}: {
    networkData: AddressData
    connector: [Network, Web3ReactHooks, Web3ReactStore]
}) => {
    const [network, hooks, state] = connector
    const { useIsActive, useProvider, useChainId } = hooks
    const active = useIsActive()
    const provider = useProvider()
    const chainId = useChainId()
    const { hub, name } = networkData
    const [hubBalance, setBalance] = useState('0')
    const [isConnected, connectStatus] = useState(false)

    useEffect(() => {
        async function fetchHubBalance() {
            if (!isConnected) {
                try {
                    await network.activate(networkData.chainId)
                    connectStatus(true)
                } catch (ex) {
                    console.warn(ex)
                }
            }
            if (active && provider && chainId) {
                const maiContract = new ethers.Contract(MaiAddresses[chainId], maiAbi, provider)
                let amount = await maiContract.balanceOf(hub)
                setBalance(formatAmount(amount, name))
            }
            console.log({ state })
        }
        fetchHubBalance().then()
    })

    return (
        <div className="mx-auto w-80">
            <div className="block p-6 min-w-100 bg-white rounded-lg shadow-md hover:bg-gray-100 dark:bg-dm-tertiary dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">{name}</h5>

                <div className="flex items-center">
                    <span className="py-2 px-1 my-auto">
                        <img src={MaiLogo} alt="Mai Token Icon" className="h-5 -mb-1" />
                    </span>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Balance: {hubBalance}</p>
                </div>
            </div>
        </div>
    )
}