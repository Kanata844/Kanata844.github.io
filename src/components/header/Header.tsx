'use client'

import {useState} from 'react';
import styles from "./Header.module.css"

export default function Header(){
    let [menuClicked, setMenuClicked] = useState(false);
    return (
    <>
    <header className={styles.header}>
        <div className={styles.top}>
            <div className={styles.title}><a href="/">カナタのホームページ</a></div>
            <div className={styles.button}><p className={styles.mobile_only} onClick={()=>{setMenuClicked(!menuClicked)}}>{menuClicked? "✕": "三"}</p></div>
        </div>
        <div className={`${styles.nav_pc} ${styles.pc_only}`}>
            <div><a href="/works">作品</a></div>
            <div><a href="/career">経歴</a></div>
            <div><a href="/about">このサイトについて</a></div>
            <div><a href="/links">各種リンク</a></div>
        </div>
    </header>
    <div className={`${styles.nav_mobile} ${styles.mobile_only}`} style={{right: menuClicked? "0": "-200px"}}>
        <p><a href="/works">作品</a></p>
        <p><a href="/career">経歴</a></p>
        <p><a href="/about">このサイトについて</a></p>
        <p><a href="/links">各種リンク</a></p>
    </div>
    </>);
} 
    