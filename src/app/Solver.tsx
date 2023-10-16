'use client'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const Solver = () => {
  const [popup, setPopup] = useState(true)

  return (
    <section className="solver">
      <div className="solver__content">
        <Image src="/right.png" width={59} height={66} alt="thumb-right" />
        <p className="solver__content__text">We love solving problems!</p>
        <Image src="/left.png" width={59} height={66} alt="thumb-left" />
      </div>
      <AnimatePresence>
        {popup && (
          <motion.div
            className="solver__extended"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="solver__extended__image">
              <Image src="/extend.png" width={95} height={95} alt="extend" />
            </div>
            <div className="solver__extended__text">
              <p className="">
                Hi! I am Ben, your virtual assistant. <br /> How can I make your
                day better?
              </p>
            </div>
            <div
              className="solver__extended__close"
              onClick={() => setPopup(false)}
            >
              x
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Solver
