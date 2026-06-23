import { Outlet } from 'react-router-dom'
import { NotebookBackground } from './NotebookBackground'
import { NotebookFrame } from './NotebookFrame'
import { NotebookSidebar } from './NotebookSidebar'
import { NotebookTabs } from './NotebookTabs'

export function NotebookLayout() {
  return (
    <div className="relative h-dvh w-screen overflow-hidden bg-[#FCE7CC] font-sans">
      <NotebookBackground />

      <div className="absolute left-1/2 top-12 z-10 w-[clamp(1180px,88vw,1500px)] -translate-x-[54%]">
        <NotebookTabs />

        <NotebookFrame>
          <Outlet />
        </NotebookFrame>

        <NotebookSidebar />
      </div>
    </div>
  )
}