import styles from './page.module.css'
import {getVideos} from "@/app/firebase/functions";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
    const videos = await getVideos();

    return (
        <main className={styles.main}>
            {
                videos.map((video) => (
                    video.status === 'processed' &&
                    <>
                        <Link href={`/watch?v=${video.filename}`} key={video.id}>
                            <Image src={'/thumbnail.png'} alt='video' width={120} height={80}
                                   className={styles.thumbnail}/>
                        </Link>
                    </>
                ))
            }
        </main>
    )
}

export const revalidate = 30;