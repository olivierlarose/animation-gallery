import React, { Component } from 'react'
import * as THREE from 'three';

export default class scene extends Component {

    constructor(props){
        super(props);
        this.uniforms = {
            uTime: {
                value: 0
            },
            uWaveHeight: {
                value: 0.015
            },
            uTexture: {
                value: null
            }
        }
    }

    componentDidMount(){
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(45, 1 , 1, 5);
        this.renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
        this.clock = new THREE.Clock();
        this.renderer.setSize(658/1.5, 921/1.5); //based on image dimension
        this.mount.appendChild( this.renderer.domElement );

        const geometry = new THREE.PlaneGeometry(1, 1, 35, 25);
        const loader = new THREE.TextureLoader();
        loader.load('/images/car.jpeg', texture => this.uniforms.uTexture.value = texture);

        const material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: `
            uniform float uTime;
            uniform float uWaveHeight;
            varying vec2 vUv;

            void main() {
                vUv = uv;
                float calc = uWaveHeight * sin(position.x * 10.0 + uTime);
                vec3 newPosition = position;
                newPosition.z = position.z + calc; 

                gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
              }
            `,
            fragmentShader: `
            uniform sampler2D uTexture;
            varying vec2 vUv;
            void main() {
                vec3 color = texture2D(uTexture,vUv).rgb;
                gl_FragColor = vec4(color,1.0);
            }
            `,
        })
        this.cube = new THREE.Mesh( geometry, material );
        this.scene.add( this.cube );
        this.camera.position.z = 1.3;
        this.renderer.render(this.scene, this.camera);
        this.animate();
    }

    animate(){
        const time = this.clock.getElapsedTime() * 4;
        this.uniforms.uTime.value = time;
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.animate.bind(this));
    }

    accelerate(){
        this.uniforms.uWaveHeight.value += 0.0005;
        const animId = requestAnimationFrame(this.accelerate.bind(this));
        if (this.uniforms.uWaveHeight.value >= 0.04) cancelAnimationFrame(animId);
    }

    decelerate(){
      this.uniforms.uWaveHeight.value -= 0.0005;
        const animId = requestAnimationFrame(this.decelerate.bind(this));
        if (this.uniforms.uWaveHeight.value <= 0.015) cancelAnimationFrame(animId);
    }

    render() {
        return (
            <div className="threejs-wave">
                <div onMouseEnter={()=>{this.accelerate()}} onMouseLeave={()=>{this.decelerate()}} ref={ref => {this.mount = ref}}>
                </div>
            </div>
        )
    }
}
