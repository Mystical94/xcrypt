import { Chain } from 'wagmi'

export const xdc = {
  id: 50,
  name: 'XDC',
  network: 'xdc-mainnet',
  nativeCurrency: {
    decimals: 18,
    name: 'XDC',
    symbol: 'XDC',
  },
  rpcUrls: {
    default: { http: ['https://erpc.xinfin.network'] },
    public: { http: ['https://erpc.xinfin.network'] },
  },
  blockExplorers: {
    default: {
      name: 'XDC Explorer',
      url: 'https://xdcscan.io',
    },
  },
} as const satisfies Chain