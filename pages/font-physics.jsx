import React from 'react'
import Scene from '../components/font-physics/index';
import Header from '../components/header/index';

export default function canvas_painting_animation() {
    return (
        <>
        <Header color="coral" title="Font physics" github="https://github.com/olivierlarose/font-physics" next="/canvas-ellipse-hover" tutorial="https://www.meshdojo.com/font-2d-physics-animation-with-matter-js/"/>
        <div className="font-physics">
            <Scene />
        </div>
        </>
    )
}
