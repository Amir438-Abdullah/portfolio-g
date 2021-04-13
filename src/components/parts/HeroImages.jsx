import React from "react"
import Cloud from "../../images/cloud.svg"
import MainCloud from "../../images/mainsvg.svg"

export default function HeroImages() {
  return (
    <>
      <img src={MainCloud} className="mainCloud  z-20 w-auto   " alt="" />
      <img
        src={Cloud}
        className="absolute top-0 w-32 left-0 ml-10 md:mt-10"
        alt=""
      />
      <img
        src={Cloud}
        className="absolute top-0 w-32 right-0 mr-10 md:mt-10"
        alt=""
      />
    </>
  )
}
