'use client'

import Header from "@/components/header/Header"
import Image from "next/image";
import tatekan from "../../../public/images/tatekan.jpg"

export default function career() {
  return(
    <>
    <Header/>
    <h1>経歴</h1>
    <p>準備中でっせちょっとまってくんなまし、駒場のよくわからない大学でボコボコにされてるよ</p>
    <Image src={tatekan} alt="5人に1人留年"></Image>
    </>
  );
}