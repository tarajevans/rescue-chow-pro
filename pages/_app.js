import '../styles/globals.css'
import Nav from '../components/nav'
import {GlobalContextProvider} from '../utils/globalStates/globalState'
import {CartContextProvider} from '../utils/globalStates/cartState'

function MyApp({ Component, pageProps }) {

  return (
    <div>
      <GlobalContextProvider>
        <CartContextProvider>
          <Nav/>
        <Component {...pageProps} />
        </CartContextProvider>
      </GlobalContextProvider>
    </div>
  )
}
export default MyApp;
