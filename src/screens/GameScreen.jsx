import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'
function GameScreen() {
      const navigate = useNavigate()
    const title ="The Complicated Case of the Body in the Mathematics Department"
    const story="Last night, the quiet halls of the Mathematics Department were shaken. Professor Harrington’s body was discovered in the study at exactly midnight. The department was eerily silent, except for the faint sound of papers rustling in the offices. Three people were present that evening, each with possible motives. Three possible murder weapons were found. And three locations in the department might have been where it all went wrong."
    const Date=" SEP 17, 2025"
  return (
    <div className='h-[400px] w-[600px] bg-[#fff8ed] p-6 border-2 border-dashed border-[#b31308]'>
    <div>
        <h1 className='font-extrabold text-[20px] text-[#b31308] '>{title}</h1>
        <p className='text-[#b31308]'>{Date}</p>

        <p className='caveat text-[18px] mt-4'>{story}</p>

        <h2>solve</h2>

           <div className="flex space-x-6 mb-8">
        <div className="flex flex-col items-center">
          <span className="text-2xl">👤</span>
          <p className="text-sm">Who</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl">📍</span>
          <p className="text-sm">Where</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl">🔪</span>
          <p className="text-sm">What</p>
        </div>
      </div>

        <div style={{display:"flex",justifyContent:"space-between", paddingInline: 50}}>

        <button onClick={()=>{navigate('/investigate')}} style={{height: 50, width : 150, backgroundColor: 'pink'}} >
          <p>start investigation</p>
        </button>
        <button style={{height: 50, width : 100, backgroundColor: 'pink'}} onClick={()=>{navigate('/')}}>
          <p>back</p>
        </button>
        </div>

    
    </div>
      
    </div>
  )
}

export default GameScreen
