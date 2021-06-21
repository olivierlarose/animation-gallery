import React from 'react'
import Scene from '../components/image-bounce-borders';
import Header from '../components/header/index';

export default function canvas_painting_animation() {
    return (
        <>
        <Header color="blue" title="Image Bounce Borders" github="https://github.com/olivierlarose/image-bounce-borders" next="/canvas-ellipse-hover" tutorial="https://www.meshdojo.com/image-bounce/"/>
        <div className="image-bounce-borders">
            <Scene />
        </div>
        </>
    )
}
