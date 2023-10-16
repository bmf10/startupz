import { FC } from 'react'
import { Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'
import { Project } from './OurWorks'
import Image from 'next/image'

interface Props {
  readonly isOpen: boolean
  readonly onClose: () => void
  readonly data?: Project
}

const ProjectModal: FC<Props> = ({ isOpen, onClose, data }) => {
  return (
    <Modal isOpen={isOpen} toggle={onClose} className="project-modal">
      <ModalHeader toggle={onClose}>{data?.title}</ModalHeader>
      <ModalBody>
        <Row>
          <Col sm={12} md={12}>
            <Image
              width={371}
              height={244}
              src={data?.image || ''}
              alt="tolq-img"
              layout="responsive"
            />
          </Col>
          <Col sm={12} md={12}>
            <p
              className="description"
              dangerouslySetInnerHTML={{ __html: data?.desc || '' }}
            />
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  )
}

export default ProjectModal
