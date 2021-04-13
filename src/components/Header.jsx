import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import MenuMobile from "./MenuMobile"
import { FaBars } from "react-icons/fa"
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa"
import { SocialLink } from "./Footer"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { site,site:{data:{links}} } = useStaticQuery(graphql`
    query {
      site {
        data: siteMetadata {
          menu {
            name
            to
          }
          links {
            facebook
            instagram
            pinterest
            twitter
          }
        }
      }
    }
  `)

  return (
    <div className="container   ">
      <div className="flex pb-3 pt-8 justify-between  items-center">
        <Link to="/" className="flex items-center">
          <h3 className="font-pops font-extrabold uppercase tracking-tight  text-xl text-purple-800">
            Amir Razin
          </h3>
          <div className="status ml-3 bg-purple-300 font-pops bg-opacity-50 text-sm text-purple-500 font-medium p-1 px-2 rounded-full">
            Now available
          </div>
        </Link>

        <button
          className="sm:hidden"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open Menu"
        >
          <FaBars className="h-6 w-auto text-gray-900 fill-current -mt-1" />
        </button>

        <div className="hidden sm:block">
          <ul className="flex justify-center md:order-2">
            <SocialLink href={links.twitter} icon={FaTwitter} label="Twitter" />
            <SocialLink
              href={links.facebook}
              icon={FaFacebook}
              label="Facebook"
            />
            <SocialLink
              href={links.instagram}
              icon={FaInstagram}
              label="Instagram"
            />
            <SocialLink
              href={links.pinterest}
              icon={FaPinterest}
              label="Pinterest"
            />
          </ul>
        </div>
      </div>
      <MenuMobile
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        links={site.data.menu}
      />
    </div>
  )
}

export default Header
