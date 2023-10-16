'use client'
import Image from 'next/image'
import { LegacyRef, forwardRef } from 'react'
import { Col, Row } from 'reactstrap'

interface Props {
  readonly onEmailClick: () => void
}

const Footer = forwardRef<unknown, Props>((props, ref) => {
  return (
    <section className="footer" ref={ref as LegacyRef<any>}>
      <footer>
        <Row className="gy-4">
          <Col sm={12} md={3} lg={3}>
            <div className="footer__copyright">
              <Image src="/logo.svg" alt="logo" width={178} height={42} />
              <p className="">
                © 2020 Startupz. <br /> All rights reserved.{' '}
              </p>
            </div>
          </Col>
          <Col sm={12} md={3} lg={3}>
            <div className="footer__links">
              <h5>Companies</h5>
              <div className="link">
                <a target="_blank" href="https://tolq.com/">
                  Tolq
                </a>

                <a target="_blank" href="https://legalsite.co/">
                  Legalsite
                </a>

                <a target="_blank" href="https://codekeeper.co/">
                  Codekeeper
                </a>

                <a target="_blank" href="https://feedbacklabs.org/">
                  Feedback Labs
                </a>
              </div>
            </div>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <div className="footer__contact">
              <h5>Contact</h5>
              <p>
                World Trade Center - The Hague Prinses Margrietplantsoen 33{' '}
                <br /> 2595 AM The Hague <br /> The Netherlands
              </p>
              <span onClick={props.onEmailClick}>Send us an email</span>
            </div>
          </Col>
          <Col sm={12} md={2} lg={2}>
            <div className="footer__socmed">
              <h5>Follow us</h5>
              <div className="link">
                <a target="_blank" href="https://twitter.com/startupzcom">
                  <Image
                    src="/twitter.svg"
                    width={23}
                    height={23}
                    alt="twitter"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/startupz.com/"
                >
                  <Image
                    src="/linkedin.svg"
                    width={23}
                    height={23}
                    alt="twitter"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/startupzcom/"
                >
                  <Image
                    src="/instagram.svg"
                    width={23}
                    height={23}
                    alt="twitter"
                  />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </footer>
    </section>
  )
})

Footer.displayName = 'Footer'

export default Footer
