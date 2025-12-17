import "./test.css"
import { warrior } from "../Characters/players/Warrior.js"
import { useState } from "react"
import { minion } from "../Characters/Mobs/minion.js"
import { waeponInv } from "../Characters/waepons/waeponsList.js"
import { mob } from "../Characters/Class/mob.js"

export function Test() {

    const [player1Health, setPlayer1Health] = useState(warrior.health)
    const [mob1Health, setMob1Health] = useState(minion.health)
    const [turn, setTurn] = useState("player")
    const [chooseWaepon, setChooseWaepon] = useState(false)
    const [waepon, setWaepon] = useState([waeponInv[0].physiqueDmg, waeponInv[0].magicDmg])
    const [choosenWaepon, setChoosenWaepon] = useState("Choose your waepon!")

    console.log()

    
    function OpenChooseWaepon() {
        return(
            waeponInv.map(waepon=> <button onClick={(e) => {
            setWaepon([waepon.physiqueDmg, waepon.magicDmg])
            setChooseWaepon(false)
            setChoosenWaepon(waepon.name)
            }}>{waepon.name}</button>)
        )
    }

    function attackMob() {
        setMob1Health(mob1Health - warrior.physiqueDmg - warrior.magicDmg - waepon[0] - waepon[1])
        setTurn("mob")
    }


    return(
        <>
        <div className="test-container">
            {chooseWaepon && 
            <>
                <OpenChooseWaepon/>
            </>
            }
            <div className="p1">
                <div className="health-bar-p1">{player1Health}</div>
                {turn === "player" && 
                <div>
                    <button onClick={() => {setChooseWaepon(true)}}>{choosenWaepon}</button>
                    <button onClick={attackMob}>attack</button>
                </div>
                }
                <div>
                </div>
            </div>
            {mob1Health >= 0 && 
                <div className="p2">
                    <div className="health-bar-p2">{mob1Health}</div>
                    <div>
                    </div>
                </div>
            }
            
        </div>
        </>
    )
}