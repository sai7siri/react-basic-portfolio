import React from 'react';
import SkillSet from "./SkillSet.jsx"

function Skills() {
  return (
    <section id='about' className='dark:bg-slate-600 dark:text-secondary'>
   
      <div className='container md:w-[75%] py-12 sm:py-20'>
      <div className='grid items-center grid-cols-1 sm:grid-cols-2 gap-4'>
      {/* skills */}
      <div className=''>
         <SkillSet skill="HTML" percentage="90%"/>
         <SkillSet skill="CSS" percentage="95%"/>
         <SkillSet skill="TAILWIND" percentage="80%"/>
      </div>
   
      {/* textof skills */}
      <div className='relative font-bold'>

         <div className='flex items-center justify-center text-6xl sm:text-8xl text-black/5'>SKILLS</div>

         <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-6xl'>Skills</h1>
      </div>
   </div>
      </div>
   
      
    </section>
  )
}

export default Skills