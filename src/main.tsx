import React, { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Carregando a App dinamicamente
const App = React.lazy(() => import('./App'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </StrictMode>,
);
