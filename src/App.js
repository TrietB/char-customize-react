import React, {useState, useEffect} from 'react'
import "./App.css"
import Avatar from './components/Avatar.js';
import PartList from './components/PartList';

const total ={
	body: 17,
	eyes: 17,
	hair: 73,
	mouth: 24,
	eyebrows: 15,
	glasses: 17,
	clothing1: 5,
	clothing2: 5,
	clothing3: 9,
};


function App() {
    const [body, setBody] = useState(0)
    const [eyes, setEyes] = useState(1)
    const [hair, setHair] = useState(2)
    const [clothing1, setClothing1] = useState(3)
    const [clothing2, setClothing2] = useState(4)
    const [clothing3, setClothing3] = useState(5)
    const [mouth, setMouth] = useState(6)
    const [noses, setNoses] = useState(0)
    const [eyeBrows, setEyesBrown] = useState(8)
    const [glasses, setGlasses] = useState(9)

    
    const Heading = ({greetings})=>
        (<h1>{greetings}</h1>)
    
    const randomComponent = (arr, pos)=>{
        for(let path in arr){
            if(pos == path){
                let min = 1
                let max = arr[path]
                let result = Math.round(Math.random() * (max - min) + min)
                console.log(result)
                return result
            }
        }
    }

    const randomize = () =>{
        return (
            <Avatar body={setBody(randomComponent(total,'body'))}
                        eyes={setEyes(randomComponent(total,'eyes'))}
                        hair={setHair(randomComponent(total,'hair'))}
                        clothing1={setClothing1(randomComponent(total,'clothing1'))}
                        clothing2={setClothing2(randomComponent(total,'clothing2'))}
                        clothing3={setClothing3(randomComponent(total,'clothing3'))}
                        mouth={setMouth(randomComponent(total,'mouth'))}
                        noses={setNoses}
                        eyebrows={setEyesBrown(randomComponent(total,'eyesbrow'))}
                        glasses={setGlasses(randomComponent(total,'glasses'))}/>
        )
    }
    useEffect(()=>{
        randomize()
    },[])    


    return (
    <>
    <div className="App">
        <div className="title">CHARACTER</div>
        <div className="subtitle">CUSTOMIZATION</div>
        <div className="underline"></div>
        <div className="custom-section">
            <div className="avatar-wrapper">
                <Avatar body={body}
                        eyes={eyes}
                        hair={hair}
                        clothing1={clothing1}
                        clothing2={clothing2}
                        clothing3={clothing3}
                        mouth={mouth}
                        noses={noses}
                        eyebrows={eyeBrows}
                        glasses={glasses}/>
                <div className="middle"><button onClick={()=>randomize(total)} className="button">Randomize!</button></div>
            </div>
            <div>
                <PartList title={'Body'} path={'body'} total={total.body} set={setBody}/>
                <PartList title={'Eyes'} path={'eyes'} total={total.eyes} set={setEyes}/>
                <PartList title={'Hair'} path={'hair'} total={total.hair} set={setHair}/>
                <PartList title={'Shirts'} path={'clothes/layer_1'} total={total.clothing1} set={setClothing1}/>
                <PartList title={'Coats'} path={'clothes/layer_2'} total={total.clothing2} set={setClothing2}/>
                <PartList title={'Clothing Accessories'} path={'clothes/layer_3'} total={total.clothing3} set={setClothing3}/>
                <PartList title={'Mouths'} path={'mouths'} total={total.mouth} set={setMouth}/>
                <PartList title={'Eyebrows'} path={'eyebrows'} total={total.eyebrows} set={setEyesBrown}/>
                <PartList title={'Glasses'} path={'accessories/glasses'} total={total.glasses} set={setGlasses}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default App