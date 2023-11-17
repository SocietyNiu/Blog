import { AppProps } from 'next/app'
import '../common/style-global.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
