type NavItem = {
    name: string,
    path: string
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