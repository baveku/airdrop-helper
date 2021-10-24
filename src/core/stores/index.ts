import { observable, flow, action, makeAutoObservable } from 'mobx'
import React, { createContext, useContext } from 'react'
import AppStore from './app.store'

const AppStoreContext = createContext(new AppStore())

function useAppStore(): AppStore {
	return useContext(AppStoreContext)
}

function useStoreSelector<T>(fn: (store: AppStore) => T): T {
	const store = useAppStore()
	return fn(store)
}

export { useAppStore, useStoreSelector }