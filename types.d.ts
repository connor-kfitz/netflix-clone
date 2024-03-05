type NavItem = {
    name: string,
    path: string
}

type Card = {
    id: string;
    thumbImage: string;
}

type Swimlane = {
    title: string;
    cards: Card[];
}