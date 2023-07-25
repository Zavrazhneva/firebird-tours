import { createRoot } from 'react-dom/client';
import {App} from "./App";

const appRootNode = document.createElement("div");
document.body.appendChild(appRootNode);

const root = createRoot(appRootNode);

root.render(<App />)