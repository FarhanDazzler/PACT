import { useMsal } from "@azure/msal-react";
import { FaFileAlt } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { RiAuctionLine } from "react-icons/ri";

export default function HeaderComponent() {
  const { instance, accounts, inProgress, logger } = useMsal();

  const handleLogout = () => {
    instance.logout();
  };
  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white">Logo</div>
            <div className="hidden md:block">
              <div className="ml-40 flex items-baseline space-x-6">
                <a
                  href="dashboard"
                  className="text-white hover:text-yellow-500 flex items-center px-3 py-2 rounded-md text-xs font-small font-avant"
                >
                  <MdHome size="16" className="mr-1" />
                  <span className="text-xs">Home </span>
                </a>
                <a
                  href="pr_request"
                  className="text-white hover:text-yellow-500 flex items-center px-3 py-2 rounded-md text-xs font-small font-avant"
                >
                  <FaFileAlt size="16" className="mr-1" />
                  <span className="text-xs">PR Request</span>
                </a>
                <a
                  href="gr_confirmation"
                  className="text-white hover:text-yellow-500 flex items-center px-3 py-2 rounded-md text-xs font-small font-avant"
                >
                  <FaFileAlt size="16" className="mr-1" />
                  <span className="text-xs">GR Confirmation Request</span>
                </a>
                <a
                  href="po_modify"
                  className="text-white hover:text-yellow-500 flex items-center px-3 py-2 rounded-md text-xs font-small font-avant"
                >
                  <FaFileAlt size="16" className="mr-1" />
                  <span className="text-xs">PO Modification Request</span>
                </a>
                <a
                  href="e-auction"
                  className="text-white hover:text-yellow-500 flex items-center px-3 py-2 rounded-md text-xs font-small font-avant"
                >
                  <RiAuctionLine size="16" className="mr-1" />
                  <span className="text-xs">E-Auction Request</span>
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-8 flex items-center ">
              <Button
                label={"Log out"}
                onClick={handleLogout}
                overrideClass={
                  "text-black bg-gold hover:bg-gold focus:ring-black focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-white dark:focus:ring-black"
                }
              ></Button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
