
import React from 'react';
import {AiFillLayout} from "react-icons/ai"
import {MdOutlinePhoneAndroid } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri"
import {MdSecurity} from "react-icons/md"

function Service() {

   const Services = [
      {
        name: "UX research",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laudantium beatae quidem.",
        image: "https://picsum.photos/200/300",
        icon: <AiFillLayout className="text-4xl" />,
        bgColor: "bg-blue-500/70",
      },
      {
        name: "App Development",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laudantium beatae quidem.",
        image: "https://picsum.photos/200/301",
        icon: <MdOutlinePhoneAndroid className="text-4xl" />,
        bgColor: "bg-lime-500/70",
      },
      {
        name: "Web App Development",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laudantium beatae quidem.",
        image: "https://picsum.photos/200/302",
        icon: <RiComputerLine className="text-4xl" />,
        bgColor: "bg-fuchsia-500/70",
      },
      {
        name: "Security",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laudantium beatae quidem.",
        image: "https://picsum.photos/200/303",
        icon: <MdSecurity className="text-4xl" />,
        bgColor: "bg-orange-500/70",
      },
    ];
      return (
    <section id='service' className='dark:bg-slate-800 dark:text-secondary'>

      <div className='container md:w-[80%] py-8 '>

      <div className='flex flex-col items-center text-center'>
         {/* texts */}
         <p className='font-bold text-3xl border-b-2 inline-block border-orange-400'>Services</p>

         <div className='text-gray-400 text-sm mt-2 lg:max-w-[800px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus optio necessitatibus ex perspiciatis voluptatem, quo quisquam odio, nemo aperiam recusandae,</div>
          
               
         </div>
            {/* boxes */}

            <div className='grid items-center grid-cols-1 md:grid-cols-2 gap-6 mt-4'>
            
                  {
                    Services.map ( (item)=> (
                     <div key={item.name} className={`border p-8 rounded-md bg-center bg-cover bg-no-repeat bg-blend-overlay ${item.bgColor}`}
                     style={{backgroundImage : `url(${item.image})`}}
                     >
                        <p className=''>{item.icon}</p>
                        <p className='font-bold text-lg'>{item.name}</p>
                        <p className='text-sm text-gray-900'>{item.description}</p>
                     </div>
                    )) 
                  }
             
            </div>


      </div>

    </section>
  )
}

export default Service