import Head from 'next/head'
import axios from "axios";
import { useState, useEffect } from 'react';

export default function Pokemon({ data }) {
    const [state, setState] = useState({
        name: data.name
    })
    // useEffect(() => {
    //     console.log('component loaded')
    // axios.get('https://pokeapi.co/api/v2/pokemon/pikachu').then((response) => {
    //     console.log(response.data.name)
    //     setState({
    //         name: response.data.name
    //     })
    // })
    // }, [])



    return (
        <div className="container">
            <Head>
                <title>A Pokemon app</title>
                <meta name="description" content="A next Js page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Pokemon</h1>
            <h2>{state.name}</h2>
            <p>This is the Pokemon page</p>
        </div>
    )
}


// static site generation

// export async function getStaticProps() {
//     // Call an external API endpoint to get posts.
//     // You can use any data fetching library
//     const res = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//     const data = await res.json()
//     //       axios.get('https://pokeapi.co/api/v2/pokemon/pikachu').then((response) => {
//     //         console.log(response.data.name)
//     //         setState({
//     //             name: response.data.name
//     //         })
//     //     })
//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//         props: {
//             data,
//         },
//     };
// }


// server side rendering 

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}