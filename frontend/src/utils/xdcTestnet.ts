import { Chain } from 'wagmi'

export const xdcTestnet = {
  id: 51,
  name: 'XDC Apothem',
  network: 'xdc-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'XDC',
    symbol: 'XDC',
  },
  rpcUrls: {
    default: { http: ['https://erpc.apothem.network'] },
    public: { http: ['https://erpc.apothem.network'] },
  },
  blockExplorers: {
    default: {
      name: 'XDC Apothem Testnet Explorer',
      url: 'https://apothem.xinfinscan.com',
    },
  },
} as const satisfies Chain