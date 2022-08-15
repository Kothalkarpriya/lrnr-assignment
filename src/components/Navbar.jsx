import { AiOutlineSearch } from "react-icons/ai";
import { IoMdPersonAdd } from "react-icons/io";
import { BsBell } from "react-icons/bs";
import {FaBars } from "react-icons/fa";
import "../styles/navbar.css";
import {UserOptions} from "./index";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-div">
        <div>
        <FaBars />
        </div>
        <div>
        <AiOutlineSearch className="icon"/>
        <input placeholder="dfin" className="input"/>
        </div>
      </div>
      <div className="nav-div">
        <div>
          <IoMdPersonAdd />
          <p className="para">INVITE TEAM MEMBER</p>
        </div>
        <BsBell />
        <div>
          <img src="https://picsum.photos/200" alt="profile" className="img-profile"/>
          <p className="top-badge">NEW</p>
          <p className="active-badge"></p>
        </div>
      </div>
    </nav>
  );
}
