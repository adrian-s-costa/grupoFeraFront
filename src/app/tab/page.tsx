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
  const [tabIndex, setTabIndex] = useState(0)

  useEffect(()=>{

  }, [])

  const handleTabsChange = (index: number) => {
    setTabIndex(index)
  }


  return(
    <Tabs defaultIndex={options ? Number(options) : 0 } index={tabIndex} onChange={handleTabsChange}>
      <TabPanels>
        <TabPanel>
          <Home setTabIndex={setTabIndex} />
        </TabPanel>
        <TabPanel>
          <Streaming/>
        </TabPanel>
        <TabPanel>
          <Profile/>
        </TabPanel>
      </TabPanels>

      <TabList className="fixed z-10 h-14 bg-white bottom-0 w-full justify-around">
        <Tab className="flex flex-col">{tabIndex == 0 ? 
          <RiHome5Fill className="text-2xl text-black dark:text-black"/> 
          : <RiHome5Line className="text-2xl text-black dark:text-black"/>}
          <p className="text-black text-[0.5rem]">HOME</p>
        </Tab>
        <Tab className="flex flex-col">{tabIndex == 1 ? <PiAirplayFill className="text-2xl text-black dark:text-black"/> : <LuAirplay className="text-2xl text-black dark:text-black"/>} <p className="text-black text-[0.5rem]"> STREAMING </p> </Tab>
        <Tab className="flex flex-col">{tabIndex == 2 ? <IoPerson className="text-2xl text-black dark:text-black"/> : <IoPersonOutline className="text-2xl text-black dark:text-black"/>} <p className="text-black text-[0.5rem]"> PERFIL </p> </Tab>
      </TabList>
    </Tabs>
  )
} 
