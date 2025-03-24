import Head from 'next/head'

export default function Home() {
  return (
    <div className="p-8">
      <Head>
        <title>Novanda's Portfolio</title>
      </Head>
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Novanda 👋</h1>
      <p className="text-lg">Welcome to my personal portfolio. Check out my projects below!</p>
    </div>
  )
}