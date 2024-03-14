"use client";
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import netflixLogo from "../../../../public/images/navbar/Netflix-Logo.svg";
import Image, { StaticImageData } from "next/image";
import { navItems } from "../../common/constants";
import { useRouter } from 'next/navigation';
import { signOut, useSession, getSession } from "next-auth/react";
import { profileAvatars } from "../../common/constants";
import { doc, getDoc } from "firebase/firestore";
import { db } from '@/app/firebase/clientApp';
import './Navbar.scss';

export default function Navbar() {

  const session = useSession();
  const { update } = useSession();

  const [navBackgroundColor, setNavBackgroundColor] = useState('');
  const [accounts, setAccounts] = useState<Account[]>([]);

  const router = useRouter();

  useEffect(() => {
    initScrollEventListener();
    getAccounts();
  },[])

  async function getAccounts(): Promise<void> {
    const currentSession = await getSession();
    if (!currentSession?.user.email) return;
    const docRef = doc(db, "users", currentSession?.user.email);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) return;
    const accounts = docSnap.data().accounts;
    setAccounts(accounts.filter((account: Account) => account.name !== currentSession?.user?.account?.name));
  }

  function initScrollEventListener(): void {
    window.addEventListener('scroll', () => {
      setNavColor();
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

  function getAvatar(account: Account | undefined): StaticImageData {
    const index = profileAvatars.findIndex((item) => item.ref === account?.profileImagePath);
    if (index < 0) return profileAvatars[0].image;
    return profileAvatars[index].image;
  }

  async function changeProfile(account: Account): Promise<void> {
    // Todo: Implement logic to change profile when context is available
    await update({ account: account });
    await getAccounts();
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
          {session ? (
          <>
            <Image className="navbar__profile-icon" src={getAvatar(session.data?.user.account)} alt="Profile"/> 
            <div className="navbar__profile-arrow-icon"></div>
          </>
          ) : null}  
          <div className="settings-dropdown">
            <div className="settings-dropdown__arrow-icon"></div>
            <div className="settings-dropdown__content">
              <ul className="settings-dropdown__profiles-container">
                {accounts ? accounts.map((account, index) => (
                  <li className="settings-dropdown__profile-item" key={index}>
                    <button className="settings-dropdown__profile-button" onClick={() => changeProfile(account)}>
                      <Image className="settings-dropdown__profile-icon" src={getAvatar(account)} alt="Profile"/>
                      {account.name}
                    </button>
                  </li>
                )) : null}
              </ul>
              <Link className="settings-dropdown__manage-profiles-link" href={"/profiles"}>
                <svg className="settings-dropdown__pencil-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" data-mirrorinrtl="true" data-name="Pencil" aria-labelledby=":rq:" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M19.1213 1.7071C17.9497 0.535532 16.0503 0.53553 14.8787 1.7071L13.2929 3.29289L12.5858 4L1.58579 15C1.21071 15.3751 1 15.8838 1 16.4142V21C1 22.1046 1.89543 23 3 23H7.58579C8.11622 23 8.62493 22.7893 9 22.4142L20 11.4142L20.7071 10.7071L22.2929 9.12132C23.4645 7.94975 23.4645 6.05025 22.2929 4.87868L19.1213 1.7071ZM15.5858 7L14 5.41421L3 16.4142L3 19C3.26264 19 3.52272 19.0517 3.76537 19.1522C4.00802 19.2527 4.2285 19.4001 4.41421 19.5858C4.59993 19.7715 4.74725 19.992 4.84776 20.2346C4.94827 20.4773 5 20.7374 5 21L7.58579 21L18.5858 10L17 8.41421L6.70711 18.7071L5.29289 17.2929L15.5858 7ZM16.2929 3.12132C16.6834 2.73079 17.3166 2.73079 17.7071 3.12132L20.8787 6.29289C21.2692 6.68341 21.2692 7.31658 20.8787 7.7071L20 8.58578L15.4142 4L16.2929 3.12132Z" fill="#fff"></path>
                </svg>
                Manage Profiles
              </Link>
              <button className="settings-dropdown__logout-button" onClick={handleLogOut}>Sign out of Netflix</button>
            </div>
          </div>
      </div>
    </div>
  )
}
