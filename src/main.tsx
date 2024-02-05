import ReactDOM from 'react-dom/client'
import './index.css'
import "./styles/misc.css"
import { ApolloProvider } from '@apollo/client'
import client from './gql/client.ts'
import { ClerkProvider } from '@clerk/clerk-react'
import { VITE_CLERK_PUBLISHABLE_KEY } from './utils/clerk-key.ts'
import { dark } from '@clerk/themes';
import { Provider } from 'jotai'
import { store } from './lib/store.tsx'
import RootLayout from './layout/layout.tsx'
import { RouterProvider } from 'react-router-dom'
import router from './lib/routes.tsx'


const publishableKey = VITE_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <ClerkProvider appearance={{
          baseTheme: dark
        }} publishableKey={publishableKey}>
      <ApolloProvider client={client}>
          <RootLayout>
            <RouterProvider router={router} />
        </RootLayout>
      </ApolloProvider>
      </ClerkProvider>
    </Provider>
)
