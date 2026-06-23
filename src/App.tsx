import { Navigate, Route, Routes } from 'react-router-dom'
import { NotebookLayout } from './components/notebook/NotebookLayout'
import OverviewPage from './features/student/overview/OverviewPage'
import SchedulePage from './features/student/schedule/SchedulePage'
import AssignmentsPage from './features/student/assignments/AssignmentsPage'
import DocumentPage from './features/student/document/DocumentPage'
import ChatPage from './features/student/chat/ChatPage'
// import DiscussionPage from './features/student/discussion/DiscussionPage'

export default function App() {
  return (
    <Routes>
      <Route path="/student" element={<NotebookLayout />}>
        <Route index element={<OverviewPage />} />
        <Route path="schedule" element={<SchedulePage />} />
        <Route path="assignments" element={<AssignmentsPage />} />
        <Route path="documents" element={<DocumentPage />} />
        <Route path="discussions" element={<ChatPage />} />
        {/* <Route path="discussions" element={<DiscussionPage />} /> */}
      </Route>

      <Route path="*" element={<Navigate replace to="/student" />} />
    </Routes>
  )
}