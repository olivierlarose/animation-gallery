import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{marginTop: "100px"}}>
      <Head>
        <title>Mesh Dojo Gallery</title>
        <meta name="description" content="Gallery of web animations made by Mesh Dojo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="meshdojo-gallery">
        <div className="title">
          <img src="./assets/logo.png"></img>
          <h1>Mesh Dojo Gallery</h1>
        </div>
        <div className="gallery">
          <Link href="/canvas_painting_animation"><p>Canvas painting</p></Link>
          <Link href="/threejs_image_wave"><p>Threejs image wave</p></Link>
          <Link href="/threejs_line_wobble"><p>Threejs line wobble</p></Link>
        </div>
      </div>
    </div>
  )
}
