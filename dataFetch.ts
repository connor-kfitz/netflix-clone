import { genres } from "./src/app/common/constants";

const url = "https://api.themoviedb.org/3/discover/movie?with_genres=";

const posterURL = "https://image.tmdb.org/t/p/w185";
  
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.TMBD_TOKEN}`
  }
}

export async function getCards() {
    let cards: Card[] = [];
    for (let i = 0; i < genres.length; i++) {
        const res = await fetch(url + genres[i].id.toString(), options);
        const data = await res.json();
        data.results.map((asset: any) => {
            if (asset.backdrop_path) {
                cards.push({
                    title: asset.title,
                    description: asset.overview,
                    thumbImage: posterURL + asset.backdrop_path,
                    genre: genres[i].name
                } as Card)
            }
        })
    }

    let swimlanes: Swimlane[] = [];

    genres.map((genre, index) => {
        swimlanes.push({
            type: 'Movie',
            genre: genre.name,
            data: cards.filter((card) => card.genre === genre.name)
        } as Swimlane)
    })
    
    return swimlanes;
}
