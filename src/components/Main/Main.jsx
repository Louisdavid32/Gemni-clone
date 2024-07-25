import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context';

const Main = () => {

    const {onSend,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);
  return (
    <div className='main'>
        <div className='nav'>
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>

        <div className='main-container'>

            {!showResult
            ?<>
                <div className='greet'>
                <p><span>Hello, YoungCoder</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest a raod map for next.js please,Suggest a raod map for python please</p>
                    <img src={assets.compass_icon} alt="" />
                </div>

                <div className="card">
                    <p>Suggest a raod map for Rust please,Suggest a raod map for python please</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>

                <div className="card">
                    <p>Suggest a raod map for python please,Suggest a raod map for python please</p>
                    <img src={assets.message_icon} />
                </div>

                <div className="card">
                    <p>Suggest a raod map for react please,Suggest a raod map for python please</p>
                    <img src={assets.code_icon} alt="" />
                </div>

            </div>
            </> 
            :<div className='result'>

                <div className='result-title'>
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>

                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading
                    ?<div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                    
                </div>

            </div>
            
            }
            

            <div className='main-bottom'>
                <div className='search-box'>
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text"  placeholder='Enter a promt here'/>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input?<img onClick={()=>onSend()} src={assets.send_icon} alt="" />:nullin}
                    </div>
                </div>
                <p className='bottom-info'>
                    Gemini Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex culpa dolor quibusdam velit.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main
