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
          <ul>
            <Link href="/font-physics"><li>Font Physics</li></Link>
            <Link href="/canvas-ellipse-hover"><li>Canvas Ellipse Hover</li></Link>
            <Link href="/font_variation"><li>Font variation</li></Link>
            <Link href="/threejs_image_wave"><li>Threejs image wave</li></Link>
            <Link href="/threejs_line_wobble"><li>Threejs line wobble</li></Link>
            <Link href="/canvas_painting_animation"><li>Canvas painting</li></Link>
          </ul>
        </div>
      </div>
    </div>
  )
}
