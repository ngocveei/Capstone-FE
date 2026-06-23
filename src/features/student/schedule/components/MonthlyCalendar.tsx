import { CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react'

const weekDays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']

const dates = [
  29, 30, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12,
  13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26,
  27, 28, 29, 30, 31, 1, 2,
]

export function MonthlyCalendar() {
  return (
    <section className="schedule-card side-card month-card">
      <h2 className="schedule-section-title">
        <CalendarDays size={19} />
        Lịch tháng
      </h2>

      <div className="month-nav">
        <ChevronLeft size={17} />
        <b>Tháng 5, 2024</b>
        <ChevronRight size={17} />
      </div>

      <div className="month-grid month-days">
        {weekDays.map((day) => (
          <b key={day}>{day}</b>
        ))}
      </div>

      <div className="month-grid month-dates">
        {dates.map((date, index) => (
          <span
            key={`${date}-${index}`}
            className={`${index < 2 || index > 32 ? 'muted' : ''} ${
              date === 16 && index === 17 ? 'selected' : ''
            }`}
          >
            {date}
          </span>
        ))}
      </div>
    </section>
  )
}