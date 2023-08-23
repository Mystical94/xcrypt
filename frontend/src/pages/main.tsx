import { faDiscord, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowRight,
  faArrowTurnDown
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNetwork } from 'wagmi';
import AddressProvider from '../components/address';
import { Connect } from '../components/connect';
import { XcryptID } from '../components/xcryptid';
import { Network } from '../components/network';
import { Send } from '../components/send';
import { Withdraw } from '../components/withdraw';

import LogoHover from '../svg/logo-hover.png';
import Logo from '../svg/logo.png';
import SendReceive from '../svg/send-receive.svg';
import Shield from '../svg/shield.svg';

import { registryAddress, explorer } from '../utils/constants';

import './main.css';

export function Main() {
  const [activeTab, setActiveTab] = useState<string>('send');

  const { chain } = useNetwork();
  const contractAddress = registryAddress[chain?.id || 50 || 51];
  const explorerAddress = explorer[chain?.id || 50 || 51];

  return (
    <section className="layout">
      <div className="content">
        <div className="header-h">
          <div className="header-item">
            <img className="logo logo-bg" src={LogoHover} alt="Xcrypt" />
            <img
              className="logo logo-default"
              src={Logo}
              alt="Xcrypt"
              onClick={() => (document.location.href = '/')}
            />
          </div>
          <div className="header-item">
            <Connect />

            <Network />
          </div>
        </div>

        <div className="promo large-block">
          <h1>
          Introducing <span className="promo-accent">Anonymous</span> & <span className="promo-accent">Effortless</span>
            <br /> Transfers on the {chain?.name.split(' ')[0] || 'XDC'} Network
          </h1>

          <div className="benefits">
            <div className="item">
              <img src={Shield} alt="" width={24} />
              <p>
              Safeguard Your Transactions with <strong>Untraceable&nbsp;Stealth Addresses</strong>{' '}
              
              </p>
            </div>
            <div className="item">
              <img src={SendReceive} alt="" width={24} />
              <p>
                Send and receive {chain?.nativeCurrency.symbol || 'XDC'}{' '}
                <strong>privately</strong>
              </p>
            </div>
          </div>
        </div>

        <AddressProvider>
          <XcryptID />

          <div className="large-block">
            <div className="nav-tabs">
              <div
                className={activeTab === 'send' ? 'tab active' : 'tab'}
                onClick={() => setActiveTab('send')}
              >
                <h2>
                  <FontAwesomeIcon icon={faArrowRight} />
                  &nbsp; Send
                </h2>
                <span className="super">
                  {chain?.nativeCurrency.symbol || 'XDC'}
                </span>
              </div>
              <div
                className={activeTab === 'withdraw' ? 'tab active' : 'tab'}
                onClick={() => setActiveTab('withdraw')}
              >
                <h2>
                  <FontAwesomeIcon icon={faArrowTurnDown} flip="horizontal" />
                  &nbsp; Receive
                </h2>
                <span className="super">
                  {chain?.nativeCurrency.symbol || 'XDC'}
                </span>
              </div>
            </div>

            <div
              className="pane"
              style={{ display: activeTab === 'send' ? 'block' : 'none' }}
            >
              <Send />
            </div>
            <div
              className="pane"
              style={{
                display: activeTab === 'withdraw' ? 'block' : 'none',
              }}
            >
              <Withdraw />
            </div>
          </div>
        </AddressProvider>

        <div className="footer">
          <a
            href="https://youtu.be/zeQw4JHy00o"
            rel="noreferrer"
            target="_blank"
          >
            <span>
              Demo video &nbsp;
              <FontAwesomeIcon icon={faYoutube} />
            </span>
          </a>
          <a
            href={`https://${explorerAddress}/address/${contractAddress}`}
            style={{ flexGrow: 1 }}
            target="_blank"
            rel="noreferrer"
          >
            <span>
              Registry contract &nbsp;
              <FontAwesomeIcon
                icon={faArrowRight}
                transform={{ rotate: -45 }}
              />
            </span>
          </a>
          <span className="version">v1.0.0</span>
        </div>
      </div>
    </section>
  );
}
