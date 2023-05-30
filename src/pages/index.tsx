import Head from 'next/head'
import styles from '@/styles/Home.module.css'

/*
* Components
* */

import Hero from "@/page_sections/hero";
import WhyUs from "@/page_sections/whyUs";
import Programmes from "@/page_sections/programmes";
import Services from "@/page_sections/services";
import Support from "@/page_sections/support";
import Secure from "@/page_sections/secure";
import ActionBanner from "@/page_sections/actionBanner";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Marketing Website Project</title>
        <meta name="description" content="Marketing Website Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main}`}>
          <Navbar/>
          <Hero/>
          <WhyUs/>
          <Programmes/>
          <Services/>
          <Support/>
          <Secure/>
          <ActionBanner/>
          <Footer/>
      </main>
    </>
  )
}
