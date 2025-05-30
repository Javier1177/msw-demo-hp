import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

async function enableMocking() {
  if (
    import.meta.env.MODE !== 'development' ||
    import.meta.env.VITE_API_BASE_URL
  ) {
    return;
  }

  const { worker } = await import('./mocks/browser');
  await worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
});
