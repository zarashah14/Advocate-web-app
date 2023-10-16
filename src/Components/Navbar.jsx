import React from 'react';
import Container from '../MyContainer/Container';
import Logo from '../assests/Logo';
import Vec from '../assests/Vec';
//import { Link } from 'react-router-dom';


function Navbar(){
                
    return(  

           <Container>
            <nav className='flex h-109 flex-shrink-0 text-light px-20'>
                <div className='w-122 h-75.93 ml-40 mt-2 mb-2'>
                  <Logo/>
                </div>
                  <ul className='flex justify-end space-x-4 pl-60'>
                  <li className='text-[#1F1C1B] font-normal text-[18px] leading-[170%] my-8 ml-10'>O mnie</li>
                     
                  <li className='text-[#1F1C1B] font-normal text-[18px] leading-[170%] my-8 ml-10'>Zakres usług
                    <Vec/>
                  </li>
                  <li className='text-[#1F1C1B] font-normal text-[18px] leading-[170%] my-8 ml-10'>
                   Honorarium  </li>
                  <li className='text-[#1F1C1B] font-normal text-[18px] leading-[170%] my-8 ml-10'>
                   Porady Online</li>

                 
                  <li className='text-[#1F1C1B] font-normal text-[18px] leading-[170%] my-8 ml-10'>Blog</li>
                  <button className='bg-dark inline-flex p-6 px-25 items-start gap-10 my-2'>
                    <p className=' text-white font-normal text-[18px] leading-[170%]'>Kontakt</p></button> 
                      

                  </ul>
                 </nav>
                </Container>
    
    
    );
}
export default Navbar;