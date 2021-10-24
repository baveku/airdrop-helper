import { Button, HStack, Stack, VStack } from '@chakra-ui/react'
import { useObserver } from 'mobx-react-lite'
import React, { useState, useEffect } from 'react'
import { Social } from '@models/social.model'
import _ from 'lodash'
import { useAppStore, useStoreSelector } from '../../../core/stores'

function HomeDetail() {
	const store = useStoreSelector(s => s.wallet)

	const onClick = () => {
		store.create("a", "hello")
	}

	return <VStack>
		<Button onClick={onClick}>
			Create
		</Button>
	</VStack>
}

export default HomeDetail