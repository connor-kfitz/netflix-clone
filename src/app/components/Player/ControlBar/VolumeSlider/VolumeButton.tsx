import "./VolumeButton.scss"
import "../ControlBar.scss";
import { useState, useEffect, RefObject, useRef } from "react";

type ControlBarProps = {
    videoElement: RefObject<HTMLVideoElement>,
}

export default function VolumeSlider({videoElement}: ControlBarProps) {

  const [volumeLevel, setVolumeLevel] = useState('100');
  
  useEffect(() => {
    // Todo: Debounce
    setVolume(volumeLevel);
    if (volumeLevel !== '0') volumeLevelRef.current = volumeLevel;
  }, [volumeLevel])

  const volumeLevelRef = useRef('100');

  function setVolume(volume: string): void {
    if (!videoElement.current) return;
    const player = videoElement.current;
    player.muted = false;
    player.volume = parseInt(volume) / 100;
  }

  function toggleMute(event: React.MouseEvent<Element, MouseEvent>): void {
    if (!(event.target instanceof SVGElement)) return;
    if (volumeLevel !== '0') {
      volumeLevelRef.current = volumeLevel;
      setVolumeLevel('0');
      return;
    }
    setVolumeLevel(volumeLevelRef.current);
  }

  return (
    <button className="volume-button control-bar__button" onClick={(event: React.MouseEvent<Element, MouseEvent>) => toggleMute(event)}>
      {parseInt(volumeLevel) >= 66 ? (
        <svg className="volume-button__icon control-bar__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true" aria-labelledby=":rap:" data-name="VolumeHigh">
          <path fill="#fff" fill-rule="evenodd" d="M24 12a14 14 0 0 0-4.1-9.9l-1.415 1.415a12 12 0 0 1 0 16.97L19.9 21.9A14 14 0 0 0 24 12ZM11 4a1 1 0 0 0-1.707-.707L4.586 8H1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.586l4.707 4.707A1 1 0 0 0 11 20V4ZM5.707 9.707 9 6.414v11.172l-3.293-3.293L5.414 14H2v-4h3.414l.293-.293ZM16 12a6 6 0 0 0-1.757-4.243l-1.415 1.415a4 4 0 0 1 0 5.656l1.415 1.415A6 6 0 0 0 16 12Zm1.07-7.071a10 10 0 0 1 0 14.142l-1.413-1.414a8 8 0 0 0 0-11.314L17.07 4.93Z" clip-rule="evenodd"/>
        </svg>) : null}  
      {parseInt(volumeLevel) >= 33 && parseInt(volumeLevel) < 66 ? (
        <svg className="volume-button__icon control-bar__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true" aria-labelledby=":r3u:" data-name="VolumeMedium">
          <path fill="#fff" fill-rule="evenodd" d="M11 4a1 1 0 0 0-1.707-.707L4.586 8H1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.586l4.707 4.707A1 1 0 0 0 11 20V4ZM5.707 9.707 9 6.414v11.172l-3.293-3.293L5.414 14H2v-4h3.414l.293-.293ZM17.071 4.93a10 10 0 0 1 0 14.142l-1.414-1.414a8 8 0 0 0 0-11.314L17.07 4.93Zm-2.828 2.828a6 6 0 0 1 0 8.486l-1.415-1.414a4 4 0 0 0 0-5.657l1.415-1.415Z" clip-rule="evenodd"/>
        </svg>
      ) : null}
      {parseInt(volumeLevel) > 0 && parseInt(volumeLevel) < 33 ? (
        <svg className="volume-button__icon control-bar__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true" aria-labelledby=":r4q:" data-name="VolumeLow">
          <path fill="#fff" fill-rule="evenodd" d="M11 4a1 1 0 0 0-1.707-.707L4.586 8H1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.586l4.707 4.707A1 1 0 0 0 11 20V4ZM5.707 9.707 9 6.414v11.172l-3.293-3.293L5.414 14H2v-4h3.414l.293-.293ZM16 12a6 6 0 0 0-1.757-4.243l-1.415 1.415a4 4 0 0 1 0 5.656l1.415 1.415A6 6 0 0 0 16 12Z" clip-rule="evenodd"/>
        </svg>
      ) : null}  
      {parseInt(volumeLevel) === 0 ? (
        <svg className="volume-button__icon control-bar__icon" viewBox="0 0 24 24"  fill="none" aria-hidden="true" aria-labelledby=":r5i:" data-name="VolumeOff">
          <path fill="#fff" fill-rule="evenodd" d="M11 4a1 1 0 0 0-1.707-.707L4.586 8H1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3.586l4.707 4.707A1 1 0 0 0 11 20V4ZM5.707 9.707 9 6.414v11.172l-3.293-3.293L5.414 14H2v-4h3.414l.293-.293Zm9.586 0L17.586 12l-2.293 2.293 1.414 1.414L19 13.414l2.293 2.293 1.414-1.414L20.414 12l2.293-2.293-1.414-1.414L19 10.586l-2.293-2.293-1.414 1.414Z" clip-rule="evenodd"/>
        </svg>
      ) : null}  
      <div className="volume-slider">
        <div className="volume-slider__container">
          <input className="volume-slider__slider" type="range" min="0" max="100" step="5" value={volumeLevel} onChange={(event) => setVolumeLevel(event.target.value)}/>
        </div>
        <div className="volume-slider__padding"></div>
      </div>
    </button>
  )
}
