import React from 'react'
import Link from 'next/link';

export default function Header({color, title, github, next, tutorial}) {

    return (
        <div style={{color: color}} className="header"> 
            <Link href='/'><div className="logo">
                <img src='./assets/logo.png'></img>
                <div className="logo-title">
                    <p>MESH DOJO</p>
                    <p>GALLERY</p>
                </div>
            </div></Link>
            <h1>{title}</h1>
            <div className="nav">
                <a href={github} target="_blank"><p>Github</p></a>
                <a href={tutorial} target="_blank"><p>Tutorial</p></a>
                <Link href={next}><p>Next Demo</p></Link>
            </div>
        </div>
    )
}
