
import React from 'react'

function SkillSet({skill , percentage}) {

   console.log(skill , percentage)

  return (
    <section>
      <div className='mt-2 space-y-2'>
         <div className='flex justify-between'>
            <h1 className='font-medium'>{skill}</h1>  
            <h1 className='font-medium'>{percentage}</h1>
         </div>

         <div className='w-full h-2 rounded-full bg-slate-300 '>
            <div className='h-2 bg-orange-500 rounded-full' style={{width : percentage}} >

            </div>
         </div>

      </div>

    </section>
  )
}

export default SkillSet