import Head from 'next/head'
//import Script from 'next/script'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import styles from '@/styles/style.css' global css cannot be imported here do it in app.js
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <style jsx>
      {`
        .mySpan{
          font-size: 20px;
        }
    `}
    </style>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script src='sc.js' stratergy="lazyOnload"></Script> 
        Make sure that sc.js is placed in public before calling it here */}

        <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
           A blog for hunting coders by hunting coder
            {/* <code className={styles.code}>pages/index.js</code> */}
          </p>
          <div>
            {/* <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={237}
                height={158}
                priority
              />
            </a> */}
          </div>
        </div>

        <Image
            className={styles.myImg}
            src="/home.jpg"
            alt=""

            width={180}
            height={180} /> 
        <div className={styles.center}>
          <span className='mySpan'>Hunting Coders</span>
        </div>

        <div className={styles.blog}>
          <h3  className={styles.popularBlogsTitle}> Popular Blogs</h3>
          <div className={styles.blogItem}>
            <h3>How to learn Javascript in 2024</h3>

            <p>Javascript is used to design the best applications</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn Javascript in 2024</h3>

            <p>Javascript is used to design the best applications</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn Javascript in 2024</h3>

            <p>Javascript is used to design the best applications</p>
          </div>
        </div>

        <div className={styles.grid}>
          {/* <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a> */}
        </div>
      </main>
    </>
  )
}
