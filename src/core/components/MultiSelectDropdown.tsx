import React from "react";


export default function MultiSelectDropdown({ dropdownOptionsArray }) {
  return (
    <label className="relative">
      <input type="checkbox" className="hidden peer" />

      <div className="cursor-pointer after:content-['▼'] after:text-xs after:ml-1">
        {"Show the dropdown"}
      </div>

      <div className="hidden peer-checked:flex absolute bg-white border">
        <ol>
          {dropdownOptionsArray.map((item: string) => { return <li>{item}</li> })}
        </ol>
      </div>

    </label>
  );
}
