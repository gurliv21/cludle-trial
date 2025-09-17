import React from 'react'
import hatImage from '../assets/hat.png'
import { useNavigate } from 'react-router-dom'
function HomeScreen() {
    const navigate = useNavigate()
  return (
    <div className='h-[400px] w-[600px] bg-[#fff8ed] p-6'>
      <div className='relative'>
      <h1 className='font-extrabold text-[#b31308] text-[90px] text-center sigmar-regular mt-[10px]'>CLUDLE</h1>
      <img src={hatImage} className='absolute top-[-10px] right-12 h-[100px] w-auto rotate-[30deg]'/>
      </div>

      <p className='font-bold sigmar-regular text-center mt-[-20px]'>A daily Dose of mystry Puzzle!!!</p>
      <div className='flex items-center mt-[60px] flex-col gap-4'>
       <button className='bg-[#b31308] border-2 border-black w-[320px] p-1 shadow-[4px_6px_0_#3396D3] active:translate-y-1 active:shadow-[0_2px_0_#1e40af] transition-all  ' onClick={()=>{navigate('/GameScreen')}}>
        <p className='text-white font-semibold'>Solve</p>

      </button>
       <button className='bg-[#ffdea9] border-2 border-black w-[320px] p-1 shadow-xl '>
        <p className='text-black font-semibold'>LeaderBoard</p>

      </button>
      

      </div>
 

    </div>
  )
}

export default HomeScreen
