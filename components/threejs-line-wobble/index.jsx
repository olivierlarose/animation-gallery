import React, { Component } from 'react'
import * as THREE from 'three';

export default class Scene extends Component {

    constructor(props){
        super(props);
        this.time = 0;
        this.uniforms = {
            uTime: {
                value: 0
            },
            uCurve: {
                value: 0
            }
        }
    }

    componentDidMount(){
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(45, 1, 1, 5);
        this.renderer = new THREE.WebGLRenderer({alpha: true, antialias: true})
        this.renderer.setSize(800, 200);
        this.mount.appendChild(this.renderer.domElement);

        this.mountPosition = {
            y: this.mount.getBoundingClientRect().y ,
        }

        const geometry = new THREE.PlaneGeometry(1.65, 0.015, 40, 10);
        const material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: `
            uniform float uTime;
            uniform float uCurve;
            #define M_PI 3.1415926535897932384626433832795
            
            vec3 deformationCurve(vec3 position, vec2 uv) {
                position.y = position.y + (sin(uv.x * M_PI) * sin(uTime) * uCurve);
                return position;
            }

            void main() {
                vec3 newPosition = deformationCurve(position, uv);
                gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
            }
            `,
            fragmentShader: `
            void main() {
                gl_FragColor = vec4(0, 0, 0, 1.0);
            }
            `,
            wireframe: true
         })

        this.line = new THREE.Mesh(geometry, material);
        this.scene.add(this.line);
        this.camera.position.z = 2;
        this.renderer.render(this.scene, this.camera);
        this.runClock();
    }

    runClock(){
        requestAnimationFrame(this.runClock.bind(this));
        this.time += 0.01;
        this.uniforms.uTime.value = this.time * 10;
        this.renderer.render(this.scene, this.camera);
    }

    accelerate(){
        this.uniforms.uCurve.value += 0.04;
        this.animId = requestAnimationFrame(this.accelerate.bind(this));
        if (this.uniforms.uCurve.value >= 0.4){
            cancelAnimationFrame(this.animId);
            this.decelerate();
        }
    }

    decelerate(){
        this.uniforms.uCurve.value -= 0.004;
        this.animId = requestAnimationFrame(this.decelerate.bind(this));
        if (this.uniforms.uCurve.value <= 0){
            cancelAnimationFrame(this.animId);
            this.uniforms.uCurve.value = 0;
        }
    }

    mouseMove(e){
        if(this.uniforms.uCurve.value > 0) return
        const mouseDirection = this.getMouseDirection(e);
        const y = e.clientY;
        const bound = 15;

        if(mouseDirection == "bottom" && y > this.mountPosition.y - bound){
            this.time = 1;
            this.accelerate();
        }
        else if(mouseDirection == "top" && y < this.mountPosition.y + bound){
            this.time = 0;
            this.accelerate();
        }
    }

    getMouseDirection(e){
        if(e.movementY >= 1){
            return "bottom";
        }
        else if(e.movementY <= -1){
            return "top";
        }
        return null
    }

    
    render() {
        return (
            <div className="threejs-line-wobble">
                <div className="elastic-line" style={{height: 2, width: 800}} onMouseMove={(e) => {this.mouseMove(e)}} ref={ref=>this.mount=(ref)}>
                </div>
                <p>hover me</p>
            </div>
            
        )
    }
}
