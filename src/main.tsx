import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// Ensure this path is correct

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
); 