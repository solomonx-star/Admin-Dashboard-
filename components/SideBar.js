import React from "react";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="bg-[#081A51] h-screen w-72 pt-8 p-7 ">
      <h1 className="text-white text-bold text-2xl">Admin DashBoard</h1>
      <nav className="">
        <ul className="mt-11">
          <div className="space-y-5">
            <li className=" hover:bg-light-white hover:pl-2  hover:w-72">
              <Link href="/">
                <span className="text-white hover:pl-2 hover:p-3 ">
                  Languages
                </span>
              </Link>
            </li>
            <li className=" hover:bg-light-white hover:pl-2 hover:w-72">
              <Link href="/Terms">
                <span className="text-white  hover:p-3">Terms</span>
              </Link>
            </li>
            <li className=" hover:bg-light-white hover:pl-2 hover:w-72">
              <Link href="/Users">
                <span className="text-white hover:p-3">Users</span>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
