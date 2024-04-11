import { Menu } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function SideBar() {
  const navigate = useNavigate();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <div className="h-full justify-center items-center flex-col flex text-3xl gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              (isActive
                ? "text-red-400"
                : "text-black dark:text-white hover:underline") +
              " capitalize  decoration-2 underline-offset-4"
            }
            onClick={() => {
              navigate("/");
              window.location.reload();
            }}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              (isActive
                ? "text-red-400"
                : "text-black dark:text-white hover:underline") +
              " capitalize  decoration-2 underline-offset-4"
            }
            onClick={() => {
              navigate("/about");
              window.location.reload();
            }}
          >
            about
          </NavLink>
          <NavLink
            to="/work"
            className={({ isActive }) =>
              (isActive
                ? "text-red-400"
                : "text-black dark:text-white hover:underline") +
              " capitalize  decoration-2 underline-offset-4"
            }
            onClick={() => {
              navigate("/work");
              window.location.reload();
            }}
          >
            work
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              (isActive
                ? "text-red-400"
                : "text-black dark:text-white hover:underline") +
              " capitalize  decoration-2 underline-offset-4"
            }
            onClick={() => {
              navigate("/contact");
              window.location.reload();
            }}
          >
            contact
          </NavLink>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default SideBar;
