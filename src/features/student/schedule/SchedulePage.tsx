import { HeaderStats } from './components/HeaderStats'
import { MonthlyCalendar } from './components/MonthlyCalendar'
import { StudyNotes } from './components/StudyNotes'
import { WeeklySchedule } from './components/WeeklySchedule'
import './schedule.css'

const copy = {
  title: 'Lịch học Toán 9A',
  descLine1: 'Theo dõi thời khóa biểu,',
  descLine2: 'lịch học hôm nay và các buổi sắp tới.',
}

export default function SchedulePage() {
  return (
    <div className="schedule-page">
      <div className="schedule-inner">
        <header className="schedule-header">
          <div className="schedule-title-block">
            <h1 className="schedule-title">{copy.title}</h1>
            <p className="schedule-desc">
              {copy.descLine1}
              <br />
              {copy.descLine2}
            </p>
            <span className="schedule-underline" />
          </div>

          <HeaderStats />
        </header>

        <main className="schedule-main">
          <div className="schedule-left-column">
            <WeeklySchedule />
          </div>

          <aside className="schedule-right-column">
            <MonthlyCalendar />
            <StudyNotes />
          </aside>
        </main>
      </div>
    </div>
  )
}