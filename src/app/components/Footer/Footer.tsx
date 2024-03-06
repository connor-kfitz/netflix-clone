import Image from "next/image";
import ServiceCodeButton from "./ServiceCodeButton/ServiceCodeButton";
import { socials, footerItems } from "@/app/common/constants";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <ul className="social-container">
        {socials.map((social: SocialItem, index: number) => (
        <li key={index}>
          <a href={social.path}>
            <Image className="social-container__icon" src={social.icon} alt={social.alt}/>
          </a>
        </li>
        ))}
      </ul>
      <ul className="link-container">
        {footerItems.map((item: FooterItem, index: number) => (
          <li className="link-container__item" key={index}>
            <a className="link-container__link" href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>
      <ServiceCodeButton/>
      <div className="footer__trade-mark">© 1997-2024 Netflix, Inc.</div>
    </div>
  )
}
