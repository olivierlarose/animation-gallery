import React from 'react'
import Scene from '../components/canvas-ellipse-hover/index';
import Header from '../components/header/index';

export default function canvas_painting_animation() {
    return (
        <>
        <Header color="purple" title="Canvas Ellipse Hover Animation" github="https://github.com/olivierlarose/canvas-ellipse-hover" next="/font_variation" tutorial="https://www.meshdojo.com/ellipse-hover-animation-with-canvas-and-react/"/>
        <div className="canvas-ellipse-hover">
            <Scene />
        </div>
        </>
    )
}
