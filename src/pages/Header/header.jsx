import { useMsal } from "@azure/msal-react";
import React, { useEffect, useRef, useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LuUserCircle2 } from "react-icons/lu";
import { MdHome } from "react-icons/md";
import { RiAuctionLine } from "react-icons/ri";

export default function HeaderComponent() {
  const { instance, accounts, inProgress, logger } = useMsal();
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const popoverRef = useRef(null);

  const handleLogout = () => {
    instance.logout();
  };

  const handleClickOutside = (event) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target)) {
      setPopoverOpen(false);
    }
  };

  useEffect(() => {
    if (popoverOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popoverOpen]);

  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white justify-start">Logo</div>
            <div className="hidden md:block">
              <div className="ml-40 flex items-baseline space-x-6">
                <a
                  href="/"
                  className="text-white hover:text-yellow-500 flex items-center px-3 py-2 rounded-md text-xs font-small font-avantt"
                >
                  <MdHome size="16" className="mr-1" />
                  <span className="text-xs">Home </span>
                </a>
                <a
                  href="pr_request"
                  className="text-white hover:text-yellow-500 flex items-center px-3 py-2 rounded-md text-xs font-small font-avantt"
                >
                  <FaFileAlt size="16" className="mr-1" />
                  <span className="text-xs">PR Request</span>
                </a>
                <a
                  href="gr_confirmation"
                  className="text-white hover:text-yellow-500 flex items-center px-3 py-2 rounded-md text-xs font-small font-avantt"
                >
                  <FaFileAlt size="16" className="mr-1" />
                  <span className="text-xs">GR Confirmation Request</span>
                </a>
                <a
                  href="po_modify"
                  className="text-white hover:text-yellow-500 flex items-center px-3 py-2 rounded-md text-xs font-small font-avantt"
                >
                  <FaFileAlt size="16" className="mr-1" />
                  <span className="text-xs">PO Modification Request</span>
                </a>
                <a
                  href="e-auction"
                  className="text-white hover:text-yellow-500 flex items-center px-3 py-2 rounded-md text-xs font-small font-avantt"
                >
                  <RiAuctionLine size="16" className="mr-1" />
                  <span className="text-xs">E-Auction Request</span>
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-end items-center space-x-4">
            <div className="relative profile-section flex items-center h-full">
              <LuUserCircle2 className="text-2xl text-white hover:text-yellow-500 mr-6" />
              <div className="name-role mr-6">
                <h1 className="font-bold text-yellow-500">J, Samuel</h1>
                <h3 className="text-sm text-gray-400">Requestor</h3>
              </div>
              <button
                onClick={() => setPopoverOpen(!popoverOpen)}
                className="focus:outline-none text-white hover:text-yellow-500"
                aria-expanded={popoverOpen}
                aria-controls="popover-profile-menu"
              >
                {popoverOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
              <div
                ref={popoverRef}
                id="popover-profile-menu"
                role="menu"
                className={`absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10 transition-opacity duration-300 ${
                  popoverOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                data-popover-target="popover-bottom"
                data-popover-placement="bottom"
                style={{ top: "100%" }}
              >
                <a
                  href="/myprofile"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-yellow-600"
                  onClick={() => setPopoverOpen(false)}
                >
                  My Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-yellow-600"
                  onClick={() => {
                    setPopoverOpen(false);
                    handleLogout();
                  }}
                >
                  Sign Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
