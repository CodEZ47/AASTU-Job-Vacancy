import React from 'react'
import { Links } from './Links'

export const SideBar = () => {
  return (
    <div className="wrapper">
        <div className="sidebar">
          <ul>
            <Links link="/Users">Users</Links>
            <Links link="/Position">Position</Links>
            <Links link="/Offices">Offices</Links>
            <Links link="/Metric">Metric</Links>
            <Links link="/Roles">Roles</Links>
          </ul>
        </div>
    </div>
  )
}
