import * as React from 'react';

export type Navs = "Home" | "Books" | "Authors"

export const Navbar = (p: {current: Navs, onClick: (current: Navs) => void}) => {

    const navs : Navs[] = ["Home", "Books", "Authors"]
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    {navs.map(nav =>
                        <li className={"nav-item " + (p.current == nav && "active")} key={nav}>
                            <a className="nav-link" onClick={() => p.onClick(nav)}>{nav}</a>
                        </li>)}
                </ul>
            </div>
        </nav>
    )
}