import '../styles/globals.css'

//Tüm componentleri saran comp
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
