"use client"

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Home from "../home/page";
import Streaming from "../streaming/page";
import Profile from "../profile/page";
import { LuAirplay, LuHeart } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import { RiHome5Line } from "react-icons/ri";



export default function HomeTab(){
  return(
    <Tabs>
      <TabPanels>
        <TabPanel>
          <Home/>
        </TabPanel>
        <TabPanel>
          <Streaming/>
        </TabPanel>
        <TabPanel>
          <Profile/>
        </TabPanel>
      </TabPanels>

      <TabList className="fixed z-10 h-10 bg-white bottom-0 w-full justify-around">
        <Tab><RiHome5Line className="text-2xl"/></Tab>
        <Tab><LuAirplay className="text-2xl"/></Tab>
        <Tab><IoPersonOutline className="text-2xl"/></Tab>
      </TabList>
    </Tabs>
  )
} 
