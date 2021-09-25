import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function NavTab({link, toggle, set, pages=[]}) {

    const options = pages.length > 0
    && pages.map((item,i) => {
        return(
            <Link id={i} to={"/" + item.path} className="w-11/12 text-xs font-bold border-b-2 border-black h-6 pt-1 items-center text-center">{item.name}</Link>
        )
    });

    return(
        <Link id="RouterNavLink" className="NavTab" to={"/" + link} onMouseEnter={() => set(true)} onMouseLeave={() => set(false)}>
            {link}
            {toggle &&
            <div className="pt-2 pb-2 flex flex-col absolute top-16 left-5 items-center w-64 bg-gray-600 dark:bg-gray-200 rounded-3xl">
                {options}
            </div> }  
        </Link>
    )
};

NavTab.propTypes = {
    link: PropTypes.string.isRequired,
    pages: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
};

export default NavTab;