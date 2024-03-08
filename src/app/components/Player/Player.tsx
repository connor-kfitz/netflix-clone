"use client";
import { useRef } from "react";
import Image from "next/image";
import ControlBar from "./ControlBar/ControlBar";
import BackIcon from "../../../../public/images/player/back-icon.svg";
// import FlagIcon from "../../../../public/images/player/flag-icon.svg";
import "./Player.scss";

export default function Player() {

  const playerElement = useRef<HTMLDivElement>(null)
  const videoElement = useRef<HTMLVideoElement>(null);

  function togglePlay(): void {
    if (!videoElement.current) return;
    const player = videoElement.current;
    player.paused ? player.play() : player.pause();
  }

  return (
    <div className="player" ref={playerElement}>
      <video className="player__video" ref={videoElement} autoPlay muted onClick={() => togglePlay()}> 
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"></source>
      </video>
      <a className="player__back-button" onClick={() => history.back()}>
        <Image className="player__back-button-icon" src={BackIcon} alt="Back"/>
      </a>
      {/* <button className="player__flag-issue">
        <Image className="player__flag-issue-icon" src={FlagIcon} alt="Flag"/>
      </button> */}
      <ControlBar playerElement={playerElement} videoElement={videoElement}/>
    </div>
  )
}
