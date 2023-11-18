import Link from "next/link"
import Image from "next/image"
import gvlogo from "@/app/assets/GVlogo.svg"
import arrow from "@/app/assets/Icons/arrow.svg"

export default function Footer() {
    return(
        <div className="flex flex-col mainClass w-full justify-center gap-4 text-center items-center bg-red-600 mt-16">
            <Link className="mt-[32px] flex gap-2" href={ "https://www.gvinicius.com.br"} target="_blank"> gvinicius.com.br <Image src={ arrow } alt="Arrow up"/> </Link>
            <Link className="my-1" href={ "https://www.gvinicius.com.br"} target="_blank"> <Image src={ gvlogo } className="w-full max-w-[64px]" alt="Logo gvinicius"/> </Link>
            <p className="pb-6">© Copyright 2023. Todos os direitos reservados.</p>      
        </div>
    )
}