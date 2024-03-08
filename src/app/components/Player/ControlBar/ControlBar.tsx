import Image from "next/image";
import PauseIcon from "../../../../../public/images/player/pause-icon.svg";
import PlayIcon from "../../../../../public/images/player/play-icon.svg";
import RewindIcon from "../../../../../public/images/player/rewind-icon.svg";
import SkipIcon from "../../../../../public/images/player/skip-icon.svg";
import PlaybackSpeedIcon from "../../../../../public/images/player/playback-speed-icon.svg";
import FullscreenOffIcon from "../../../../../public/images/player/fullscreen-off-icon.svg";
import FullscreenOnIcon from "../../../../../public/images/player/fullscreen-on-icon.svg";
import VolumeButton from "./VolumeButton/VolumeButton";
import { RefObject, useState, useEffect, useRef } from "react";
import "./ControlBar.scss";
import PlaybackSpeedButton from "./PlaybackSpeedButton/PlaybackSpeedButton";

type ControlBarProps = {
    playerElement: RefObject<HTMLElement>,
    videoElement: RefObject<HTMLVideoElement>
}

export default function ControlBar({playerElement, videoElement}: ControlBarProps) {

  const [scrubberPosition, setScrubberPosition] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);

  const scrubberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initPlayListener();
    initPauseListener();
    initThumbInterval();
  }, [])

  function initPlayListener(): void {
    if (!videoElement.current) return;
    videoElement.current.addEventListener('play', () => {
      setPlaying(true);
    })
  }

  function initPauseListener(): void {
    if (!videoElement.current) return;
    videoElement.current.addEventListener('pause', () => {
      setPlaying(false);
    })
  }

  function initThumbInterval(): void {
    setInterval(() => {
      if (!videoElement.current || !scrubberRef.current) return;
      const player = videoElement.current;
      const currentTime = player.currentTime;
      const duration = player.duration;
      const scrubberLength = scrubberRef.current.offsetWidth;
      setScrubberPosition(scrubberLength * (currentTime / duration))      
    }, 500)
  }

  function getPlayedWidth(): number {
    if (!videoElement.current || !scrubberRef.current) return 0;
    const player = videoElement.current;
    const currentTime = player.currentTime;
    const duration = player.duration;
    const scrubberLength = scrubberRef.current.offsetWidth;
    return (scrubberLength * (currentTime / duration));
  }

  function updateVideoTime(event: React.MouseEvent<Element, MouseEvent>): void {
    if (!videoElement.current || !scrubberRef.current) return;
    const player = videoElement.current;
    const scrubberLength = scrubberRef.current.offsetWidth;
    const clickedPercent = (event.clientX - event.target.getBoundingClientRect().left) / scrubberLength;
    player.currentTime = player.duration * clickedPercent;
  }

  function getReaminingTime(): string {
    if (!videoElement.current) return '';
    const player = videoElement.current;
    const remainingTime = player.duration - player.currentTime;
    const date = new Date(0);
    date.setSeconds(remainingTime);
    return removeLeadingZeros(date.toISOString().substring(11, 19));
  }

  // Todo: Move to Lib Folder
  function removeLeadingZeros(input: string): string {
    let result = input;
    for (let i=0; i < result.length - 1; i++) {
      if (result[0] === '0' || result[0] === ':') result = result.substring(1);
    }
    return result;
  }

  function togglePlay(): void {
    if (!videoElement.current) return;
    const player = videoElement.current;
    player.paused ? player.play() : player.pause();
  }

  function rewind(): void {
    if (!videoElement.current) return;
    const player = videoElement.current;
    player.currentTime = player.currentTime - 10
  }

  function skip(): void {
    if (!videoElement.current) return;
    const player = videoElement.current;
    player.currentTime = player.currentTime + 10
  }

  function toggleFullscreen(): void {
    if (!playerElement.current || !videoElement.current) return;
    const player = playerElement.current;
    if (document.fullscreenElement) {
      if (document.exitFullscreen) { document.exitFullscreen() }
      else if (document.webkitExitFullscreen) { document.webkitExitFullscreen() }
      else if (document.msExitFullscreen) { document.msExitFullscreen() }
      setFullscreen(false);
    } else {
      if (player.requestFullscreen) { player.requestFullscreen() }
      else if (player.webkitRequestFullscreen) { player.webkitRequestFullscreen() }
      else if (player.msRequestFullscreen) { player.msRequestFullscreen() }
      setFullscreen(true);
    }
  }

  return (
    <div className="control-bar">
      <div className="control-bar__scrub-container">
        <div className="scrubber" ref={scrubberRef} onClick={(event: React.MouseEvent<Element, MouseEvent>) => updateVideoTime(event)}>
          <div className="scrubber__played" style={{width: getPlayedWidth() + "px"}}></div>
          <div className="scrubber__thumb" style={{left: scrubberPosition + "px"}}></div>
        </div>
        <div className="control-bar__time">{getReaminingTime()}</div>
      </div>
      <ul className="control-bar__options-container">
        <li className="control-bar__play-item control-bar__item">
          <button className="control-bar__play-button control-bar__button" onClick={() => togglePlay()}>
            <Image className="control-bar__play-button-icon control-bar__icon" src={playing ? PauseIcon : PlayIcon} alt="Playback "/>
          </button>
        </li>
        <li className="control-bar__rewind-item control-bar__item">
          <button className="control-bar__rewind-button control-bar__button" onClick={() => rewind()}>
            <Image className="control-bar__rewind-button-icon control-bar__icon" src={RewindIcon} alt="Rewind"/>
          </button>
        </li>
        <li className="control-bar__skip-item control-bar__item">
          <button className="control-bar__skip-button control-bar__button" onClick={() => skip()}>
            <Image className="control-bar__skip-button-icon control-bar__icon" src={SkipIcon} alt="Skip"/>
          </button>
        </li>
        <li className="control-bar__volume-item control-bar__item">
          <VolumeButton videoElement={videoElement}/>
        </li>
        {/* Todo: Integrate with asset data */}
        <li className="control-bar__video-title">Big Buck Bunny</li>
        <li className="control-bar__playback-speed-item control-bar__item">
          <PlaybackSpeedButton videoElement={videoElement}/>
        </li>
        <li className="control-bar__fullscreen-item control-bar__item">
            <button className="control-bar__fullscreen-button control-bar__button" onClick={() => toggleFullscreen()}>
                <Image className="control-bar__fullscreen-button-icon control-bar__icon" src={fullscreen ? FullscreenOnIcon : FullscreenOffIcon} alt="Fullscreen"/>
            </button>
        </li>
      </ul>
  </div>
  )
}
