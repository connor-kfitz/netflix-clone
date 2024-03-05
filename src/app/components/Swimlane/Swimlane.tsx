import Card from "./Card/Card";
import RightArrowIcon from "../../../../public/images/swimlane/right-arrow.svg";
import Image from "next/image";
import "./Swimlane.scss";

export default function Swimlane(data: any, key: number) {

  const cards = Array.from(Array(18).keys());

  return (
    <div className="swimlane">
      <h2 className="swimlane__title">Lane Title</h2>
      <div className="swimlane__container">
        {cards.map((card, index) => (
          <Card data={card} key={index}/>
        ))}
        <span className="swimlane__right-arrow">
          <Image className="swimlane__right-arrow-icon" src={RightArrowIcon} alt="Arrow"/>
        </span>
      </div>
    </div>
  )
}
