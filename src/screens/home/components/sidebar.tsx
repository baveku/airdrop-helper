import { Button, HStack, List, ListIcon, ListItem, Stack, VStack } from '@chakra-ui/react'
import { useObserver } from 'mobx-react-lite'
import React, { useState, useEffect } from 'react'
import { useAppStore, useStoreSelector } from '@core/stores'


const UIAirdropItem = (props: { id: string }) => {
	const wallet = useStoreSelector(s => s.wallet.wallets.find(e => e.id === props.id))
	return useObserver(() =>
		<VStack>
			<p>{wallet?.id}</p>
			<p>{wallet?.title}</p>
		</VStack>
	)
}


export function SideBar() {
	const store = useStoreSelector(s => s.wallet)
	return useObserver(() =>
		<List width="200px" backgroundColor={"grey.500"} spacing={3}>
			{store.wallets.map(e => <ListItem id={e.id}>
				<UIAirdropItem id={e.id} />
			</ListItem>)}
		</List>
	)
}
