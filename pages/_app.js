// Context
import { ShopContextProvider } from '../lib/context';
// Components
import Nav from '../components/Nav';
// Query
import { Provider, createClient } from 'urql';
// Auth0
import { UserProvider } from '@auth0/nextjs-auth0';
// Styles
import '../styles/globals.css';

const client = createClient({
  url: `${process.env.NEXT_PUBLIC_BACKEND_GRAPHQL_URL}`,
});

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Provider value={client}>
        <ShopContextProvider>
          <Nav />
          <Component {...pageProps} />
        </ShopContextProvider>
      </Provider>
    </UserProvider>
  );
}

export default MyApp;
