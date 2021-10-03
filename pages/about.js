import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function About() {
    return (
        <div className="container">
            <Head>
                <title>A Nextjs app</title>
                <meta name="description" content="A next Js page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 style={{
                color: 'red'
            }}>About</h1>
            <p>This is the about page</p>
            <img src="./img/sun.jpg"></img>
            <style global jsx>
                {`body{
            background: yellow;
            color: black;     
            }
            h1{
                font-size: 5rem;
            }`}
            </style>
        </div>
    )
}
