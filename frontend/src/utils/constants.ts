import bnbLogo from '../svg/bnb-logo.png';
import { AddrMapType, MapType } from './types';

export const networkIcons: MapType = {
  5611: bnbLogo,
  97: bnbLogo
}

export const stealthAddress: AddrMapType = {
  0: '0x0',
  5611: '0xe7f7067c9ecab27c5f7f13e02b13ed50931f6d0f',
  97: '0x677EE2AA9f5348980d38BA00B5E525a90FA2C50d'
}

export const explorer: MapType = {
  5611: 'opbnb-testnet.bscscan.com',
  97: 'testnet.bscscan.com'
}