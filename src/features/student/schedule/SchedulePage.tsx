import { HeaderStats } from './components/HeaderStats'
import { MonthlyCalendar } from './components/MonthlyCalendar'
import { StudyNotes } from './components/StudyNotes'
import { WeeklySchedule } from './components/WeeklySchedule'
import './schedule.css'

export default function SchedulePage() {
  return (
    <div className="schedule-page">
      <header className="schedule-header">
        <div>
          <span className="schedule-eyebrow">TRANG HỌC SINH</span>
          <h1>Lịch học Toán 9A</h1>
          <p>
            Theo dõi thời khóa biểu,
            <br />
            lịch học hôm nay và các buổi sắp tới.
          </p>
        </div>

        <HeaderStats />
      </header>

      <main className="schedule-main">
        <WeeklySchedule />

        <aside className="schedule-side">
          <MonthlyCalendar />
          <StudyNotes />
        </aside>
      </main>
    </div>
  )
}