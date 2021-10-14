import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from "./Logo";

const NavBar = () =>{
    return(
        <nav className="relative w-full h-12"> 
            <Logo/>
            <ul className="hidden sm:flex absolute flex-row w-1/2 h-full top-0 right-1/4 text-white justify-center items-center">
                <li className="group flex h-full items-center" tabIndex="0">
                    <NavLink activeClassName="underline" to="/ChapterFive"> Chapters</NavLink>
                    <ul className="flex flex-col top-10 left-1/2 absolute opacity-0 transition ease-in-out duration-300 transform group-hover:translate-y-4 group-hover:opacity-100 group-focus:opacity-100 group-focus:translate-y-4 dark:bg-white dark:text-black rounded-xl w-32 focus-within:opacity-100 focus-within:translate-y-4">
                        <li className="flex justify-center">
                            <NavLink activeClassName="underline" to="/ChapterFive">Sub Link 1</NavLink>
                        </li>
                        <li className="flex justify-center">
                            <NavLink activeClassName="underline" to="/ChapterFive">Sub Link 2</NavLink>
                        </li>
                    </ul>
                </li>
                <li className="flex">

                </li>
            </ul>
        </nav>
    )
}

export default NavBar;