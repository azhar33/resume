import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import HomeHero from '@/components/HomeHero'
import { SocialIcons } from '@/components/SocialIcons'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Skills from '@/components/Skills'
import Contacts from '@/components/Contacts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <SocialIcons />
    <Header />
    <HomeHero />
    <About />
    <Portfolio />
    <Skills />
    <Contacts />
    </>
  )
}
