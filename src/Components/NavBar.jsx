import React from "react";
import NavTab from "./NavTab";

function NavBar({ chapters = [], close }) {
  const Tabs =
    chapters.length > 0 &&
    chapters.map((item, i) => {
      return (
        <NavTab
          key={item.name}
          id={item.name}
          link={item.name}
          toggle={item.toggle}
          set={item.set}
          pages={item.options}
          close={close}
        />
      );
    });

  return (
    <nav className="flex flex-row w-full h-16 bg-gray-200 dark:bg-black dark:text-white ">
      <ul className="flex flex-row w-full h-full items-center justify-around">
        {Tabs}
      </ul>
    </nav>
  );
}

export default NavBar;
