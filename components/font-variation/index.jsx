import React from 'react'

export default function Scene() {

    const nbOfWords = 7
    const word = "awesome";
    const letters = word.split('');
    let refs = [];

    const mouseMove = (e) => {
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;

        const adjustY = (e.pageY / windowHeight - 1);
        const adjustX = (e.pageX / windowWidth - 1);
        const mouse = {
            x: (e.pageX / windowWidth) + adjustX,
            y: (e.pageY / windowHeight) + adjustY
        }
        anim(mouse.x, mouse.y);
    }

    const anim = (mouseX, mouseY) => {
        refs.map( (word, wordIndex) => {
            const calcY = getCalcY(wordIndex, mouseY);
            word.map( (letter, letterIndex) => {
                letter.current.style.fontWeight = 600 * calcY + 200
                const calcX = getCalcX(letterIndex, mouseX);
                letter.current.style.fontStretch = 63 * calcX + 62 + "%"
            })
        })
    }

    const getCalcY = (wordIndex, mouseY) => {
        let calc = (wordIndex + 1) / nbOfWords * mouseY

        //Mouse is on the top or left side of the window
        if(mouseY < 0){
            const positionY = Math.abs(mouseY); //transform negative to positive number
            calc = (nbOfWords - wordIndex) / nbOfWords * positionY
        }
        
        return calc
    }

    const getCalcX = (letterIndex, mouseX) => {
        const nbOfLetters = letters.length;
        let calc = (letterIndex + 1) / nbOfLetters * mouseX

        //Mouse is on the top or left side of the window
        if(mouseX < 0){
            const positionX = Math.abs(mouseX); //transform negative to positive number
            calc = (nbOfLetters - letterIndex) / nbOfLetters * positionX
        }
        
        return calc
    }

    const getLetters = () => {
        refs.push([]);
        return letters.map( (letter, i) => {
            const letterRef = React.createRef();
            refs[refs.length - 1].push(letterRef);
            return <p key={i} ref={letterRef}>{letter}</p>
        })
    }
 
    return (
        <div className="font-variation" onMouseMove={mouseMove}>
            {[...Array(nbOfWords)].map( (_, index) => {
                return <div key={index} className="word">{getLetters()}</div>
            })}
        </div>
    )
}
