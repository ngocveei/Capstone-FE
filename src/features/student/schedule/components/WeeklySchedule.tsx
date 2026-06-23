import { BookOpen, CalendarDays } from 'lucide-react'

const days = [
  ['THỨ 2', '12/05'],
  ['THỨ 3', '13/05'],
  ['THỨ 4', '14/05'],
  ['THỨ 5', '15/05'],
  ['THỨ 6', '16/05'],
  ['THỨ 7', '17/05'],
  ['CHỦ NHẬT', '18/05'],
] as const

const hours = ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', "20:00", '21:00', '22:00']

type Lesson = {
  day: number
  start: number
  end: number
  tone: 'peach' | 'yellow' | 'purple' | 'mint'
}

const lessons: Lesson[] = [
  { day: 0, start: 7.5, end: 9, tone: 'peach' },
  { day: 0, start: 9.5, end: 11, tone: 'yellow' },
  { day: 1, start: 13.5, end: 15, tone: 'purple' },
  { day: 2, start: 8, end: 9.5, tone: 'peach' },
  { day: 4, start: 10, end: 11.5, tone: 'mint' },
  { day: 4, start: 15.5, end: 17, tone: 'mint' },
  { day: 6, start: 9, end: 10.5, tone: 'peach' },
]

const hourHeight = 52
const startHour = 7

const topFor = (hour: number) => `${(hour - startHour) * hourHeight}px`
const heightFor = (start: number, end: number) => `${(end - start) * hourHeight}px`

const formatHour = (hour: number) => {
  const h = Math.floor(hour).toString().padStart(2, '0')
  return `${h}:${hour % 1 === 0.5 ? '30' : '00'}`
}

export function WeeklySchedule() {
  return (
    <section className="weekly-card">
      <h2><CalendarDays size={23} />Lịch tuần</h2>

      <div className="week-head">
        <span />
        {days.map(([day, date]) => (
          <div key={day}>
            <b>{day}</b>
            <small>{date}</small>
          </div>
        ))}
      </div>

      <div className="week-scroll">
        <div className="week-body">
          {hours.map((hour) => (
            <div className="hour-row" key={hour}>
              <span>{hour}</span>
            </div>
          ))}

          <div className="day-columns">
            {days.map(([day], dayIndex) => (
              <div className="day-column" key={day}>
                {lessons
                  .filter((lesson) => lesson.day === dayIndex)
                  .map((lesson) => (
                    <article
                      className={`lesson ${lesson.tone}`}
                      key={`${lesson.day}-${lesson.start}`}
                      style={{
                        top: topFor(lesson.start),
                        height: heightFor(lesson.start, lesson.end),
                      }}
                    >
                      <b>Toán 9A</b>
                      <span>{formatHour(lesson.start)} - {formatHour(lesson.end)}</span>
                      <small>Cô Lan</small>
                    </article>
                  ))}
              </div>
            ))}

            <div className="lunch" style={{ top: topFor(12) }}>
              <BookOpen size={17} />
              <b>Nghỉ trưa 12:00 - 13:00</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
