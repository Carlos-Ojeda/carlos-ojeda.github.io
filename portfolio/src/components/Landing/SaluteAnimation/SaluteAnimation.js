import data from './greetings';
import {useEffect, useState} from "react";

function SaludeAnimation() {
    let [currentText, setCurrentText] = useState('');

    let sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    useEffect(() => {
        let animation = async () => {
            await sleep(1000);
            let currentTextLocal = '';
            while(true){
                for(let j = 0; j < data.messages[0].text.length; j++){
                    currentTextLocal += data.messages[0].text[j];
                    setCurrentText(currentTextLocal);
                    await sleep(100);
                }
                await sleep(3000);
                currentTextLocal = "";
                setCurrentText("");
            }
        };

        animation();
    }, []);

    return(
        <h1 className="salute-title">
            {currentText}<span className="flickering-cursor">|</span>
        </h1>
    );
}
  
export default SaludeAnimation;