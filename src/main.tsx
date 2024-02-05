import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import './index.css';
import ApolloAppProvider from './utils/providers/ApolloProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloAppProvider>
    <App />
  </ApolloAppProvider>
);
