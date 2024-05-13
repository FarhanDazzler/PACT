import { useMsal } from "@azure/msal-react";
import { FaFileAlt } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { RiAuctionLine } from "react-icons/ri";
import ButtonAtom from "../../atoms/Button";

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
          <div className="hidden md:block">
            <div className="ml-8 flex items-center ">
              <ButtonAtom
                label={"Log out"}
                onClick={handleLogout}
                overrideClass={
                  "text-black bg-gold hover:bg-gold focus:ring-black focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-white dark:focus:ring-black"
                }
              ></ButtonAtom>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
