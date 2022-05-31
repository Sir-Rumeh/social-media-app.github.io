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

const serverUrl = "https://lzgqsq3g27b2.usemoralis.com:2053/server";
const appId = "VyEg7YNusX1a5ImNQ5GMf4XA7LGPQCRHeyMgIMOr";

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
