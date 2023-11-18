import Image from "next/image";
import logo from "../assets/logo.svg";
import "../styles/hamburger.css"
import Link from "next/link";

export default function Header() {
  return (
    <div className="px-6 my-9 w-full flex justify-center z-[99] items-center">
      <Link href={ "/" } className="z-[99]"><Image src={logo} /></Link>
      {/* <button class="hamburger !pr-0" type="button">
        <span class="hamburger-box ">
          <span class="hamburger-inner"></span>
        </span>
      </button> */}
    </div>
  );
}
