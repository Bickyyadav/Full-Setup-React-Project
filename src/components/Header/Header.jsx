//  import React from 'react'
import { Link } from "react-router-dom";
import "../../App.css";
import { assets } from "../../assets/assets";

import { CiSearch } from "react-icons/ci";
import CountryDropdown from "../ContryDropDown";
import { Button } from "@mui/material";
import { FaRegUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-purple">
          <div className="container">
            <p>
              Due to the <b>covid 19 </b> epidemic, order may be processed with
              a slight delay
            </p>
          </div>
        </div>
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex  align-items-center  col-sm-2">
                <Link to={"/"}>
                  <img src={assets.logo} alt="logo" />
                </Link>
                <div className="col-sm-10 d-flex align-items-center part2">
                  <span className="ml-auto">
                    <CountryDropdown />
                  </span>
                  {/* //header search */}
                  <div className="insidesearchicon">
                    <div className="headerSearch ml-3 mr-3">
                      <input type="text" placeholder="Search For Product..." />
                      <Button>
                        <CiSearch />
                      </Button>
                    </div>
                  </div>
                  <div className="part3 ">
                    <Button className="circle">
                      <FaRegUser />
                    </Button>
                    <span className="letter">$3.29</span>
                    <div className="part3 ">
                      <button className="circle  ">
                        <FaShoppingCart />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-sm-3 navpart1">

            </div>
            <div className="col-sm-9 navPart2">
              
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
