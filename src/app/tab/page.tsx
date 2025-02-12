"use client"

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { LuAirplay } from "react-icons/lu";
import { IoPersonOutline, IoPerson } from "react-icons/io5";
import { RiHome5Fill, RiHome5Line, RiGraduationCapFill, RiGraduationCapLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import { PiAirplayFill } from "react-icons/pi";
import LogoLoading from "../_components/logoLoading/logoLoading";

// Carregamento dinâmico dos componentes
const Home = dynamic(() => import("../home/page"), { ssr: false });
const Streaming = dynamic(() => import("../streaming/page"), { ssr: false });
const CoursesLandpage = dynamic(() => import("../coursesLanding/page"), { ssr: false });
const Profile = dynamic(() => import("../profile/page"), { ssr: false });

export default function HomeTab() {
  const searchParams = useSearchParams();
  const options = searchParams.get("options");
  const [muted, setMuted] = useState<boolean | null>(null);
  const [logo, setLogo] = useState<boolean>(false);
  const [tabIndex, setTabIndex] = useState<number>(0);

  useEffect(() => {
    const storedPage = typeof window !== "undefined" ? localStorage.getItem("page") : "0";
    setTabIndex(Number(storedPage));
  }, []);

  const handleTabsChange = (index: number) => {
    localStorage.setItem("page", index.toString());
    setTabIndex(index);
    setMuted(true);
    if (index === 1) {
      setLogo(true);
      setTimeout(() => {
        setLogo(false);
      }, 1500);
    }
  };

  return (
    <Tabs index={tabIndex} onChange={handleTabsChange}>
      <TabPanels>
        <TabPanel>
          <Home setTabIndex={setTabIndex} muted={muted} />
        </TabPanel>
        <TabPanel>
          {logo ? <LogoLoading /> : <Streaming setTabIndex={setTabIndex} />}
        </TabPanel>
        <TabPanel>
          <CoursesLandpage />
        </TabPanel>
        <TabPanel>
          <Profile />
        </TabPanel>
      </TabPanels>

      <TabList className="fixed z-10 h-[4.5rem] bg-white bottom-0 w-full justify-around">
        <Tab className="flex flex-col">
          {tabIndex === 0 ? <RiHome5Fill className="text-2xl text-black" /> : <RiHome5Line className="text-2xl text-black" />}
          <p className="text-black text-[0.5rem]">HOME</p>
        </Tab>
        <Tab className="flex flex-col">
          {tabIndex === 1 ? <PiAirplayFill className="text-2xl text-black" /> : <LuAirplay className="text-2xl text-black" />}
          <p className="text-black text-[0.5rem]"> STREAMING </p>
        </Tab>
        <Tab className="flex flex-col">
          {tabIndex === 2 ? <RiGraduationCapFill className="text-2xl text-black" /> : <RiGraduationCapLine className="text-2xl text-black" />}
          <p className="text-black text-[0.5rem]"> CURSOS </p>
        </Tab>
        <Tab className="flex flex-col">
          {tabIndex === 3 ? <IoPerson className="text-2xl text-black" /> : <IoPersonOutline className="text-2xl text-black" />}
          <p className="text-black text-[0.5rem]"> PERFIL </p>
        </Tab>
      </TabList>
    </Tabs>
  );
}