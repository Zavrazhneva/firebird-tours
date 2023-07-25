import { createRoot } from 'react-dom/client';
import { App } from './App';
import { Provider } from 'react-redux';
import configureStore from './store/store';

const appRootNode = document.createElement('div');
document.body.appendChild(appRootNode);

const root = createRoot(appRootNode);

root.render(<Provider store={configureStore()}><App /></Provider>);