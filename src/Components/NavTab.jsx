import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavTab({ key, id, link, toggle, set, pages = [] }) {
  const options =
    pages.length > 0 &&
    pages.map((item, i) => {
      const final = i + 1 === pages.length;
      var finalClass = !final && " border-b-2";
      return (
        <Link
          key={item.key}
          id={item.key}
          to={"/SemiconductorPhysicsSite/" + item.path}
          className={
            "w-11/12 text-xs font-bold border-black h-6 pt-1 items-center text-center active:underline" +
            finalClass
          }
        >
          {item.name}
        </Link>
      );
    });

  var timer;

  function exited() {
    return (timer = setTimeout(() => set(false), 1000));
  }

  function entered() {
    return set(true), clearTimeout(timer);
  }

  return (
    <Link
      key={key}
      id={id}
      className="NavTab"
      to={"/SemiconductorPhysicsSite/" + link}
      onMouseEnter={() => entered()}
      onMouseLeave={() => exited()}
    >
      {link}
      {toggle && (
        <ul className="pt-2 pb-2 flex flex-col absolute top-16 left-1/2 transform -translate-x-1/2 items-center w-3/5 lg:w-64 bg-gray-600 dark:bg-gray-200 rounded-3xl">
          {options}
        </ul>
      )}
    </Link>
  );
}

NavTab.propTypes = {
  link: PropTypes.string.isRequired,
  toggle: PropTypes.bool.isRequired,
  set: PropTypes.func.isRequired,
  pages: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default NavTab;
