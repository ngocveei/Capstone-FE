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

const hours = [
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
]

type Lesson = {
  day: number
  start: number
  end: number
  tone: 'peach' | 'mint'
}

const lessons: Lesson[] = [
  { day: 0, start: 7.5, end: 9, tone: 'peach' },
  { day: 2, start: 8, end: 9.5, tone: 'peach' },
  { day: 4, start: 10, end: 11.5, tone: 'mint' },
  { day: 6, start: 19, end: 20.5, tone: 'peach' },
]

const copy = {
  title: 'Lịch tuần',
  subject: 'Toán 9A',
  teacher: 'Cô Lan',
  lunch: 'Nghỉ trưa 12:00 - 13:00',
}

const hourHeight = 58
const startHour = 7

const topFor = (hour: number) => `${(hour - startHour) * hourHeight}px`
const heightFor = (start: number, end: number) => `${(end - start) * hourHeight}px`

const formatHour = (hour: number) => {
  const wholeHour = Math.floor(hour).toString().padStart(2, '0')
  return `${wholeHour}:${hour % 1 === 0.5 ? '30' : '00'}`
}

export function WeeklySchedule() {
  return (
    <section className="weekly-section">
      <div className="weekly-card">
        <h2 className="weekly-title">
          <CalendarDays size={22} />
          {copy.title}
        </h2>

        <div className="weekly-header">
          <span />
          {days.map(([name, date]) => (
            <div key={name}>
              <b>{name}</b>
              <span>{date}</span>
            </div>
          ))}
        </div>

        <div className="weekly-scroll">
          <div className="weekly-body">
            {hours.map((hour) => (
              <div className="weekly-time-row" key={hour}>
                <span>{hour}</span>
              </div>
            ))}

            <div className="weekly-day-columns">
              {days.map(([name], dayIndex) => (
                <div className="weekly-day-column" key={name}>
                  {lessons
                    .filter((lesson) => lesson.day === dayIndex)
                    .map((lesson) => (
                      <article
                        key={`${lesson.day}-${lesson.start}`}
                        className={`lesson ${lesson.tone}`}
                        style={{
                          top: topFor(lesson.start),
                          height: heightFor(lesson.start, lesson.end),
                        }}
                      >
                        <b>{copy.subject}</b>
                        <span>
                          {formatHour(lesson.start)} - {formatHour(lesson.end)}
                        </span>
                        <small>{copy.teacher}</small>
                      </article>
                    ))}
                </div>
              ))}

              <div className="lunch-break" style={{ top: topFor(12) }}>
                <BookOpen size={16} />
                <b>{copy.lunch}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}