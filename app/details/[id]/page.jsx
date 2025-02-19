'use client'
import HeaderOne from "../../header/HeaderOne";

import { useEffect, useState } from 'react'
import BasicInfo from '../components/BasicInfo'
import UnitMix from '../components/UnitMix'
import FloorPlan from '../components/FloorPlan'
import SalesTransactions from '../components/SalesTransactions'
import Location from '../components/Location'
import VideoSection from '../components/VideoSection'
import TabNavigation from '../components/TabNavigation'
import Lentor from '../components/Lentor'


export default function DetailPage({ params }) {
  const [projectData, setProjectData] = useState(null)
  const [activeTab, setActiveTab] = useState('floor-plan')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://129.226.92.69/CSAA/projects/${params.id}`)
        const data = await response.json()
        setProjectData(data.data)
      } catch (error) {
        console.error('Error fetching project details:', error)
      }
    }

    fetchData()
  }, [params.id])

  if (!projectData) return <div>Loading...</div>

  return (

    <div className="max-w-full mx-auto px-4">
    <HeaderOne />
    <div className="mt-8">
      <BasicInfo project={projectData} />
    </div>
    <div className="max-w-7xl mx-auto px-4">
      <TabNavigation 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
      />
    </div>
      
      <div className="mt-6">
        {activeTab === 'floor-plan' && 
          <div className="min-h-screen bg-gray-100 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
              <UnitMix units={projectData.units} />
                <FloorPlan floorPlans={projectData.floor_plans} />
                <SalesTransactions transactions={projectData.sales_transactions} />
              </div>
              <div className="lg:col-span-1">
                <Lentor />
              </div>
            </div>
          </div>
        </div>
          }
        {activeTab === 'unit-mix' && <UnitMix units={projectData.units} />}
        {activeTab === 'transactions' && <SalesTransactions transactions={projectData.sales_transactions} />}
        {activeTab === 'location' && <Location locationData={projectData.location} />}
        {activeTab === 'video' && <VideoSection />}
      </div>
    </div>
  )
}