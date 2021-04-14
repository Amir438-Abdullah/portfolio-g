import { motion } from "framer-motion"
import React from "react"
import Cloud from "../../images/cloud.svg"
import MainCloud from "../../images/mainsvg.svg"

const CloudVariant = {
  move: {
    y: [-5, 0],
    transition: { yoyo: Infinity, type: "tween", duration: 2 },
  },
}

export default function HeroImages() {
  return (
    <>
      <motion.img
        src={MainCloud}
        className="mainCloud  z-20 w-auto   "
        alt=""
      />
      <motion.img
        variants={CloudVariant}
        animate="move"
        src={Cloud}
        className="absolute top-0 w-32 left-0 md:ml-10 md:mt-10"
        alt=""
      />
      <motion.img
        variants={CloudVariant}
        animate="move"
        src={Cloud}
        className="absolute top-0 w-32 right-0 md:mr-10 md:mt-10"
        alt=""
      />
    </>
  )
}
