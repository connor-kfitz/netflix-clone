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