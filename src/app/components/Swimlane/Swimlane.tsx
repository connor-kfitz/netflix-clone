import Card from "./Card/Card";
import RightArrowIcon from "../../../../public/images/swimlane/right-arrow.svg";
import Image from "next/image";
import "./Swimlane.scss";

type SwimlaneProps = {
  swimlaneData: Swimlane,
}

export default function Swimlane({ swimlaneData }: SwimlaneProps) {

  return (
    <div className="swimlane">
      <h2 className="swimlane__title">{swimlaneData.genre}</h2>
      <div className="swimlane__container">
        {swimlaneData.data.map((card: Card, index: number) => (
          <Card cardData={card} key={index}/>
        ))}
        <span className="swimlane__right-arrow">
          <Image className="swimlane__right-arrow-icon" src={RightArrowIcon} alt="Arrow"/>
        </span>
      </div>
    </div>
  )
}
