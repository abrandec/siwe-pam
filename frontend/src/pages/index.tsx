import { FC } from 'react'
import ConnectWallet from '@/components/ConnectWallet'
import { ShareIcon } from '@heroicons/react/outline'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { useAccount } from 'wagmi'

async function getNonce(url = '', data = {}) {
	
	const response = await fetch(url, {
	  method: 'POST',
	  mode: 'cors',
	  cache: 'no-cache',
	  credentials: 'same-origin',
	  headers: {
		'Content-Type': 'application/json'
		
	  },
	  body: JSON.stringify(data)
	});
	return response.json();
  }

  function printAddress(address={}) {
	console.log(address)
  }

const Home: FC = () => {
	const { address, isConnected } = useAccount();
	return (
		<div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0">
			<div className="absolute top-6 right-6">
				<ConnectWallet />
			</div>
			<ThemeSwitcher className="absolute bottom-6 right-6" />
			<div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
				<div className="flex justify-center pt-8 sm:justify-start sm:pt-0">
					<h1 className="text-6xl font-bold dark:text-white">SIWE Linux</h1>
					
				</div>

				<div className="mt-8 bg-white dark:bg-blue-400 text-center overflow-hidden shadow sm:rounded-lg">
				<button className="rounded-md" onClick={() => {printAddress({add: address})}}>Sign In</button>
				</div>
				
				<div className="flex justify-center mt-4 sm:items-center sm:justify-between">
					<div className="text-center text-sm text-gray-500 sm:text-left">
						<div className="flex items-center">
							<ShareIcon className="-mt-px w-5 h-5 text-gray-400" />

							
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
