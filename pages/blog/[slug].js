import Head from 'next/head'
import { useRouter } from 'next/router';

export default function Article() {
    const router = useRouter();
    const { slug } = router.query
    return (
        <div className="container">
            <Head>
                <title>{slug}</title>
                <meta name="description" content="A next Js page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>{slug}</h1>
            <p>Article description</p>
        </div>
    )
}
