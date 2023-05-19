import './main.css';
import {useEffect,useState} from 'react';
import UseCustomHook from './customhook.jsx'

export default function Main() {
    const [color, setColor] = useState('#2E7B19');
    const tintedColors = UseCustomHook(color)
    const handleChange =(e) => {
        setColor(e.target.value);
    }        

    const cards = [];
    if(!(tintedColors.length == 0)) {
        tintedColors.map((value,index) => {
            let fontclr;
            if(index > 10) {
                fontclr = "white"
            }
            else {
                fontclr = "black"
            }
            cards.push(
                <div className="col" key= {index} style = {{backgroundColor : value.rgb,height : "100px"}} >
            <div  style = {{"textAlign" : "left","color" : fontclr}}>{value.rgb}</div>
            </div>
            )
        })
        
    }


    return (
        <>
        <h2>Color Generator</h2>
        <div className='container-fluid  d-flex'> 
            <label >Color picker {" "} </label>
            <input type="color" className="form-control form-control-color" id="exampleColorInput" 
            onChange = {handleChange} value={color} title="Choose your color"/>
            {/* <button className="btn btn-info" type="button" id="button-addon2">Button</button>   */}
        </div><br/>
        <div className = "container text-center">
            <div className='row row-cols-2 row-cols-lg-5 g-2 g-lg-3'>
            {tintedColors.length !== 0 ?  cards : ""}
            </div>
        </div>

        </>
    )
}