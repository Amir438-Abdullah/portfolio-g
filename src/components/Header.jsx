import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import MenuMobile from "./MenuMobile"
import { FaBars } from "react-icons/fa"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { site } = useStaticQuery(graphql`
    query {
      site {
        data: siteMetadata {
          menu {
            name
            to
          }
        }
      }
    }
  `)

  return (
    <div className="container   ">
      <div className="flex pb-3 pt-8 justify-between  items-center">
        <Link to="/" className="flex items-center">
          <h3 className="pop font-bold text-xl text-gray-900">Amir Razin</h3>
          <div className="status ml-3 bg-purple-300 pop text-sm text-purple-500 font-medium p-1 px-2 rounded-full">Now available</div>
        </Link>

        <button
          className="sm:hidden"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open Menu"
        >
          <FaBars className="h-6 w-auto text-gray-900 fill-current -mt-1" />
        </button>

        <div className="hidden sm:block">
          {site.data.menu.map((link, key) => (
            <Link
              key={`menu_desktop_link${key}`}
              className="ml-6 sm:ml-8 text-sm sm:text-base font-medium px-px border-b-2 pb-2 border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-200 transition duration-150 ease-in-out"
              activeClassName="border-blue-600 text-gray-900 hover:border-blue-600"
              to={link.to}
            >
              {link.name}
            </Link>
          ))}
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
