import Image from "next/image"
import Link from "next/link"
import VolumeControl from "./VolumeControl/VolumeControl"
import InfoButton from "./InfoButton/InfoButton"
import PlayIcon from "../../../../public/images/spotlight/play-icon.svg"
import "./Spotlight.scss"

import SpotlightLogo from "../../../../public/images/spotlight/spotlight-logo.webp";

export default function Spotlight() {
  // Todo: Display background image on video end.  Update volume control to reset video control

  return (
    <div className="spotlight">
      <div className="spotlight__metadata">
        {/* Todo: Integrate with fetcehd data */}
        <Image className="spotlight__logo" priority src={SpotlightLogo} alt="Spotlight Logo"/>
        <div className="spotlight__description">Two young boxers band together with a benevolent moneylender to take down a ruthless loan shark who preys on the financially desperate.</div>
        <div className="spotlight__button-container">
        <Link className="spotlight__play-link" href="">
          <Image className="spotlight__play-icon" src={PlayIcon} alt="Play"/>
          Play
        </Link>
        <InfoButton/>
        </div>
      </div>
      <div className="spotlight__video-container-outer">
        <div className="spotlight__video-container">
          <video className="spotlight__video" autoPlay muted>
            {/* Todo: Integrate with fetcehd data */}
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"></source>
          </video>
          <div className="spotlight__video-controls">
            <VolumeControl/>
            <div className="spotlight__maturity-rating">
                {/* Todo: Integrate with fetcehd data */}
                TV-MA
            </div>
          </div>
          <div className="spotlight__gradient"></div>
        </div>
      </div>
    </div>
  )
}
