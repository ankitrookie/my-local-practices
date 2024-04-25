"use client";

import { PlayIcon, PauseIcon } from "@radix-ui/react-icons"
import { MutableRefObject, useRef, useState } from "react";

export const VideoPlayaer = () => {
  let videoRef = useRef() as MutableRefObject<HTMLVideoElement>;
  const [togglePlay, setTogglePlay] = useState(false)

  const clickHandler = () => {
    switch (togglePlay) {
      case true:
        videoRef.current.pause();
        setTogglePlay(false)
        break;
      case false:
        videoRef.current.play();
        setTogglePlay(true)
      default:
        break;
    }
  }

  const handlekeyDown = (event: any) => {
    switch (event.code) {
      case "Space":
        console.log("Space pressed")
        break;

      default:
        break;
    }
  }

  document.addEventListener("keydown", handlekeyDown)

  return (
    <div className="flex relative w-full items-center">
      <div className="relative w-2/4 h-100 z-10 group">
        <video className="w-full h-full" ref={videoRef} autoPlay>
          <source src="https://videos.pexels.com/video-files/6251859/6251859-uhd_4096_2160_24fps.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute bottom-0 left-0 
          z-50 w-full transition-opacity duration-1000 
          ease-in-out opacity-0 group-hover:opacity-100 flex
          gap-2 
          "
        >
          <div>
            <button onClick={clickHandler}>
              {togglePlay ? (
                <PauseIcon color="white" width={30} height={30} />
              ) : (
                <PlayIcon color="white" width={30} height={30} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
