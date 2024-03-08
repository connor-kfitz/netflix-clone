import { RefObject, useEffect, useState } from 'react'
import "../ControlBar.scss";
import "./PlaybackSpeedButton.scss";

type PlaybackSpeedProps = {
    videoElement: RefObject<HTMLVideoElement>,
}

export default function PlaybackSpeedButton({videoElement}: PlaybackSpeedProps) {

  const [playbackSpeed, setPlaybackSpeed] = useState('1');

  useEffect(() => {
    setSpeed(playbackSpeed);
  }, [playbackSpeed])

  function setSpeed(speed: string): void {
    if (!videoElement.current) return;
    const player = videoElement.current;
    player.playbackRate = Number(speed);
  }

  return (
    <button className="control-bar__playback-speed-button control-bar__button">
    <svg className="control-bar__playback-speed-button-icon control-bar__icon" viewBox='0 0 24 24' fill="none" aria-hidden="true" aria-labelledby=":ru4:" data-name="InternetSpeed">
        <path fill="#fff" fillRule="evenodd" d="M19.057 6.27c-3.902-4.064-10.212-4.064-14.114 0C1.02 10.357 1.02 17 4.943 21.085L3.501 22.47c-4.668-4.86-4.668-12.725 0-17.585C8.19 0 15.81 0 20.499 4.885c4.668 4.86 4.668 12.725 0 17.585l-1.442-1.385c3.924-4.087 3.924-10.728 0-14.815ZM15 14a3 3 0 1 1-1.707-2.708l3-2.999 1.414 1.414-3 3c.188.391.293.83.293 1.293Z" clipRule="evenodd"/>
    </svg>
    <div className="playback-speed">
      <div className="playback-speed__content">
      <div className="playback-speed__title">Playback Speed</div>
      <ul className="playback-speed__options-container">
        <li className={"playback-speed__option first" + (playbackSpeed == '0.5' ? " active" : '')} onClick={() => setPlaybackSpeed('0.5')}>
          <div className="playback-speed__option-line first">
            {playbackSpeed == '0.5' ? (
              <svg viewBox="0 0 26 26" className="playback-speed__icon active first"><circle cx="13" cy="13" fill="#232323" r="12" stroke="#b3b3b3" strokeWidth="2"></circle><circle cx="13" cy="13" fill="#ffffff" r="6"></circle></svg>
            ) : (
              <svg className="playback-speed__icon" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="#d8d8d8"/></svg>
            )}
            0.5x
          </div>
        </li>
        <li className={"playback-speed__option" + (playbackSpeed == '0.75' ? " active" : '')} onClick={() => setPlaybackSpeed('0.75')}>
          <div className="playback-speed__option-line">
            {playbackSpeed == '0.75' ? (
              <svg viewBox="0 0 26 26" className="playback-speed__icon active"><circle cx="13" cy="13" fill="#232323" r="12" stroke="#b3b3b3" strokeWidth="2"></circle><circle cx="13" cy="13" fill="#ffffff" r="6"></circle></svg>
            ) : (
              <svg className="playback-speed__icon" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="#d8d8d8"/></svg>
            )}
            0.75x
          </div>
        </li>
        <li className={"playback-speed__option" + (playbackSpeed == '1' ? " active" : '')} onClick={() => setPlaybackSpeed('1')}>
          <div className="playback-speed__option-line active">
            {playbackSpeed == '1' ? (
              <svg viewBox="0 0 26 26" className="playback-speed__icon active"><circle cx="13" cy="13" fill="#232323" r="12" stroke="#b3b3b3" strokeWidth="2"></circle><circle cx="13" cy="13" fill="#ffffff" r="6"></circle></svg>
            ) : (
              <svg className="playback-speed__icon" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="#d8d8d8"/></svg>
            )}
            1x (Normal)
          </div>
        </li>                
        <li className={"playback-speed__option" + (playbackSpeed == '1.25' ? " active" : '')} onClick={() => setPlaybackSpeed('1.25')}>
          <div className="playback-speed__option-line">
            {playbackSpeed == '1.25' ? (
              <svg viewBox="0 0 26 26" className="playback-speed__icon active"><circle cx="13" cy="13" fill="#232323" r="12" stroke="#b3b3b3" strokeWidth="2"></circle><circle cx="13" cy="13" fill="#ffffff" r="6"></circle></svg>
            ) : (
              <svg className="playback-speed__icon" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="#d8d8d8"/></svg>
            )}
            1.25x
          </div>
        </li>
        <li className={"playback-speed__option last" + (playbackSpeed == '1.5' ? " active" : '')}  onClick={() => setPlaybackSpeed('1.5')}>
          <div className="playback-speed__option-line last">
            {playbackSpeed == '1.5' ? (
              <svg viewBox="0 0 26 26" className="playback-speed__icon active last"><circle cx="13" cy="13" fill="#232323" r="12" stroke="#b3b3b3" strokeWidth="2"></circle><circle cx="13" cy="13" fill="#ffffff" r="6"></circle></svg>
            ) : (
              <svg className="playback-speed__icon" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="#d8d8d8"/></svg>
            )}
            1.5x
          </div>
        </li>              
      </ul>
      </div>
      <div className="playback-speed__padding"></div>
    </div>
  </button>
  )
}
