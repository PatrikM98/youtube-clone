'use client';

import { useSearchParams } from "next/navigation";

export default function Watch() {
    const videoPrefix = 'https://storage.googleapis.com/pm20-yt-processed-videos/';
    const videoSrc = useSearchParams().get('v');
    console.log(videoPrefix + videoSrc);

    return (
        <div>
            <h1>Watch Page</h1>
            <video controls src={videoPrefix + videoSrc}></video>
        </div>
    );
}