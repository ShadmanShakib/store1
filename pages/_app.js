import '../styles/globals.css'
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import {wrapper} from '../redux/store'


function MyApp({ Component, pageProps }) {
  return(
   
     <Component {...pageProps} />
     )
}

export default wrapper.withRedux(MyApp);
