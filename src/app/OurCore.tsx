import Image from 'next/image'

const OurCore = () => {
  return (
    <section className="ourcore-container">
      <main className="ourcore">
        <div className="ourcore__wrapper">
          <h1 className="ourcore__wrapper__title">Our core values</h1>
          <Image
            src="/idea.svg"
            width={75}
            height={88}
            alt="question-img"
            className="question-img"
          />
        </div>
        <div className="ourcore__items">
          <div className="ourcore__items__item one">
            <span className="ourcore__items__item__label">01. Innovation</span>
            <hr className="ourcore__items__item__divider" />
            <p className="ourcore__items__item__description">
              Startupz operates where entrepreneurship and technology intersect.
              We design solutions and turn them into businesses models.
            </p>
          </div>
          <div className="ourcore__items__item two">
            <span className="ourcore__items__item__label">02. People</span>
            <hr className="ourcore__items__item__divider" />
            <p className="ourcore__items__item__description">
              Talent is what enable us to create great companies.
            </p>
          </div>
        </div>
      </main>
    </section>
  )
}

export default OurCore
