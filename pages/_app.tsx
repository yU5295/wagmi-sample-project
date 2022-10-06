import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import {
  WagmiConfig,
  createClient,
  defaultChains,
  configureChains,
} from "wagmi";

import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
// import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Configure chains & providers with the Alchemy provider.
const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  alchemyProvider({ apiKey: "bXgQMQsm6TSKaDi9zxmuUv6EtUpsXCxz" }),
  publicProvider(),
]);

// Set up client
const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "wagmi",
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    // new InjectedConnector({
    //   chains,
    //   options: {
    //     name: "Injected",
    //     shimDisconnect: true,
    //   },
    // }),
  ],
  provider,
  webSocketProvider,
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Wagmi</title>
        <meta name="description" content="Wagmi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WagmiConfig client={client}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </WagmiConfig>
    </>
  );
}

export default MyApp;
