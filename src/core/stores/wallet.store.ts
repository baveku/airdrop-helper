import { Store } from './index';
import { observable, action, runInAction, flow } from 'mobx'

export class WalletStore implements Store {
	@observable id = ""
	@observable wallets: Wallet[] = []
}

class Wallet {
	
}