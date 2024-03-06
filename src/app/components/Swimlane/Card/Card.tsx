import "./Card.scss"

type CardProps = {
  cardData: Card,
}

export default function Card({ cardData }: CardProps) {

  return (
    <a className="card">
      <img className="card__image" src={cardData.thumbImage}/>
    </a>
  )
}
