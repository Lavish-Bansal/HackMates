import React, { useEffect } from 'react'
import Navbar from '../../components/home/navbar/Navbar'
import './Home.css'
import team from '../../assets/team.png'
import TypingAnimation from '../../components/TypingAnimation'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     navigate('/login')
  //   }, 10000)
  // }, [])
  return (
    <div className='mx-auto w-full h-screen bg'>
      <div>
        <Navbar />
      </div>
      <div className='w-10/12 mx-auto flex justify-between items-center'>
        <div className='w-3/5 mt-10'>
          <h1 className='font-600 text-blue-900 text-[40px] font-bold' >Welcome to HackMates !</h1>
          <p className='flex items-center pr-10'><span><TypingAnimation /></span></p>
          <p className='mt-5 text-[18px] space-x-1 text-white'>Discover, collaborate, and innovate with like-minded individuals in the exciting world of hackathons.
            <br /> Whether you're seeking teammates for your next project or looking to join a dynamic team, our platform connects you with opportunities to unleash your creativity and problem-solving skills.</p>

          <p className='mt-5 text-[18px] space-x-1 text-white'>Explore hackathons from various colleges, cities, and events. Find your ideal partners based on shared interests, skills, and enthusiasm. Together, let's turn ideas into reality and make an impact!</p>

          <p className='mt-10 text-[20px] text-blue-950 font-semi-bold'>Start your hackathon journey today. Happy hacking!</p>

        </div>
        <div>
          <img className='mt-10' src={team} alt="" style={{ width: '400px' }} />
        </div>
      </div>
    </div>
  )
}

export default Home;