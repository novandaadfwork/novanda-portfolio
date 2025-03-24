import Head from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Novanda's Portfolio</title>
      </Head>
      <NavBar />
      <main className="min-h-screen p-8 bg-gray-50">
        <section className="text-center mb-12">
          <img src="/profile.jpg" alt="Novanda" className="w-32 h-32 rounded-full mx-auto" />
          <h1 className="text-4xl font-bold mt-4">Hi, I'm Novanda 👋</h1>
          <p className="text-lg text-gray-600">Web Developer & Data Enthusiast</p>
        </section>
        <section className="grid md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
          <div>
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p>I love building web apps and exploring data. I’m currently focused on Next.js and Python for ML.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Skills</h2>
            <ul className="list-disc list-inside">
              <li>JavaScript (React, Next.js)</li>
              <li>Python (Pandas, Sklearn)</li>
              <li>Tailwind CSS</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}