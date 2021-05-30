import React from 'react'
import Scene from '../components/threejs-line-wobble/index';
import Header from '../components/header/index';

export default function threejs_line_wobble() {
    return (
        <>
        <Header color="black" title="Canvas Painting Animation" github="https://github.com/olivierlarose/Threejs-line-wobble/blob/master/src/components/Scene.js" next="/canvas_painting_animation" tutorial="https://www.meshdojo.com/three-js-line-wobble/"/>
        <Scene />
        </>
    )
}
