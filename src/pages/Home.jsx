
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'motion/react';
import HeroSection from '../components/HeroSection';
import GetInTouch from '../components/GetInTouch';
import '../App.css'
import InfiniteFlow from '../components/InfiniteFlow';
import IconsFlow from '../components/IconsFlow';
import About from '../components/About';
import ProjectsSection from '../components/ProjectsSection';
import HomeData from '../data/HomeData.json'
import WorkExperience from '../components/WorkExperience';
import TechSection from '../components/TechSection';


const Home = () => {
    return (
        < div className='mx-[14%] pt-[5%] max-md:pt-[24%] max-md:mx-[5%] pb-10'>
            {/* 
            <div className='bg-[var(--color-innerbg)] text-[var(--color-maintext)] max-md:pt-[7vh] pt-45 border-t-0 border-b-0 pb-25 max-md:pb-15 max-md:w-[95%] max-xl:w-[80%] w-[55%] pr-[9%] pl-[9%] m-auto border-[1.5px] border-r-[var(--color-lightgray)] border-l-[var(--color-lightgray)] overflow-hidden'>
            </div> */}

            <div className='relative'>
                <HeroSection Name={HomeData[0].Name} Role={HomeData[0].Role} Description={HomeData[0].Description} />
            </div>

            <div className='relative'>

                <div className='my-20'>
                    <IconsFlow />

                </div>

                <About Para1={HomeData[1].AboutPara1} Para2={HomeData[1].AboutPara2} />

                <div className='mt-10'>

                <TechSection />
                </div>


                <ProjectsSection projects={HomeData[2]} />

                <WorkExperience experience={HomeData[3]} />

                <div className='border-solid border-[var(--color-sidetext)] border-b-[0.5px] w-[90%] mx-auto mt-[5vh]'></div>

                {/* section : how can I help - skipped  */}

                {/* section : testimonials - skipped  */}

                <GetInTouch conclusion={HomeData[4]} />

                <div className='max-md:pt-[10vh] pt-30 '>
                    <Footer footer={HomeData[5]} />
                </div>



            </div>


            {/* </div> */}



            <style jsx>{`
 @import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@200..800&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');



 .rubik{
 
//  font-family: "Rubik", sans-serif;
font-family: "Rubik", sans-serif;
font-weight: 450;
 }
 `}</style>


        </div>
    )
}

export default Home