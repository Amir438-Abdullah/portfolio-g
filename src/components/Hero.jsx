import React from "react"
import HeroContent from "./parts/HeroContent"
import HeroImages from "./parts/HeroImages"

const Hero = () => (
  <div className="container font-sans py-12 mb-4 lg:pb-16 ">
    <div class="flex flex-wrap overflow-hidden md:-mx-2">
      <div class="w-full font-gil overflow-hidden md:my-2 md:px-2 md:w-1/2 pb-4">
        {/* heroContent */}
        <HeroContent />
      </div>

      <div class="w-full relative h-64 md:h-auto pb-4  md:my-2 md:px-2 md:w-1/2">
        {/* hero img */}

        <HeroImages />
      </div>
    </div>
  </div>
)

export default Hero
