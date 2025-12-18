'use client'

import Header from "@/components/header/Header"
import Link from "next/link"

export default function works(){
    return (
    <>
    <Header/>
    <h1>作品</h1>
    <p>絶賛執筆中:<Link href="https://kanata844.github.io/gh-pages-tutorial">こいつ</Link></p>
    </>
    )
}