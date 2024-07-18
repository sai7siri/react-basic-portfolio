import React from 'react'

function About() {
  return (
    <section className=' dark:bg-slate-600 dark:text-secondary' id='about'>
         <div className='container md:w-[70%] sm:py-16 py-10'>

            <div className='grid items-center grid-cols-1 sm:grid-cols-2 gap-4'>
               {/* textabout */}

               <div className='relative font-bold items-center flex justify-center'>
                  <div className='text-6xl sm:text-8xl  text-black/5 '>ABOUT</div>

                  <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-6xl'>About</div>
               </div>

               {/* textbuttons */}
               <div className=''>
                  <div className=' py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga accusamus enim quae libero aperiam debitis esse repellat repellendus adipisci doloremque! Architecto totam aperiam ratione minima.</div>

                  <div className='py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga accusamus enim quae libero aperiam debitis esse repellat repellendus adipisci doloremque! Architecto totam aperiam ratione minima.</div>

                  <div className='flex justify-around'>
                     <button className='py-1 px-2 bg-orange-500 text-white rounded-md'>Download Resume </button>
                     <button className='py-1 px-2 text-orange-500 bg-white rounded-md border-2 border-orange-500 hover:bg-orange-500 hover:text-white'>Contact</button>
                  </div>
               </div>
            </div>
         </div>
    </section>
  )
}

export default About