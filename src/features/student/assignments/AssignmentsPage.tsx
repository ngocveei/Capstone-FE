import { ClipboardList } from 'lucide-react'
import { AssignmentFilters } from './components/AssignmentFilters'
import { AssignmentList } from './components/AssignmentList'
import { AssignmentSidebar } from './components/AssignmentSidebar'
import './AssignmentsPage.css'

export default function AssignmentsPage() {
  return (
    <div className="assignments-page">
      <main className="assignments-main">
        <section className="assignments-left">
          <header className="assignments-header">
            <h1>
              <ClipboardList size={28} />
              Bài tập toán 9A
            </h1>

            <div className="assignment-tabs">
              <button className="active" type="button">Danh sách bài tập</button>
              <button type="button">Xem điểm</button>
            </div>
          </header>

          <AssignmentFilters />
          <AssignmentList />
        </section>

        <AssignmentSidebar />
      </main>
    </div>
  )
}