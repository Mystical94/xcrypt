import { Chain } from 'wagmi'

export const opbnbTestnet = {
  id: 5611,
  name: 'opBNB Testnet',
  network: 'opbnb-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'BNB',
    symbol: 'BNB',
  },
  rpcUrls: {
    default: { http: ['https://opbnb-testnet-rpc.bnbchain.org'] },
    public: { http: ['https://opbnb-testnet-rpc.bnbchain.org'] },
  },
  blockExplorers: {
    default: {
      name: 'opBNB Testnet Explorer',
      url: 'https://opbnb-testnet.bscscan.com/',
    },
  },
} as const satisfies Chain