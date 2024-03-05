"use client"
import Image from "next/image"
import InfoIcon from "../../../../../public/images/spotlight/info-icon.svg"
import "./InfoButton.scss"

export default function VolumeControl() {

  function toggleInfo(): void {
    // Todo: Integrate with info modal when available
  }

  return (
    <button className="info-button" onClick={() => toggleInfo()}>
      <Image className="info-button__icon" src={InfoIcon} alt="Info"/>
      More Info
    </button>
  )
}