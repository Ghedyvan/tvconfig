import Link from "next/link";

export default function Buttons(props) {
    return(
        <Link href={props.link} className="max-w-[180px] flex justify-center rounded-3xl w-full py-[12px] bg-red-600">{props.text}</Link>
    )
}