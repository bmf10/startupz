'use client'
import { Button } from 'reactstrap'

const Hiring = () => {
  return (
    <section className="hiring-container">
      <div className="hiring">
        <h3 className="hiring__title">We are hiring!</h3>
        <p className="hiring__desc">
          We&apos;re always looking for talented people to join and help build
          our startups. Check out our current openings
        </p>
        <a
          href="https://www.linkedin.com/company/startupz.com/jobs/"
          target="_blank"
        >
          <Button color="primary">See current openings</Button>
        </a>
      </div>
    </section>
  )
}

export default Hiring
