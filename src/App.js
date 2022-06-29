import React, {useState, useEffect} from 'react'
import "./App.css"
import Avatar from './components/Avatar.js';

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
    const [noses, setNoses] = useState(7)
    const [eyeBrows, setEyesBrown] = useState(8)
    const [glasses, setGlasses] = useState(9)
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
                <div className="text-center"><button className="button">Randomize!</button></div>
            </div>
            <div className="">
                <div className="items-menu">
                    <h3>Body</h3>
                    <div className="items-wrapper">
                        <div className="item"><img src="/character/body/10.png" alt=""/></div>
                        <div className="item"><img src="/character/body/10.png" alt=""/></div>
                        <div className="item"><img src="/character/body/10.png" alt=""/></div>
                        <div className="item"><img src="/character/body/10.png" alt=""/></div>
                        <div className="item"><img src="/character/body/10.png" alt=""/></div>
                        <div className="item"><img src="/character/body/10.png" alt=""/></div>
                        <div className="item"><img src="/character/body/10.png" alt=""/></div>
                        <div className="item"><img src="/character/body/10.png" alt=""/></div>
                        <div className="item"><img src="/character/body/10.png" alt=""/></div>
                        <div className="item"><img src="/character/body/10.png" alt=""/></div>  
                    </div>   
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default App