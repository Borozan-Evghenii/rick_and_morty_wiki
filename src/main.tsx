import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import './index.css';
import ApolloAppProvider from './utils/providers/ApolloProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ApolloAppProvider>
      <App />
    </ApolloAppProvider>
  </BrowserRouter>
);
