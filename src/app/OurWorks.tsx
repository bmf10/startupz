'use client'
import Image from 'next/image'
import { LegacyRef, forwardRef, useState } from 'react'
import { Button, Col, Row } from 'reactstrap'
import ProjectModal from './ProjectModal'

export interface Project {
  readonly title: string
  readonly desc: string
  readonly image: string
}

const projects: Project[] = [
  {
    title: 'Tolq',
    desc: 'Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution.',
    image: '/tolq.png',
  },
  {
    title: 'Feedback Labs',
    desc: 'Feedback Labs turns feedback into actionable insights for your team. <br/> &nbsp; <br/> &nbsp;',
    image: '/feedback labs.png',
  },
  {
    title: 'Codekeeper',
    desc: 'Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.',
    image: '/codekeeper.png',
  },
  {
    title: 'LegalSite',
    desc: 'Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.',
    image: '/legalsite.png',
  },
]

const OurWorks = forwardRef((_props, ref) => {
  const [project, setProject] = useState<Project>()
  return (
    <>
      <section className="ourworks" ref={ref as LegacyRef<any>}>
        <h2 className="ourworks__title">Our works</h2>
        <Row className="ourworks__projects g-4">
          {projects.map(({ desc, image, title }) => (
            <Col sm={12} md={6} key={title}>
              <div className="project-card">
                <h5 className="project-card__title">{title}</h5>
                <p
                  className="project-card__description"
                  dangerouslySetInnerHTML={{ __html: desc }}
                />
                <Image
                  width={371}
                  height={244}
                  src={image}
                  alt="tolq-img"
                  layout="responsive"
                />
                <Button
                  outline
                  color="primary"
                  onClick={() => setProject({ desc, image, title })}
                >
                  More
                </Button>
              </div>
            </Col>
          ))}
        </Row>
        <div className="ourworks__content">
          <Image src="/right.png" width={59} height={66} alt="thumb-right" />
          <p className="ourworks__content__text">
            Startups create a world that actually is better. Any problem that
            can be solved, will be solved by a startup, and that is a huge
            opportunity.
          </p>
          <Image src="/left.png" width={59} height={66} alt="thumb-left" />
        </div>
      </section>
      <ProjectModal
        isOpen={!!project}
        onClose={() => setProject(undefined)}
        data={project}
      />
    </>
  )
})

OurWorks.displayName = 'Our Works'

export default OurWorks
