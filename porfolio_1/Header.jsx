import React, { useEffect, useState } from 'react';
import Nav from "./Nav";
import NavMobile from "./NavMobile"


function Header() {

  const [shadow , setShadow] = useState(false);

  

    useEffect( ()=> {
      window.addEventListener( "scroll" , ()=>{
        
        if(window.scrollY > 70){
          setShadow(true)
        } else {
          setShadow(false)
        }
      }, [])
    })

    const navLinks = [
      {
        name : "Home",
        path : "main"
      },
      
      {
        name : "About",
        path : "about"
      },
      {
        name : "Service",
        path : "service"
      },
      {
        name : "Contact",
        path : "contact"
      }
    ]

  return (
    <section className={`${shadow ? "bg-secondary shadow-md" : "border-b"} py-4 fixed w-full top-0 z-10 dark:bg-slate-900 dark:text-white`} >

          <div className='container flex gap-4 items-center justify-between' id='home'>
            <div className='text-2xl text-orange-600 font-medium'>portfolio</div>

            {/* navbarMobile */}
            <NavMobile links ={navLinks}/>

            {/* nav */}
            <Nav links={navLinks}/>
          </div>
      </section>
  )
}

export default Header