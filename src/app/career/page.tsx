'use client'

import Header from "@/components/header/Header"
import Image from "next/image";
import styles from "./page.module.css"
import tatekan from "../../../public/images/tatekan.jpg"

export default function career() {
  return(
    <>
    <Header/>
    <h1>経歴</h1>
    <p>駒場のよくわからない大学でボコボコにされてるよ</p>
    <Image className={styles.tatekan} src={tatekan} alt="5人に1人留年" width={768} height={1024}></Image>
    </>
  );
}