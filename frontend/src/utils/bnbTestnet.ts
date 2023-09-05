import { Chain } from 'wagmi'

export const bnbTestnet = {
  id: 97,
  name: 'BNB Testnet',
  network: 'bnb-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'BNB',
    symbol: 'BNB',
  },
  rpcUrls: {
    default: { http: ['https://endpoints.omniatech.io/v1/bsc/testnet/public'] },
    public: { http: ['https://endpoints.omniatech.io/v1/bsc/testnet/public'] },
  },
  blockExplorers: {
    default: {
      name: 'BSC Testnet Explorer',
      url: 'https://testnet.bscscan.com',
    },
  },
} as const satisfies Chain