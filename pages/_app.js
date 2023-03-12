import '../styles/globals.css'
import Nav from '../components/nav'

function MyApp({ Component, pageProps }) {

  return (
    <div>

      <Component {...pageProps} />
    </div>
  )

}


export default MyApp
