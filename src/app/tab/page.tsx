"use client"

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Home from "../home/page";
import Streaming from "../streaming/page";
import Profile from "../profile/page";
import { LuAirplay } from "react-icons/lu";
import { IoPersonOutline, IoPerson } from "react-icons/io5";
import { RiHome5Fill, RiHome5Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation'
import { PiAirplayFill } from "react-icons/pi";



export default function HomeTab(){
  const router = useRouter();
  const searchParams = useSearchParams()
  const options = searchParams.get('options')
  const [muted, setMuted] = useState<any>(null);
  const [tabIndex, setTabIndex] = useState(0)

  // if (options){
  //   setTabIndex(1)
  // }

  useEffect(()=>{

  }, [])

  const activePage = typeof window !== "undefined" ? window.localStorage.getItem("page") : undefined;

  const handleTabsChange = (index: number) => {
    localStorage.setItem('page', index.toString());
    setTabIndex(index);
    setMuted(true);
  }

  return(
    <Tabs defaultIndex={0} index={Number(activePage)} onChange={handleTabsChange}>
      <TabPanels>
        <TabPanel>
          <Home setTabIndex={setTabIndex} muted={muted} />
        </TabPanel>
        <TabPanel>
          <Streaming setTabIndex={setTabIndex}/>
        </TabPanel>
        <TabPanel>
          <Profile/>
        </TabPanel>
      </TabPanels>

      <TabList className="fixed z-10 h-[4.5rem] bg-white bottom-0 w-full justify-around">
        <Tab className="flex flex-col">{activePage == "0" ? 
          <RiHome5Fill className="text-2xl text-black dark:text-black"/> 
          : <RiHome5Line className="text-2xl text-black dark:text-black"/>}
          <p className="text-black text-[0.5rem]">HOME</p>
        </Tab>
        <Tab className="flex flex-col">{activePage == "1" ? <PiAirplayFill className="text-2xl text-black dark:text-black"/> : <LuAirplay className="text-2xl text-black dark:text-black"/>} <p className="text-black text-[0.5rem]"> STREAMING </p> </Tab>
        <Tab className="flex flex-col">{activePage == "2" ? <IoPerson className="text-2xl text-black dark:text-black"/> : <IoPersonOutline className="text-2xl text-black dark:text-black"/>} <p className="text-black text-[0.5rem]"> PERFIL </p> </Tab>
      </TabList>
    </Tabs>
  )
} 
