'use client';

import Image from "next/image";
import styles from "./navbar.module.css"
import Link from "next/link";
import SignIn from "@/app/navbar/sign-in";
import { onAuthStateChangedHelper } from "@/app/firebase/firebase";
import {useEffect, useState} from "react";
import {User} from "@firebase/auth";
import Upload from "@/app/navbar/upload";

export default function Navbar() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChangedHelper((user) => {
            setUser(user);
        })

        return () => unsubscribe(); // Cleanup on unmount
    }, []);
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <Image width={90} height={20} src="/youtube-logo.svg" alt="Youtube logo"/>
            </Link>
            {
                user && <Upload />
            }
            <SignIn user={user}/>
        </nav>
    );
}