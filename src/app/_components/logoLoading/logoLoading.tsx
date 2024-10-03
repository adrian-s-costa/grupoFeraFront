import Image from "next/image"

export default function LogoLoading(){

    return <>
        <div className="animate-[wiggle_1s_ease-in-out_infinite] h-screen w-screen fixed bg-black z-10 relative flex items-center justify-center">
        <Image 
        className="w-auto h-auto pb-10"
        src={'https://res.cloudinary.com/dmo7nzytn/image/upload/v1727832524/n1_1_1_wo6k0x.png'}
        alt="Logo"
        width={200}
        height={80}
        priority={true}
      ></Image>
        </div>
    </>
}