import React from 'react'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import { RouterProvider } from './Router'
import HomePage from './screens/home'

export function App() {
	return (
		<ChakraProvider>
			<RouterProvider />
		</ChakraProvider >
	)
}