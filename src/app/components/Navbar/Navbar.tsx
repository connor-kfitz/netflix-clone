import React from 'react'
import Link from "next/link"
import netflixLogo from "../../../../public/images/navbar/Netflix-Logo.svg"
import Image from "next/image"
import { navItems } from "../../common/constants";
import './Navbar.scss';

export default function Navbar() {
  return (
    <div className="navbar">
      <Link className="navbar__logo" href="/browse">
        <Image className="navbar__logo-image" priority src={netflixLogo} alt="Netflix Logo"/>
      </Link>
      <ul className="navbar__link-container">
        {navItems.map((item, index) => (
          <li className="menu-link" key={index}>
            <Link className="menu-link__link" href={item.path}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
