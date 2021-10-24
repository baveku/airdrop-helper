import { ChakraProvider } from '@chakra-ui/react'

import { GlobalStyle } from './styles/GlobalStyle'

import HomePage from './screens/home'
import { useAppStore } from '@core/stores'

export function App() {
	return (
		<ChakraProvider>
			<HomePage />
		</ChakraProvider >
	)
}