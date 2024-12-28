'use client'
import HeaderOne from "../../header/HeaderOne";

import { useEffect, useState } from 'react'
import BasicInfo from '../components/BasicInfo'
import UnitInfo from '../components/UnitInfo'
import FloorPlan from '../components/FloorPlan'
import SalesTransactions from '../components/SalesTransactions'
import Location from '../components/Location'
import VideoSection from '../components/VideoSection'
import TabNavigation from '../components/TabNavigation'

export default function DetailPage({ params }) {
  const [projectData, setProjectData] = useState(null)
  const [activeTab, setActiveTab] = useState('floor-plan')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/CSAA/projects/${params.id}`)
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

    <div className="max-w-7xl mx-auto px-4">
      <HeaderOne />
      <BasicInfo project={projectData} />
      
      <TabNavigation 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
      />
      
      <div className="mt-6">
        {activeTab === 'floor-plan' && <FloorPlan floorPlans={projectData.floor_plans} />}
        {activeTab === 'unit-info' && <UnitInfo units={projectData.units} />}
        {activeTab === 'transactions' && <SalesTransactions transactions={projectData.sales_transactions} />}
        {activeTab === 'location' && <Location locationData={projectData.location} />}
        {activeTab === 'video' && <VideoSection />}
      </div>
    </div>
  )
}