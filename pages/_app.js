// Context
import { ShopContextProvider } from '../lib/context';
// Auth0
import { UserProvider } from '@auth0/nextjs-auth0';
// Components
import Nav from '../components/Nav';
// Query
import { Provider, createClient } from 'urql';
// Styles
import '../styles/globals.css';
// Toast
import { Toaster } from 'react-hot-toast';

const client = createClient({
  url: `${process.env.NEXT_PUBLIC_BACKEND_GRAPHQL_URL}`,
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <UserProvider>
        <ShopContextProvider>
          <Toaster />
          <Nav />
          <Component {...pageProps} />
        </ShopContextProvider>
      </UserProvider>
    </Provider>
  );
}

export default MyApp;
