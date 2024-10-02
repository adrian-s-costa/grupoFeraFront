import Image from "next/image"

export default function LogoLoading(){

    return <>
        <div className="animate-[wiggle_1s_ease-in-out_infinite] h-screen w-screen fixed bg-black z-10 relative flex items-center justify-center">
        <Image
          priority={true}
          src={"https://res.cloudinary.com/dmo7nzytn/image/upload/v1727827812/n1_1_humlwm.png"}
          width={261}
          height={446} 
          alt={"fera flix logo"}
          className="z-[11] h-[446px] w-[261px]"></Image>
        </div>
    </>
}