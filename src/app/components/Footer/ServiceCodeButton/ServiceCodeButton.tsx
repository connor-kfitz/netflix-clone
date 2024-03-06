"use client";
import { useState } from "react";
import "./ServiceCodeButton.scss";

export default function ServiceCodeButton() {

  const [buttonText, setButtonText] = useState('Service Code')

  return (
    <button className="service-code-button" onClick={() => setButtonText('043-493')}>{buttonText}</button>
  )
}
