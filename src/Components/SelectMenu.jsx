import React from "react";
import PropTypes from "prop-types";

function SelectMenu({
  items = [],
  desired = "",
  update = () => {},
  title = "Please Select",
  bgcolor = "bg-blue-500 dark:bg-blue-900",
  textcolor = "text-white dark:text-gray-200",
}) {
  const options =
    items.length > 0 &&
    items.map((item, i) => {
      return (
        <option key={i} value={item.id}>
          {item.name}
        </option>
      );
    });

  return (
    <div className="flex flex-col w-full h-16 items-center justify-center">
      <label className="flex font-bold text-lg text-center pt-2 text-white dark:text-gray-100">
        {title}
      </label>
      <select
        value={desired}
        className={
          "flex w-3/4 border-2 rounded-3xl focus:outline-none border-white text-center" +
          textcolor +
          bgcolor
        }
        onChange={(e) => update(e.target.value)}
      >
        <option value="" className="hidden" disabled>
          {" "}--select an option--{" "}
        </option>
        {options}
      </select>
    </div>
  );
}

SelectMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  desired: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  bgcolor: PropTypes.string,
  textcolor: PropTypes.string,
};

export default SelectMenu;
