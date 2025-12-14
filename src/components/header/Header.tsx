'use client'

import {useState} from 'react';
import Link from 'next/link';

export default function Header(){
    let [menuClicked, setMenuClicked] = useState(false);
    return (
    <>
    <header>
        <div className="top">
            <div><Link href="/">カナタのホームページ</Link></div>
            <p className="mobile-only" onClick={()=>{setMenuClicked(!menuClicked)}}>{menuClicked? "✕": "三"}</p>
        </div>
        <div className="nav-pc pc-only">
            <div><Link href="/works">作品</Link></div>
            <div><Link href="/career">経歴</Link></div>
            <div><Link href="/about">このサイトについて</Link></div>
            <div><Link href="/links">各種リンク</Link></div>
        </div>
    </header>
    <div className="nav-mobile mobile-only" style={{right: menuClicked? "0": "-200px"}}>
        <p>作品</p>
        <p>経歴</p>
        <p>このサイトについて</p>
        <p>各種リンク</p>
    </div>
    <style jsx>{`
    .mobile-only{
        display: none;
    }
    header {
        width: 100%;
        height: auto;
        background-color: black;
        position: sticky;
    }
    .top {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .top div{
        margin: auto;
        margin-top: 10px;
        margin-bottom: 20px;
    }
    .top a{
        color: white;
        text-decoration: none;
        font-size: 40px;
        font-family: serif;
        font-weight: bold;
    }
    .top p{
        color: white;
        margin-right: 5px;
        width: 35px;
        font-size: 30px;
    }
    .nav-pc{
        display: flex;
        justify-content: center;
    }
    .nav-pc div{
        display: flex;
        justify-content: center;
        width: 150px;
        margin: auto;
    }
    .nav-mobile{
        position: fixed;
        background-color: gray;
        width: 200px;
        height: 100%;
        transition: 0.5s;
    }
    .nav-mobile p{
        color: white;
    }
    .nav-pc a{
        color: white;
        text-decoration: none;
        margin: auto;
        margin-bottom: 5px;
    }
    @media screen and (max-width: 767px){
        .pc-only {
            display: none;
        }
        .mobile-only{
            display: block;
        }
    }
    `}</style>
    </>);
} 
    