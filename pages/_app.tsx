import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import store from '../redux/store';
import {useSelector} from "react-redux";
import {useEffect} from "react";


function MyApp({ Component, pageProps }: AppProps) {


	return (
		<Provider store={store}>
			<MantineProvider
				theme={{
					fontFamily: 'Open Sans, sans serif',
					spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
					colorScheme: 'light',
				}}
			>
				<Component {...pageProps} />
			</MantineProvider>
		</Provider>
	);
}

export default MyApp;
