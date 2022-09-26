import { FC } from "react";
import { NavLink } from "react-router-dom";

export const Navbar: FC = () => {
  return (
    <div className="bg-slate-900 px-10">
      <div className="flex justify-end ">
        {[
          ["Home", "/"],
          ["Favourite", "/favourite"],
          ["Add Product", "/add/product"],
        ].map(([title, url]) => (
          <NavLink to={url} className="text-decoration-none" key={title}>
            <div className="rounded-none px-3 py-3 text-slate-100 font-medium hover:bg-slate-400 hover:text-slate-900">
              {title}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
