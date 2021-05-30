import React from 'react'
import Scene from '../components/threejs-image-wave/index'
import Header from '../components/header/index';

export default function threejs_line_wobble() {
    return (
        <>
        <Header color="orange" title="Threejs image wave" github="https://github.com/olivierlarose/threejs-wave-animation/blob/master/src/components/scene.js" next="/threejs_line_wobble" tutorial="https://www.meshdojo.com/threejs-image-wave/"/>
        <Scene />
        </>
    )
}
