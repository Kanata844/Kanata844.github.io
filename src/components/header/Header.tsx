'use client'

import {useState} from 'react';
import styles from "./Header.module.css"
import Link from 'next/link';

export default function Header(){
    let [menuClicked, setMenuClicked] = useState(false);
    return (
    <>
    <header className={styles.header}>
        <div className={styles.top}>
            <div className={styles.title}><Link className={styles.link} href="/">カナタのホームページ</Link></div>
            <div className={styles.button}><p className={styles.mobile_only} onClick={()=>{setMenuClicked(!menuClicked)}}>{menuClicked? "✕": "三"}</p></div>
        </div>
        <div className={`${styles.nav_pc} ${styles.pc_only}`}>
            <div><Link className={styles.link} href="/works">作品</Link></div>
            <div><Link className={styles.link} href="/career">経歴</Link></div>
            <div><Link className={styles.link} href="/about">このサイトについて</Link></div>
            <div><Link className={styles.link} href="/links">各種リンク</Link></div>
        </div>
    </header>
    <div className={`${styles.nav_mobile} ${styles.mobile_only}`} style={{right: menuClicked? "0": "-200px"}}>
        <p><Link className={styles.link} href="/works">作品</Link></p>
        <p><Link className={styles.link} href="/career">経歴</Link></p>
        <p><Link className={styles.link} href="/about">このサイトについて</Link></p>
        <p><Link className={styles.link} href="/links">各種リンク</Link></p>
    </div>
    </>);
} 
    