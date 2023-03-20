import Head from "next/head";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Layout({children}: {children: React.ReactElement}) {
    return(
        <>
            <Head>
                <link rel="shortcut icon" href="#"></link>
                <title>Moveis Eliane</title>
            </Head>
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}