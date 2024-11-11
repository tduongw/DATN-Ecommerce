import React, { useContext, useState } from "react";
import Logo from "./Logo";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart, FaHome, FaPhoneAlt } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { setUserDetails } from "../store/userSlice";
import ROLE from "../common/role";
import Context from "../context";
import { IoIosLogOut, IoIosListBox } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import CategoryList from "./CategoryList";

const Header = () => {
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  const [menuDisplay, setMenuDisplay] = useState(false);
  const context = useContext(Context);
  const navigate = useNavigate();
  const searchInput = useLocation();
  const URLSearch = new URLSearchParams(searchInput?.search);
  const searchQuery = URLSearch.getAll("q");
  const [search, setSearch] = useState(searchQuery);

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: "include",
    });

    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      navigate("/");
    }

    if (data.error) {
      toast.error(data.message);
    }
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);

    if (value) {
      navigate(`/search?q=${value}`);
    } else {
      navigate("/search");
    }
  };

  return (
    <header className="h-16 shadow-md bg-white fixed w-full z-40">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div className="flex items-center">
          <Link to="/">
            <Logo w={90} h={50} />
          </Link>

          {/* Home and List */}
          <div className="flex flex-col items-center mx-4 cursor-pointer">
            <Link to="/" className="text-3xl">
              <FaHome />
            </Link>
            <div className="text-center text-sm font-bold text-gray-800">
              Home
            </div>
          </div>

          {/* List Product  */}
          <div className="flex flex-col items-center mx-4 cursor-pointer">
            <Link to="" className="text-3xl">
              <IoIosListBox />
              <div className="text-center text-sm font-bold text-gray-800">
                List
              </div>
            </Link>
          </div>
        </div>

        {/* Search box */}
        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2">
          <input
            type="text"
            placeholder="Search product here..."
            className="w-full outline-none"
            onChange={handleSearch}
            value={search}
          />
          <div className="text-lg min-w-[50px] h-8 bg-[#222] flex items-center justify-center rounded-r-full text-white">
            <GrSearch />
          </div>
        </div>

        {/* User */}
        <div className="flex items-center gap-7 mr-10">
          {/* Phone */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl cursor-pointer flex items-center">
              <FaPhoneAlt />
            </Link>
            <div className="flex flex-col ml-2">
              <div className="text-sm font-bold text-gray-800">Call me</div>
              <div className="text-sm font-medium text-gray-600">
                0829618163
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center mr-7">
            <IoLocation className="text-2xl" />
            <div className="text-xs font-medium text-gray-950">Nearyou</div>
          </div>

          {/* User Profile */}
          <div className="relative flex justify-center">
            {user?._id && (
              <div
                className="text-3xl cursor-pointer relative flex justify-center"
                onClick={() => setMenuDisplay((preve) => !preve)}
              >
                {user?.profilePic ? (
                  <img
                    src={user?.profilePic}
                    className="w-10 h-10 rounded-full"
                    alt={user?.name}
                  />
                ) : (
                  <FaRegCircleUser />
                )}
              </div>
            )}
            {menuDisplay && (
              <div className="absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded">
                <nav>
                  {user?.role === ROLE.ADMIN && (
                    <Link
                      to="/admin-panel/all-products"
                      className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2"
                      onClick={() => setMenuDisplay((preve) => !preve)}
                    >
                      Admin Panel
                    </Link>
                  )}
                </nav>
              </div>
            )}
          </div>

          {/* Cart */}
          {user?._id && (
            <Link to="/cart" className="text-2xl relative">
              <span>
                <FaShoppingCart />
              </span>
              <div className="bg-[#FF0000] text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
                <p className="text-sm">{context?.cartProductCount}</p>
              </div>
            </Link>
          )}

          {/* Logout/Login */}
          <div>
            {user?._id ? (
              <div className="flex justify-center">
                <button
                  onClick={handleLogout}
                  className="flex flex-col items-center px-3 py-1 rounded-full text-white bg-[#222] hover:bg-[#444] h-9"
                >
                  <IoIosLogOut />
                  <div className="text-xs">Logout</div>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-3 py-1 rounded-full text-white bg-[#222] hover:bg-[#444] mr-5"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
