import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Menu, Transition } from "@headlessui/react";
import arrowDown from "assets/svgs/arrow-down.svg";
import {
  SortAscendingIcon,
  SortDescendingIcon,
  SwitchVerticalIcon,
} from "@heroicons/react/outline";

const SortMenuPopover = ({ sort, onChangeSortOrder }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className="hidden sm:block">
        <Menu.Button className="flex flex-row items-center justify-center gap-4 border border-gray-300 px-8 py-3 text-primary rounded-lg">
          Sort{" "}
          {(() => {
            switch (sort) {
              case 0:
                return "a A - Z";
              case 1:
                return "a Z - A";
              default:
                return "";
            }
          })()}
          <img src={arrowDown} alt="Arrow down" className="h-2" />
        </Menu.Button>
      </div>
      <div className="sm:hidden">
        <Menu.Button className="flex flex-row items-center justify-center gap-4 border border-gray-300 px-4 sm:px-8 py-3 text-primary rounded-lg">
          <SwitchVerticalIcon className="w-8" />
          <img src={arrowDown} alt="Arrow down" className="h-1.5" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`
                  ${sort === 0 && "text-primary"}
                  ${active && "bg-primary text-white"} 
                  group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  onClick={(evt) => onChangeSortOrder(evt, 0)}
                >
                  <SortAscendingIcon
                    className="w-5 h-5 mr-2"
                    aria-hidden="true"
                  />
                  A - Z
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`
                  ${sort === 1 && "text-primary"}
                  ${active && "bg-primary text-white"} 
                  group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  onClick={(evt) => onChangeSortOrder(evt, 1)}
                >
                  <SortDescendingIcon
                    className={`w-5 h-5 mr-2`}
                    aria-hidden="true"
                  />
                  Z - A
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

SortMenuPopover.propTypes = {
  sort: PropTypes.number,
  onChangeSortOrder: PropTypes.func,
};

export default SortMenuPopover;
