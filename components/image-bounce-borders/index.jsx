import React, { useEffect } from 'react';
import Item from './components/Items';

const items = [
    {
        src:"bowl.png"
    },
    {
        src:"sandals.png"
    },
    {
        src:"rock.png"
    },
    {
        src:"cam.png"
    },
    {
        src:"light.png"
    },
    {
        src:"chair.png"
    }
]

export default function Index() {

    let refs = [];

    const animate = () => {
        refs.map( (ref) => {
            if(ref.current != null) ref.current.update();
        })
        window.requestAnimationFrame(animate);
    }

    useEffect( () => {
        animate();
    },[])

    return (
        <div className="scene">
            {
                items.map( (item, index) => {
                    const reference = React.createRef();
                    refs.push(reference);
                    return <Item item={item} ref={reference} key={index}/>
                })
            }
        </div>
    )
}
