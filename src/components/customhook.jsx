import {useState,useEffect} from 'react';
import Values from 'values.js';

export default function UseCustomHook(color) {
    const [tintedColors,setTintedColors] = useState([])
        useEffect(() => {
            let clr = new Values(color)
            let colorarr =[]
            function rgbToHex(rgb) {
                const componentToHex = (component) => {
                  const hex = component.toString(16);
                  return hex.length === 1 ? '0' + hex : hex;
                };
              
                const hexR = componentToHex(rgb[0]);
                const hexG = componentToHex(rgb[1]);
                const hexB = componentToHex(rgb[2]);
              
                return `#${hexR}${hexG}${hexB}`;
              }
            clr.all(10).forEach((value,index) => {
                let obj = {
                    rgb : rgbToHex(value.rgb).toString(),
                    weight : value.weight
                }
                colorarr.push(obj)
            })
            setTintedColors(colorarr)
            
        },[color])
        return tintedColors
}