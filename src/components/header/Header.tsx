'use client'

import {useState} from 'react';

export default function Header(){
    let [menuClicked, setMenuClicked] = useState(false);
    return (
    <>
    <header>
        <div className="top">
            <div><a href="/">カナタのホームページ</a></div>
            <p className="mobile-only" onClick={()=>{setMenuClicked(!menuClicked)}}>{menuClicked? "✕": "三"}</p>
        </div>
        <div className="nav-pc pc-only">
            <div><a href="/works">作品</a></div>
            <div><a href="/career">経歴</a></div>
            <div><a href="/about">このサイトについて</a></div>
            <div><a href="/links">各種リンク</a></div>
        </div>
    </header>
    <div className="nav-mobile mobile-only" style={{right: menuClicked? "0": "-200px"}}>
        <p><a href="/works">作品</a></p>
        <p><a href="/career">経歴</a></p>
        <p><a href="/about">このサイトについて</a></p>
        <p><a href="/links">各種リンク</a></p>
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
        font-size: 4vw;
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
        margin: 5px;
    }
    .nav-mobile a{
        color: white;
        text-decoration: none;
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
    