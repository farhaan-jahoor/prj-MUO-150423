import React, { Fragment } from "react";

import "../resources/styles/Header.scss";

import LogoMutiamo from "../resources/img/logo-mutuiamo.webp";
import PhoneIcon from "../resources/img/phone-ico.svg";

function Header() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mainHeader w-full">
        <div className="col-span-1 text-center md:col-span-1">
            {/* TBA */}
        </div>

        {/* Logo */}
        <div className="col-span-1 flex items-center justify-center md:col-span-1">
            <img src={LogoMutiamo} alt="Logo" className="headerLogo mx-auto" />
        </div>

        {/* Contact */}
        <div className="col-span-1 flex items-center justify-center md:col-span-1">
            <div className="text-center md:ml-14">
            <p className="mb-0 pb-0 text-xs fj-text-lgrey">Serve aiuto?</p>
            <div className="flex items-center mt-0 pt-0 fj-text-dgrey text-base font-semibold">
                <img src={PhoneIcon} className="pr-1" />
                <p className="p-1">06 4006 0565</p>
            </div>
            </div>
        </div>
    </div>
  );
}

export default Header;
