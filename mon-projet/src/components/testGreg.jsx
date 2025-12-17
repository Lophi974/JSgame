import { useState } from "react";
import "./testG.css"
import { Hunter } from "../Characters/players/Hunter";
import { Mage } from "../Characters/players/Mage";

export function Test() {

    // const gregory = new player(data?.gregory.health || 100, 20);
    // const philippe = new player(100, 15);

    // const [philippeHealth, setPhilippeHealth] = useState(philippe.health)
    // const [gregoryHealth, setGregoryHealth] = useState(gregory.health)
    // const [play, setPlay] = useState(1)


    // function dmgPhilippe () {
    //     console.log("ok")
    //     setPhilippeHealth(philippeHealth - gregory.damage)
    //     setPlay(2)
    // }
    

    // function dmgGregory() {
    //     setGregoryHealth(gregoryHealth - philippe.damage)
    //     setPlay(1)
    // }

    const[hunterHealth, setHunterHealth] = useState(Hunter.health);
    const[hunterPhyDmg, setHunterPhyDmg] = useState(Hunter.physiqueDeff);
    const[hunterMagDmg, setHunterMagDmg] = useState(Hunter.magicDmg);
    const[hunterPhyDef, setHunterPhyDef] = useState(Hunter.physiqueDeff);
    const[hunterMagDef, setHunterMagDef] = useState(Hunter.magicDeff);
    const[hunterSpeed, setHunterSpeed]   = useState(Hunter.speed);

    const[mageHealth, setMageHealth] = useState(Mage.health);
    const[magePhyDmg, setMagePhyDmg] = useState(Mage.physiqueDeff);
    const[mageMagDmg, setMageMagDmg] = useState(Mage.magicDmg);
    const[magePhyDef, setMagePhyDef] = useState(Mage.physiqueDeff);
    const[mageMagDef, setMageMagDef] = useState(Mage.magicDeff);
    const[mageSpeed, setMageSpeed]   = useState(Mage.speed);

    return(
        <>
        <div className="test-containerG">

                <div className="frise"></div>

            <div className="test-combat"> 
                
                <div className="player">
                    <div className="p1G">
                        <div className="health-bar-p1G">Hunter</div>
                    </div>
                    <div className="p1G">
                        <div className="health-bar-p1G">Warrior</div>
                    </div>
                    <div className="p1G">
                        <div className="health-bar-p1G">Mage</div>
                    </div>
                </div>

                <div className="mobs">

                    <div className="p2G">
                        <div className="health-bar-p2G">mob 1</div>
                    </div>
                    <div className="p2G">
                        <div className="health-bar-p2G">mob 2</div>
                    </div>
                    <div className="p2G">
                        <div className="health-bar-p2G">mob 3</div>
                    </div>

                </div>
            </div>

            <div className="info-container">
                <div className="info">
                    <p style={{textAlign: "center"}}>Hunter</p>
                    <p>Health: {hunterHealth}</p>
                    <p>PhyDmg: {hunterPhyDmg}</p>
                    <p>MagDmg: {hunterMagDmg}</p>
                    <p>PhyDef: {hunterPhyDef}</p>
                    <p>MagDef: {hunterMagDef}</p>
                    <p>Spped : {hunterSpeed} </p>
                </div>
                <div className="info">
                    <p style={{textAlign: "center"}}>Warrior</p>
                    <p>Health: {hunterHealth}</p>
                    <p>PhyDmg: {hunterPhyDmg}</p>
                    <p>MagDmg: {hunterMagDmg}</p>
                    <p>PhyDef: {hunterPhyDef}</p>
                    <p>MagDef: {hunterMagDef}</p>
                    <p>Spped : {hunterSpeed} </p>
                </div>
                <div className="info">
                    <p style={{textAlign: "center"}}>Mage</p>
                    <p>Health: {mageHealth}</p>
                    <p>PhyDmg: {magePhyDmg}</p>
                    <p>MagDmg: {mageMagDmg}</p>
                    <p>PhyDef: {magePhyDef}</p>
                    <p>MagDef: {mageMagDef}</p>
                    <p>Spped : {mageSpeed} </p>
                </div>
            </div>
        </div>
        </>
    )
}