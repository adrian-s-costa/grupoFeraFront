"use client"

import { Table, Tabs } from "flowbite-react";
import Tables from "@/app/_components/table/table";
import { Skeleton } from "@/components/ui/skeleton"

export default function FixedDate({ loading, content }: any){



return <>
        {loading ? (
          <>
            <Skeleton className="h-[50px] w-full rounded-xl bg-white"/>
            <Skeleton className="h-[92px] w-full rounded-xl bg-white mt-5 mb-3"/>
          </>
        ) : (
          <>
            <div className="bg-white absolute w-full h-[50px] rounded-md">{" "}</div>
            <Tabs aria-label="Pills" style="pills" className="justify-between">
              <Tabs.Item active title="Dia" className="enabled:bg-black">
                <Tables
                  impressions={content && content.measures && content.measures.day.dayChangePercentage}
                  CTR={content && content.measures && content.measures.day.dayChangeCTR}
                  clicks={content && content.measures && content.measures.day.dayChangeClick}
                />
              </Tabs.Item>
              <Tabs.Item title="Semana">
                <Tables
                  impressions={content && content.measures && content.measures.week.weekChangePercentage}
                  CTR={content && content.measures && content.measures.week.weekChangeCTR}
                  clicks={content && content.measures && content.measures.week.weekChangeClick}
                />
              </Tabs.Item>
              <Tabs.Item title="Mês">
                <Tables
                  impressions={content && content.measures && content.measures.month.monthChangePercentage}
                  CTR={content && content.measures && content.measures.month.monthChangeCTR}
                  clicks={content && content.measures && content.measures.month.monthChangeClick}
                />
              </Tabs.Item>
              <Tabs.Item title="Ano">
                <Tables
                  impressions={content && content.measures && content.measures.year.yearChangePercentage}
                  CTR={content && content.measures && content.measures.year.yearChangeCTR}
                  clicks={content && content.measures && content.measures.year.yearChangeClick}
                />
              </Tabs.Item>
            </Tabs>
          </>
        )}
    </>
}