import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { MoralisProvider } from "react-moralis";

const container = document.getElementById("root");
const root = createRoot(container);

const serverUrl = "https://txxcudlosn6t.usemoralis.com:2053/server";
const appId = "Lg0X2chvyBbk1lCM8G5xBNGbYshMBi1lL1u6U8cU";

root.render(
	<React.StrictMode>
		<MoralisProvider serverUrl={serverUrl} appId={appId}>
			<Provider store={store}>
				<App />
			</Provider>
		</MoralisProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
