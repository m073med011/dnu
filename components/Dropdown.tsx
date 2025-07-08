// Dropdown.tsx

import React from "react";

interface DropdownItem {
  label: string;
  customStyle?: string;
}

interface DropdownColumn {
  column: string;
  items: string[];
}

interface DropdownProps {
  label: string;
  dropdown: (DropdownItem | DropdownColumn)[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, dropdown }) => {
  return (
    <div className="absolute bg-white -right-30 top-20 mt-2 w-[760px] h-[350px]  z-50">
      {label === "عن الجامعة" ? (
        // Special dropdown for "عن الجامعة"
        <div className="flex text-right">
          {dropdown?.map((column, idx) => {
            if ("column" in column) {
              return (
                <div key={idx} className="flex flex-col w-[50%] p-6">
                  <span className="font-bold text-[#b8b8b8] text-lg mb-3 ">
                    {column.column}
                  </span>
                  <hr className="border-t border-[#b8b8b8] mb-3" />
                  <ul className="space-y-3 font-bold">
                    {column.items.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="text-base font-medium break-words text-gray-700 hover:text-blue-600 hover:underline cursor-pointer"
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
            return null;
          })}
        </div>
      ) : (
        // Default dropdown for other items
        <div className="flex gap-10 py-4 px-6 text-right">
          {dropdown?.map((column, idx) => {
            if ("column" in column) {
              return (
                <div key={idx} className="flex flex-col w-[50%]">
                  <span className="font-bold text-black text-lg mb-3">
                    {column.column}
                  </span>
                  <hr className="border-t border-gray-300 mb-3" />
                  <ul className="space-y-2">
                    {column.items.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="text-sm text-gray-700 hover:text-black hover:underline cursor-pointer"
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            } else {
              return (
                <ul key={idx} className="flex flex-col py-4 px-6 text-right">
                  {column.label && (
                    <li
                      key={idx}
                      className={`text-sm cursor-pointer py-2 ${column.customStyle}`}
                    >
                      {column.label}
                    </li>
                  )}
                </ul>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

// LifeUniversityDropdown.tsx

interface DropdownItem {
  label: string;
  customStyle?: string;
}

interface LifeUniversityDropdownProps {
  dropdown: DropdownItem[];
}

const LifeUniversityDropdown: React.FC<LifeUniversityDropdownProps> = ({
  dropdown,
}) => {
  return (
    <div className="absolute  top-20 mt-2 w-[160px] h-[150px] border bg-white z-50">
      <div className=" gap-10 py-4 px-6 text-right">
        {dropdown.map((item, idx) => (
          <ul key={idx} className=" py-4 px-6 text-right">
            {item.label && (
              <li
                key={idx}
                className={`text-sm cursor-pointer py-2 ${item.customStyle}`}
              >
                {item.label}
              </li>
            )}
          </ul>
        ))}
      </div>
    </div>
  );
};

export { LifeUniversityDropdown, Dropdown };
