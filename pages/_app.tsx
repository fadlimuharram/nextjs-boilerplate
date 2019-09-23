import App from 'next/app';
import React from 'react';
import withReduxStore from '../lib/with-redux-store';
import { Provider } from 'react-redux';
import { register, unregister } from 'next-offline/runtime';
import '../assets/styles/index.scss';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

interface Props {
	reduxStore: any;
}

class MyApp extends App<Props> {
	persistor: any;

	constructor(props) {
		super(props);
		this.persistor = persistStore(props.reduxStore);
	}

	componentDidMount() {
		register();

		this.renderJquery();
		this.renderPopper();
		this.renderBootstrap();
	}

	componentWillUnmount() {
		unregister();
	}

	renderJquery = () => {
		const script = document.createElement('script');
		script.src = 'https://code.jquery.com/jquery-3.2.1.slim.min.js';
		script.async = false;

		document.body.appendChild(script);
	};

	renderPopper = () => {
		const script = document.createElement('script');
		script.src = 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js';
		script.async = false;

		document.body.appendChild(script);
	};

	renderBootstrap = () => {
		const script = document.createElement('script');
		script.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js';
		script.async = false;

		document.body.appendChild(script);
	};

	render() {
		const { Component, pageProps, reduxStore } = this.props;
		return (
			<Provider store={reduxStore}>
				<PersistGate loading={<Component {...pageProps} />} persistor={this.persistor}>
					<Component {...pageProps} />
				</PersistGate>
			</Provider>
		);
	}
}

export default withReduxStore(MyApp);
