'use client'
import { LegacyRef, forwardRef } from 'react'
import { useForm } from 'react-hook-form'
import {
  Button,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Row,
  Toast,
} from 'reactstrap'

interface Values {
  readonly name: string
  readonly email: string
  readonly message: string
}

const Contact = forwardRef((_props, ref) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Values>()

  const onSubmit = (v: Values) => {
    reset()
  }

  return (
    <section className="contact-container" ref={ref as LegacyRef<any>}>
      <div className="contact">
        <h3 className="contact__title">
          Are you ready <br /> to board this rocket ship?
        </h3>
        <p className="contact__desc">Share your excitement with us.</p>
        <Row>
          <Col md={12} lg={6}>
            <div className="contact-card">
              <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                  <input
                    className={`form-control ${
                      errors.name ? 'is-invalid' : ''
                    }`}
                    type="text"
                    placeholder="Name*"
                    {...register('name', { required: 'Name is required' })}
                  />
                  <FormFeedback>{errors.name?.message}</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <input
                    className={`form-control ${
                      errors.email ? 'is-invalid' : ''
                    }`}
                    type="text"
                    placeholder="Email*"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Entered value does not match email format',
                      },
                    })}
                  />
                  <FormFeedback>{errors.email?.message}</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <textarea
                    className={`form-control ${
                      errors.message ? 'is-invalid' : ''
                    }`}
                    placeholder="Message*"
                    {...register('message', {
                      required: 'Message is required',
                    })}
                    rows={8}
                  />
                  <FormFeedback>{errors.message?.message}</FormFeedback>
                </FormGroup>
                <div className="contact-card__button">
                  <Button type="submit">Shoot us a message</Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
})

Contact.displayName = 'Contact'

export default Contact
