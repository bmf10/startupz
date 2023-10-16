'use client'
import About from './About'
import Hero from './Hero'
import NavigationBar from './NavigationBar'
import Solver from './Solver'
import OurCore from './OurCore'
import OurWorks from './OurWorks'
import Hiring from './Hiring'
import Contact from './Contact'
import Footer from './Footer'
import { useInView } from 'react-intersection-observer'

export default function Home() {
  const [homeRef, , homeEntry] = useInView({ threshold: 0.5 })
  const [aboutRef, , aboutEntry] = useInView({ threshold: 0.5 })
  const [footerRef, , footerEntry] = useInView({ threshold: 0.5 })
  const [contactRef, , contactEntry] = useInView({ threshold: 0.5 })
  const [worksRef, , worksEntry] = useInView({ threshold: 0.5 })

  return (
    <main className="home">
      <NavigationBar
        onHomeClick={() =>
          homeEntry?.target.scrollIntoView({ behavior: 'smooth' })
        }
        onStartupClick={() =>
          aboutEntry?.target.scrollIntoView({ behavior: 'smooth' })
        }
        onContactClick={() =>
          footerEntry?.target.scrollIntoView({ behavior: 'smooth' })
        }
        onWorkWithUsClick={() =>
          contactEntry?.target.scrollIntoView({ behavior: 'smooth' })
        }
      />
      <Hero
        ref={homeRef}
        onWorkClick={() =>
          worksEntry?.target.scrollIntoView({ behavior: 'smooth' })
        }
      />
      <About ref={aboutRef} />
      <Solver />
      <OurCore />
      <OurWorks ref={worksRef} />
      <Hiring />
      <Contact ref={contactRef} />
      <Footer
        ref={footerRef}
        onEmailClick={() =>
          contactEntry?.target.scrollIntoView({ behavior: 'smooth' })
        }
      />
    </main>
  )
}
