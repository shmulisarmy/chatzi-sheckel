


import { useEffect, useRef, useState } from "react";

export function ThumbedVideo({iframeSrc, thumbSrc}: {iframeSrc: string, thumbSrc: string}){
    const [mode, setMode] = useState<"picture" | "video">("picture");
    let video_ref = useRef<HTMLVideoElement|null>(null);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        console.log({video_ref})
        if (mode === "video") {
            video_ref.current?.play();
        }
    }, [mode]);
    

    if (mode === "picture") {
        return<div className="relative w-full overflow-hidden rounded-lg shadow-xl aspect-video">

        <img onClick={() => setMode("video") } style={{width: "100%", height: "100%", position: "absolute", top: 0, left: 0}} src={thumbSrc} title="272  Yud Zayin Av, 5751   Dollars Peninim   י ז מנחם אב תנש א" referrerPolicy="strict-origin-when-cross-origin"></img>
        <svg 
        className="PlaySvg hover:cursor-pointer transition-all duration-300"
        onClick={() => setMode("video") }
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{width: "30%", height: "30%", 
            transform: hovered ? "translate(-50%, -50%) scale(1.1)" : "translate(-50%, -50%)",
            position: "absolute", top: "50%", left: "50%", zIndex: 1}}  viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z"></path></g></svg>
        </div>
    }
    
    return <iframe  allow="autoplay" style={{width: "100%", height: "100%", position: "absolute", top: 0, left: 0}} src={iframeSrc} title="272  Yud Zayin Av, 5751   Dollars Peninim   י ז מנחם אב תנש א" frameBorder="0" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
}   