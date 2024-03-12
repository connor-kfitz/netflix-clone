type NavItem = {
    name: string,
    path: string
}

type ProfileAvatar = {
    image: import("next/image").StaticImageData;
    ref: string;
}

type Card = {
    title: string;
    description;
    thumbImage: string;
    genre;
}

type Swimlane = {
    type: string;
    genre: string;
    data: Card[];
}

type SocialItem = {
    icon: string;
    path: string;
    alt: string;
}

type FooterItem = {
    name: string;
    path: string;
}

type Profile = {
    name: string;
    profileImage: string;
    favorites: string[];
}

interface Document {
    webkitExitFullscreen: any;
    msExitFullscreen: any;
}

interface HTMLElement {
    webkitRequestFullscreen: any;
    msRequestFullscreen: any;
}

interface EventTarget {
    getBoundingClientRect: any;
    name: string;
    value: string;
}
