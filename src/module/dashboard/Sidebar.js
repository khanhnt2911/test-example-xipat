import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const sidebarLink = [
    {
      title: "Dashboard",
      url: "/dashboard",
    },
    {
      title: "Posts Management",
      url: "/post-manage",
    },
    {
      title: "Settings",
      url: "/settings",
    },
  ];
  return (
    <div>
      {sidebarLink.map((link) => {
        return (
          <NavLink to={link.url} key={link.title} className="flex gap-3">
            {link.title}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;
