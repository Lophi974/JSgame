import { useState } from "react";
import "./test.css"

export function Test() {

    class player{
        constructor(health, damage) {
            this.health = health
            this.damage = damage
        }
    }

    const data = null


    const gregory = new player(data?.gregory.health || 100, 20);
    const philippe = new player(100, 15);

    const [philippeHealth, setPhilippeHealth] = useState(philippe.health)
    const [gregoryHealth, setGregoryHealth] = useState(gregory.health)
    const [play, setPlay] = useState(1)


    function dmgPhilippe () {
        console.log("ok")
        setPhilippeHealth(philippeHealth - gregory.damage)
        setPlay(2)
    }
    

    function dmgGregory() {
        setGregoryHealth(gregoryHealth - philippe.damage)
        setPlay(1)
    }

    return(
        <>
        <div className="test-container">
            <div className="p1">
                <div className="health-bar-p1">{gregoryHealth}</div>
                <div>
                    {play === 1 && <button onClick={() => {
                        dmgPhilippe()
                    }}>Attack</button>}
                    
                </div>
            </div>
            <div className="p2">
                <div className="health-bar-p2">{philippeHealth}</div>
                <div> 
                    {play === 2 && <button onClick={() => {
                        dmgGregory()
                    }}>Attack</button>}
                    
                </div>
            </div>
        </div>
        </>
    )
}