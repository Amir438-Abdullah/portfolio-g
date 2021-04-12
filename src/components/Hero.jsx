import React from "react"

const Hero = () => (
  <div className="container font-sans py-12 lg:pb-16 ">
    <div class="flex flex-wrap overflow-hidden md:-mx-2">
      <div class="w-full overflow-hidden md:my-2 md:px-2 xl:w-1/2">
        {/* header content */}
        <div className="">
          <h2 className="text-3xl sm:text-3xl font-bold font-extrabold leading-tight  text-gray-900">
         
            Hi,I'm Razin
            <span role="img" aria-label="waving hand">
              👋
            </span>
            <br />
            <span className="text-purple-600 text-5xl">
              Full-Stack web developer
            </span>
          </h2>
          <p className="tracking-tight sm:mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            consectetur, suscipit officiis itaque quos reiciendis recusandae,
            iusto dolorem delectus voluptatibus quae necessitatibus ullam.
            Voluptatibus adipisci facere aliquam esse ipsum quam.
          </p>
        </div>
      </div>

      <div class="w-full overflow-hidden md:my-2 md:px-2 xl:w-1/2">
        {/* img */}
        <div className="">
          <img src="logo.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
)

export default Hero
