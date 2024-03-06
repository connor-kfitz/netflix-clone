"use client"
import Image from "next/image"
import VolumeOffIcon from "../../../../../public/images/spotlight/spotlight-volume-control-off.svg"
import VolumeOnIcon from "../../../../../public/images/spotlight/spotlight-volume-control-on.svg"
import { useState } from "react"
import "./VolumeControl.scss"

export default function VolumeControl() {

  const [muted, setMuted] = useState(true);

  function toggleMute(): void {
    setMuted((muted) => !muted);
  }

  return (
    <button className="volume-control" onClick={() => toggleMute()}>
      <Image className="volume-control__icon" src={muted ? VolumeOffIcon : VolumeOnIcon} alt="Volume Control"/>
    </button>
  )
}
