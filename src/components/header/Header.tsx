'use client'

export default function Header(){
    return (
    <>
        <header>
            <h1>カナタのホームページ</h1>
        </header>
        <style jsx>{`
            header {
                width: 100%;
                height: 100px;
                background-color: black;
            }
            h1 {
                color: white;
            }
        `}</style>
    </>);
} 
    