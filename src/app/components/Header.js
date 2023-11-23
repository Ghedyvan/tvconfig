import Image from "next/image";
import logo from "../assets/logo.svg";
import "../styles/hamburger.css"
import Link from "next/link";

export default function Header() {
  return (
    <div className="px-6 py-9 w-full flex justify-center z-[99] items-center bg-[#111827]">
      <Link href={ "/" } className="z-[99]"><Image src={logo} alt="Logo headder"/></Link>
      {/* <button class="hamburger !pr-0" type="button">
        <span class="hamburger-box ">
          <span class="hamburger-inner"></span>
        </span>
      </button> */}
    </div>
  );
}
