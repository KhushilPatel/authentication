import AssessmentList from '@/components/Assessment/List/Assessment_List'
import React from 'react'
import Sider from '@/components/UI/Sider'
const index = () => {
  return (
    <div className="flex gap-4">
    <div className="w-[20%]">
      <Sider />
    </div>
    <div className="w-full h-full">
      <AssessmentList />
    </div>
  </div>
  )
}

export default index
