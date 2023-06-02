import Header from '@/components/layout/Header'
import Head from 'next/head'
import Home from './home'
 
export default function Index() {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Genereted by Hilal'/>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <Header/>
    </div>
  )
}
