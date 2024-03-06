"use client";
import Image from "next/image";
import ControlBar from "./ControlBar/ControlBar";
import BackIcon from "../../../../public/images/player/back-icon.svg";
import FlagIcon from "../../../../public/images/player/flag-icon.svg";
import "./Player.scss";

export default function Player() {
  return (
    <div className="player">
      <video className="player__video" autoPlay muted> 
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"></source>
      </video>
      <a className="player__back-button">
        <Image className="player__back-button-icon" src={BackIcon} alt="Back"/>
      </a>
      <button className="player__flag-issue">
        <Image className="player__flag-issue-icon" src={FlagIcon} alt="Flag"/>
      </button>
      <ControlBar/>
    </div>
  )
}
