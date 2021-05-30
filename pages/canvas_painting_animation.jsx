import React from 'react'
import Scene from '../components/canvas-painting-animation/index';
import Header from '../components/header/index';

export default function canvas_painting_animation() {
    return (
        <>
        <Header color="white" title="Canvas Painting Animation" github="https://github.com/olivierlarose/canvas-painting-animation/blob/master/src/components/scene.js" next="/" tutorial="https://www.meshdojo.com/painting-animation-with-the-canvas/"/>
        <Scene />
        </>
    )
}
