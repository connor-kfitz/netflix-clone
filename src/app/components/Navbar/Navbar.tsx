"use client";
import React, { useEffect, useRef, useState } from 'react'
import Link from "next/link"
import netflixLogo from "../../../../public/images/navbar/Netflix-Logo.svg"
import Image from "next/image"
import { navItems } from "../../common/constants";
import { useRouter } from 'next/navigation';
import './Navbar.scss';
import { signOut } from "next-auth/react"

export default function Navbar() {

  const [navBackgroundColor, setNavBackgroundColor] = useState('');

  const router = useRouter();

  useEffect(() => {
    initScrollEventListener();
  },[])

  function initScrollEventListener(): void {
    window.addEventListener('scroll', () => {
      setNavColor()
    })
  }

  function setNavColor(): void {
    if (window.scrollY !== 0) {
      setNavBackgroundColor("rgb(20, 20, 20)");
      return;
    }
    setNavBackgroundColor("");
  }

  async function handleLogOut(): Promise<void> {
    try {
      await signOut();
      router.push('/login', {scroll: false});
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="navbar" style={{backgroundColor: navBackgroundColor}} onScroll={setNavColor}>
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
      <div className="navbar__profile-container">
          <img className='navbar__profile-icon'/>
          <div className='navbar__profile-arrow-icon'></div>
          <div className='navbar__profile-dropdown'>
            <div className='navbar__profile-dropdown-arrow-icon'></div>
            <div className='navbar__profile-dropdown-content'>
              <button className='navbar__logout-button' onClick={handleLogOut}>Sign out of Netflix</button>
            </div>
          </div>
      </div>
    </div>
  )
}
