'use client'
import { LegacyRef, forwardRef } from 'react'
import { Button } from 'reactstrap'

interface Props {
  readonly onWorkClick: () => void
}

const Hero = forwardRef<unknown, Props>((props, ref) => {
  return (
    <section className="hero-container" ref={ref as LegacyRef<any>}>
      <main className="hero">
        <h1 className="hero__title">We Create Startups.</h1>
        <p className="hero__description">
          We are startup studio that develops and launches new companies.
        </p>
        <Button color="primary" onClick={props.onWorkClick}>
          See our works
        </Button>
      </main>
    </section>
  )
})

Hero.displayName = 'Hero'

export default Hero
