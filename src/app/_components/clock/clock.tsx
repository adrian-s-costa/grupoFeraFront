import { FaRegClock } from "react-icons/fa";

export default function ClockComponent(){
    return <div className="flex">
        <FaRegClock className="text-gray-400 text-[17px]"/>
        <p className="ml-1 text-sm font-bold text-gray-400">5h30m</p>
    </div>
}