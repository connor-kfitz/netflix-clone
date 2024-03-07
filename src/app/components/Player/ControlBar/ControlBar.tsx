import Image from "next/image";
import PauseIcon from "../../../../../public/images/player/pause-icon.svg";
import PlayIcon from "../../../../../public/images/player/play-icon.svg";
import RewindIcon from "../../../../../public/images/player/rewind-icon.svg";
import SkipIcon from "../../../../../public/images/player/skip-icon.svg";
import VolumeIcon from "../../../../../public/images/player/volume-max-icon.svg";
import PlaybackSpeedIcon from "../../../../../public/images/player/playback-speed-icon.svg";
import FullscreenIcon from "../../../../../public/images/player/fullscreen-icon.svg";
import { RefObject, useState, useEffect } from "react";
import "./ControlBar.scss";

type ControlBarProps = {
    videoElement: RefObject<HTMLVideoElement>,
}

export default function ControlBar({videoElement}: ControlBarProps) {

  const [playing, setPlaying] = useState(true);
  const [volumeLevel, setVolumeLevel] = useState('100');

  useEffect(() => {
    // Todo: Debounce
    setVolume(volumeLevel);
  }, [volumeLevel])

  function togglePlay(): void {
    if (!videoElement.current) return;
    const player = videoElement.current;
    player.paused ? player.play() : player.pause();
    setPlaying(() => !playing)
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

  function setVolume(volume: string): void {
    if (!videoElement.current) return;
    const player = videoElement.current;
    player.muted = false;
    player.volume = parseInt(volume) / 100;
  }

  return (
    <div className="control-bar">
      <div className="control-bar__scrub-container">
        <div className="control-bar__scrubber">

        </div>
        <div className="control-bar__time">1:29:35</div>
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
          <button className="control-bar__volume-button control-bar__button">
            <Image className="control-bar__volume-button-icon control-bar__icon" src={VolumeIcon} alt="Volume"/>
            <div className="control-bar__volume-container">
              <div className="control-bar__volume-background">
                <input className="control-bar__volume-slider" type="range" min="0" max="100" step="0.1" value={volumeLevel} onChange={(event) => setVolumeLevel(event.target.value)}/>
              </div>
              <div className="control-bar__volume-padding"></div>
            </div>
          </button>
        </li>
        <li className="control-bar__video-title">Big Buck Bunny</li>
        <li className="control-bar__playback-speed-item control-bar__item">
          <button className="control-bar__playback-speed-button control-bar__button">
            <Image className="control-bar__playback-speed-button-icon control-bar__icon" src={PlaybackSpeedIcon} alt="Playback Speed"/>
          </button>
        </li>
        <li className="control-bar__fullscreen-item control-bar__item">
            <button className="control-bar__fullscreen-button control-bar__button">
                <Image className="control-bar__fullscreen-button-icon control-bar__icon" src={FullscreenIcon} alt="Fullscreen"/>
            </button>
        </li>
      </ul>
  </div>
  )
}
