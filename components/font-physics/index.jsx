import React, { Component } from 'react'
import Matter from 'matter-js';

const words = [
    {
        src: './images/got.png',
        x: 0.25,
        y: -500
    },
    {
        src: './images/ideas.png',
        x: 0.5,
        y: -1200
    },
    {
        src: './images/questionMark.png',
        x: 0.9,
        y: -1500
    },
]

export default class scene extends Component {

    componentDidMount(){
        const Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Body = Matter.Body,
        Events = Matter.Events,
        Composite = Matter.Composite,
        Common = Matter.Common,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        Bodies = Matter.Bodies;

        const width = this.container.getBoundingClientRect().width;
        const height = this.container.getBoundingClientRect().height;

        //Create and run renderer
        const engine = Engine.create();
        const runner = Runner.create();
        const render = Render.create({
            element: this.container,
            engine: engine,
            options: { 
                width, 
                height,
                wireframes: false,
                background: "white"
            }
        })
        Render.run(render);
        Runner.run(runner, engine);

        //Add walls and ground
        const wallRight = Bodies.rectangle(width+6, height/2, 10, height, { 
            isStatic: true 
        })
        const wallLeft = Bodies.rectangle(-6, height/2, 10, height, {
            isStatic: true 
        });
        const ground = Bodies.rectangle(width/2, height+6, width, 10, {
             isStatic: true,
        });
        Composite.add(engine.world, [wallRight, wallLeft, ground]);

         //add letters
         const scale = width > 1000 ? 0.6 : 0.3;
         words.forEach( ({ src, x, y }) => {
             const img = new Image();
             img.onload = () => {
                 const imageHeight = img.height;
                 const imageWidth = img.width;
                 const mass = img.width / 100;
                 const angle = 0.2 * Common.choose([1, -1]);
                 const letter = Bodies.rectangle(width * x, y, imageWidth * scale, imageHeight * scale, {
                     mass, 
                     angle, 
                     render: {
                         sprite: {
                             texture: src,
                             xScale: scale,
                             yScale: scale
                         }
                     }
                 })
                 Composite.add(engine.world, letter);
             }
             img.src = src
         })

         //Add mouse
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
                  mouse: mouse,
                  constraint: {
                      stiffness: 1,
                      render: {
                          visible: false
                      }
                  }
              })
        render.mouse = mouse;
        Composite.add(engine.world, mouseConstraint);
    }

    render() {
        return (
            <div className="scene">
                <div ref={ref => {this.container = ref}}className="main"></div>
                <div className="footer">
                    <p>yourname@businessemail.com</p>
                </div>
            </div>
        )
    }
}
