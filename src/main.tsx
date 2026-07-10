import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {LazyMotion} from 'motion/react';
import App from './App.tsx';
import './index.css';

// Font imports (self-hosted to avoid DNS/TLS overhead and FCP delay)
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource/playfair-display/400-italic.css';
import '@fontsource/work-sans/400.css';
import '@fontsource/work-sans/500.css';
import '@fontsource/work-sans/600.css';
import '@fontsource/work-sans/700.css';

const loadFeatures = () => import('motion/react').then(res => res.domAnimation);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LazyMotion features={loadFeatures} strict>
      <App />
    </LazyMotion>
  </StrictMode>,
);
