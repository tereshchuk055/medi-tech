import React from 'react';

import logo from "../../images/logo.png";

export default function Logo () {
    return (
        <div className="flex items-center m-2">
            <img src={logo} alt="Логотип" width={48} height={48} />
            <span className="text-2xl font-bold text-lime-400  ">MediTech</span>
        </div>
    );
}

