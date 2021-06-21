import React, { Component } from 'react'
import { gsap } from 'gsap';

export default class Item extends Component {

    constructor(){
        super();
        this.xdirection = 1;
        this.ydirection = 1;
        this.x = 0;
        this.y = 0;
        this.speed = 0;
        this.height = 0;
        this.width = 0;
    }

    componentDidMount(){
        //Set initial values
        const windowsWidth = window.innerWidth;
        const windowsHeight = window.innerHeight;
        this.width = this.ref.getBoundingClientRect().width;
        this.height = this.ref.getBoundingClientRect().height;
    
        //set random direction between -1 or 1
        this.xdirection = Math.random() < 0.5 ? 1 : -1;
        this.ydirection = Math.random() < 0.5 ? 1 : -1;
    
        this.x = this.randomInt(0, windowsWidth - this.width);
        this.y = this.randomInt(0, windowsHeight - this.height);
        this.speed = Math.random() * 1 + 0.5;
        this.setPosition();
    }

    randomInt(min, max){
        return Math.floor(Math.random() * (max - min) + min);
    }

    update(){
        const windowsWidth = window.innerWidth;
        const windowsHeight = window.innerHeight;

        //Object is outside the window in x
        if(this.x > windowsWidth - this.width){
            this.xdirection = -1;
        } 
        //Object hits left or right wall, reverse direction
        else if(this.x > windowsWidth - this.width + 1 || this.x < 0){
            this.xdirection *= -1;
        }
        //Object is outside the window in y
        if(this.y > windowsHeight - this.height){
            this.ydirection = -1;
        }
        //Object hits top or bottom wall, reverse direction
        else if(this.y > windowsHeight - this.height + 1 || this.y < 0){
            this.ydirection *= -1;
        }    

        this.x = this.x + this.speed * this.xdirection;
        this.y = this.y + this.speed * this.ydirection;
        this.setPosition();
    }

    setPosition(){
        gsap.to(this.ref, 0, {x: this.x, y: this.y})
    }

    render() {
        const { src } = this.props.item
        return (
            <div className="item" ref={ref => this.ref = ref}>
                <img src={"/images/" + src}></img>
            </div>
        )
    }
}
