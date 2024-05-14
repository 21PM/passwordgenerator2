
import { useState } from 'react';
import './App.css'

function Generators(){



    const [password , Setpassword] = useState("")
    const [length, Setlength] = useState(8)
    const [caps,SetCaps] =  useState(false);
    const [nums,SetNums] =  useState(false);
    const [symbols,SetSymbols] =  useState(false);
    const [lowers,SetLowers] =  useState(true);
    

    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const Symbols = "!@#$%&*?"
    const numbers = "1234567890"

    function Updateinputlength(e){
        Setlength(e.target.value)
    }



    function SetcheckBoxStatus(e){
            if(e.target.value === "Uppercase"){
                SetCaps(!caps)
            }else if(e.target.value === "Numbers"){
                SetNums(!nums)
            }else if(e.target.value === "Symbols"){
                SetSymbols(!symbols)
            }
    }

    function copypassword(){
        navigator.clipboard.writeText(password)
    }

    function generateRandomPassword(){

        let temppass = "";

        for(let i = 0 ; i <length ; i++){
            if(lowers){
                temppass += lowercase[Math.floor(Math.random()*lowercase.length)]
            }if(caps){
                temppass += uppercase[Math.floor(Math.random()*uppercase.length)]
            }if(symbols){
                temppass += Symbols[Math.floor(Math.random()*Symbols.length)]
            }if(nums){
                temppass += numbers[Math.floor(Math.random()*numbers.length)]

            }
        }

        Setpassword(temppass.substring(0,length))
        
    }

    return(
        <>
            <div className="gendiv">
                                        
            <p>Enter the Length of the Password</p>
            <input type='number' className='numinput' value={length} onChange={Updateinputlength}></input>
            </div>

            <div className='flexDiv'>
                <p>Include Uppercase:</p>
                <input type='checkbox' value={"Uppercase"} onChange={SetcheckBoxStatus}></input>
                <input type='text'></input>
            </div>

            <div className='flexDiv'>
                <p>Include Numbers:</p>
                <input type='checkbox' value={"Numbers"}  onChange={SetcheckBoxStatus}></input>
                <input type='text'></input>
            </div>

            <div className='flexDiv'>
                <p>Include Symbols:</p>
                <input type='checkbox'  value={"Symbols"}  onChange={SetcheckBoxStatus}></input>
                <input type='text'></input>
            </div>

            <button className='btn' onClick={generateRandomPassword}>Generate Password</button>
            <p className='genep'>Generated password: 👇</p>

            <div className='copyDiv'>
            <input type='text' disabled value={password} className='copybar'></input>
            <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ3vZ4AKBd9sig_iTaYUIFr-oTLQX4WTZD7TAa0UcoTNiKwPEUe' onClick={copypassword} width={35} height={25}></img>
            </div>
            
        </>
    )
}

export default Generators;