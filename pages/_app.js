// Context
import { ShopContextProvider } from '../lib/context';
// Components
import Nav from '../components/Nav';
// Query
import { Provider, createClient } from 'urql';
// Styles
import '../styles/globals.css';

const client = createClient({
  url: process.env.NEXT_PUBLIC_BACKEND_GRAPHQL_URL,
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <ShopContextProvider>
        <Nav />
        <Component {...pageProps} />
      </ShopContextProvider>
    </Provider>
  );
}

export default MyApp;
