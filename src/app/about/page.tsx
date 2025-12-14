'use client'

import Header from "@/components/header/Header"
import Image from "next/image"
import nextLogo from "../../../public/next.svg"

export default function about(){
    return (
    <>
    <Header/>
    <h1>このサイトについて</h1>
    <p>このサイトにはNext.jsが使われているよ。Reactってよくわかんないけどなんかすごいね。</p>
    <Image src={nextLogo} alt="Next.jsのロゴ"/>
    </>
    )
}