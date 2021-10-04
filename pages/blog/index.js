import Head from 'next/head'

export default function BlogIndex() {
    return (
        <div className="container">
            <Head>
                <title>Blog index</title>
                <meta name="description" content="A next Js page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Blog Index</h1>
            <p>This is the blog page</p>
        </div>
    )
}
