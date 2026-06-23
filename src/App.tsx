import { Navigate, Route, Routes } from 'react-router-dom'
import { NotebookLayout } from './components/notebook/NotebookLayout'
import OverviewPage from './features/student/overview/OverviewPage'
import SchedulePage from './features/student/schedule/SchedulePage'
import { PlaceholderPage } from './features/student/pages/PlaceholderPage'

export default function App() {
  return (
    <Routes>
      <Route path="/student" element={<NotebookLayout />}>
        <Route index element={<OverviewPage />} />
        <Route path="schedule" element={<SchedulePage />} />
        <Route path="assignments" element={<PlaceholderPage title="Bài tập" />} />
        <Route path="documents" element={<PlaceholderPage title="Tài liệu" />} />
        <Route path="discussions" element={<PlaceholderPage title="Trao đổi" />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/student" />} />
    </Routes>
  )
}
