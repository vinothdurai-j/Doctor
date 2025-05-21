import React, { useContext, useState } from 'react';
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const NavBar = () => {
  const navigate = useNavigate();


  const [showMenu, setShowMenu] = useState(false);
  const {token, setToken,userData} = useContext(AppContext)

  const Logout = () =>{

    setToken(false)
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img onClick={()=>navigate("/")} className="w-44 cursor-pointer" src={assets.logo} alt="logo" />

      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to={'/'}>
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={'/doctors'}>
          <li className="py-1">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={'/about'}>
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={'/contact'}>
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
        <div className='flex items-center justify-center'><a className='border border-blue-800 px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-all' href="https://adminpanel-doctorappointment.netlify.app" target='_blank'>Admin Pannel</a></div>
      {token && userData ? (
        <div className="flex items-center gap-1 cursor-pointer group relative">
          <img src={userData.image} alt="profile" className="w-8 rounded-full " />
          <img src={assets.dropdown_icon} alt="dropdown" className="w-2.5" />
          <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
            <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
              <p
                onClick={() => navigate('/my-profile')}
                className="hover:text-black cursor-pointer"
              >
                My Profile
              </p>
              <p
                onClick={() => navigate('/my-appointments')}
                className="hover:text-black cursor-pointer"
              >
                My Appointment
              </p>
              <p
                onClick={Logout}
                className="hover:text-black cursor-pointer"
              >
                Logout
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/login')}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create account
          </button>
        </div>
      )}
      <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="menu" />

      {/* mobile menu  */}
      
      <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'}   md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
        <div className='flex items-center justify-between px-5 py-6'>
          <img className='w-36' src={assets.logo} alt="logo" />
          <img  className='w-7' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="cross" />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <NavLink  onClick={()=>setShowMenu(false)} to="/"><p className={'px-4 py-2 rounded inline-block'}>HOME</p></NavLink>
          <NavLink  onClick={()=>setShowMenu(false)} to="/doctors"><p className={'px-4 py-2 rounded inline-block'}>ALL DOCTORS</p></NavLink>
          <NavLink onClick={()=>setShowMenu(false)} to="/about"><p className={'px-4 py-2 rounded inline-block'}>ABOUT</p></NavLink>
          <NavLink  onClick={()=>setShowMenu(false)} to="/contact"><p className={'px-4 py-2 rounded inline-block'}>CONTACT</p></NavLink>
        </ul>

      </div>
    </div>
  );
};

export default NavBar;
