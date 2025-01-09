//  import React from 'react'
import { Link } from "react-router-dom";
import "../../App.css";
import { assets } from "../../assets/assets";


import CountryDropdown from "../ContryDropDown/CountryDropdown";
import { Button } from "@mui/material";
import { FaRegUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Search from "../Header/SearchBox/Search"

const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-purple">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              Due to the <b>covid 19 </b> epidemic, order may be processed with
              a slight delay
            </p>
          </div>
        </div>
        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex  align-items-center  col-sm-2">
                <Link to={"/"}>
                  <img src={assets.logo} alt="logo" />
                </Link>
              </div>
              <div className="col-sm-10 d-flex align-items-center part2 ">
                <CountryDropdown />

                {/* //header search */}
               <Search/>
                <div className="part3 d-flex align-items-center ml-auto ">
                  <Button className="circle mr-3">
                    <FaRegUser />
                  </Button>
                  <div className="ml-auto cartTab d-flex align-items-center">
                    <span className="price">$3.29</span>
                    <div className="position-relative ml-2">
                      <Button className="circle ">
                        <FaShoppingCart />
                      </Button>
                      <span className="count d-flex align-item-center justify-content-center">
                        1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-sm-3 navpart1"></div>
            <div className="col-sm-9 navPart2"></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
