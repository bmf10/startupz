import Image from 'next/image'
import { LegacyRef, forwardRef } from 'react'

const About = forwardRef((_props, ref) => {
  return (
    <section className="about-container" ref={ref as LegacyRef<any>}>
      <main className="about">
        <div className="about__wrapper">
          <h1 className="about__wrapper__title">Who we are</h1>
          <Image
            src="/question.svg"
            width={75}
            height={88}
            alt="question-img"
            className="question-img"
          />
        </div>
        <p className="about__description">
          We create products that have innovation and technology at their core.{' '}
          <br /> We value working with talented people that understand the
          possibilities of today.
        </p>
        <div className="about__items">
          <div className="about__items__item">
            <span className="about__items__item__label">01</span>
            <p className="about__items__item__description">
              We develop innovative products, systems and services
            </p>
          </div>
          <div className="about__items__item">
            <span className="about__items__item__label">02</span>
            <p className="about__items__item__description">
              Next we build teams to scale them into companies
            </p>
          </div>
          <div className="about__items__item">
            <span className="about__items__item__label">03</span>
            <p className="about__items__item__description">
              Each startup solving one problem <br /> at a time
            </p>
          </div>
        </div>
      </main>
    </section>
  )
})

About.displayName = 'About'

export default About
