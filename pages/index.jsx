import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Trabalho 02</title>
      </Head>
      <h1>Aluno: Ramon Velasco</h1>
      <h2>Trabalho Next.js Etapa 02</h2>
      {/* <h2>{process.env.NEXT_PUBLIC_API_URL}</h2> */}
      <br />
      <Link href="/CSR">CSR</Link>
      <br />
      <Link href="/SSR">SSR</Link>
      <br />
      <Link href="/SSG">SSG</Link>    
      <br />
      <Link href="/ISR">ISR</Link>        

    </div>
  )
}
