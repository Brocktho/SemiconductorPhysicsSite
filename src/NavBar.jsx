import React from 'react';
import NavTab from './NavTab';

function NavBar({chapters=[]}) {

    const Tabs = chapters.length > 0 
    && chapters.map((item,i) => {
        return(
            <NavTab key={item.name} link={item.name} toggle={item.toggle} set={item.set} pages={item.options}/>
        )
    });


    return(
        <div className='flex flex-row w-full h-16 items-center justify-around bg-gray-200 dark:bg-black dark:text-white '>
            {Tabs}
        </div>
    )
}

export default NavBar