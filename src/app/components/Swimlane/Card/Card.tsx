import "./Card.scss"

type CardProps = {
  cardData: Card,
}

export default function Card({ cardData }: CardProps) {

  return (
    <a className="card">
      <img className="card__image" src={cardData.thumbImage}/>
      <div className="card__gradient"></div>
      <div className="card__title">{cardData.title}</div>
    </a>
  )
}
