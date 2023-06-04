import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {motion} from 'framer-motion';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {useState} from 'react'

function Project({project}) {
  return (
    <div className='border-dotted border-4   flex flex-col gap-1 text-center'>
         <JumboTron images = {project.images}/>
        <div className='flex mx-auto gap-2'>
            <h1 className=' text-xl font-navigation'>{project.name}</h1>
            <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
               >
            <a href = {project.githubUrl} target = '_blank' rel='noreferrer'>
                <GitHubIcon/>
            </a>
            </motion.div>
            <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
               >
            <a href={project.liveUrl} target = '_blank' rel='noreferrer'>
                {project.isLive?
                    <OpenInNewIcon/>
                    :false}
            </a>
            </motion.div>
        </div>
        <p className=' font-about font-light text-lg tablet: mx-20 desktop:ml-40 desktop:mr-40'>{project.description}</p>
    </div>
  )
}



const JumboTron = ({images,name}) => {
  const [currentImageIndex, setCurrentImageIndex] =   useState(1);
  
  const moveToPrevImage = () => {
      if (currentImageIndex === 0) {
        setCurrentImageIndex(images.length - 1);
      }
      else {
        setCurrentImageIndex(currentImageIndex - 1)
      }
  }

  const moveToNextImage = () => {
    if (currentImageIndex === (images.length - 1)) {
      setCurrentImageIndex(0);
    }
    else {
      setCurrentImageIndex(currentImageIndex + 1)
    }
}
  return (
      <div className='flex justify-around'>
        <button onClick={moveToPrevImage}>
          <ArrowBackIosNewIcon/>
        </button>
        <img src = {images[currentImageIndex]} alt = {name} className = 'tablet:w-2/3 desktop:w-1/4'/>
        <button onClick={moveToNextImage}>
          <ArrowForwardIosIcon/>
        </button>
      </div>
  );
}

export default Project;


