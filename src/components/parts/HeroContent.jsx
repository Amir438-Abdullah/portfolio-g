import React from "react"

export default function HeroContent() {
  return (
    <>
      <h2 className="text-3xl font-gil sm:text-3xl font-extrabold leading-tight  text-gray-900">
        Hi,I'm Razin
        <span role="img" aria-label="waving hand">
          👋
        </span>
        <br />
        <span className="text-purple-600 text-5xl tracking-tight">
          Full-Stack web developer
        </span>
      </h2>
      <p className=" font-sans text-sm font-semibold text-gray-600 sm:mt-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
        consectetur, suscipit officiis itaque quos reiciendis recusandae, iusto
        dolorem delectus voluptatibus quae necessitatibus ullam. Voluptatibus
        adipisci facere aliquam esse ipsum quam.
      </p>
      <p className=" font-sans text-sm font-semibold text-gray-600 mt-5 sm:mt-5">
        👇 Check some projects
      </p>

      <div className="buttons flex my-5 ">
        <button className="btn mr-5  border border-purple-500 text-purple-700  hover:bg-purple-600 hover:text-white">
          projects
        </button>
        <button className="btn bg-gradient-to-r from-purple-500 to-purple-700 hover:bg-purple-700 text-white">
          Contact
        </button>
      </div>
    </>
  )
}
