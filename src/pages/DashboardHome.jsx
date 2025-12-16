import React from 'react'
import SummaryHome from '../components/dashboard/home/SummaryHome'
import SalesRevenue from '../components/dashboard/home/SalesRevenue'
import RecentActivity from '../components/dashboard/home/RecentActivity'

const DashboardHome = () => {
  return (
   <>
   <SummaryHome/>
   <SalesRevenue/>
   <RecentActivity/>
   </>
  )
}

export default DashboardHome