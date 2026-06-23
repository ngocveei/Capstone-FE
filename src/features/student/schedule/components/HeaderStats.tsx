import { CalendarDays, Clock3, UserRound } from 'lucide-react'

const copy = {
  attendance: 'Điểm danh',
  sessions: 'buổi',
  present: 'Đã có mặt',
  absent: 'Vắng',
  leave: 'Nghỉ phép',
  upcoming: 'Buổi học sắp tới',
  tomorrow: 'Ngày mai',
  subject: 'Toán 9A',
  teacher: 'Cô Lan',
}

export function HeaderStats() {
  return (
    <div className="schedule-header-cards">
      <article className="schedule-card schedule-stat attendance-stat">
        <div className="stat-heading">
          <span className="stat-icon">
            <UserRound size={18} />
          </span>

          <div className="stat-content">
            <h2>{copy.attendance}</h2>
            <strong>
              18/20 <small>{copy.sessions}</small>
            </strong>
          </div>
        </div>

        <div className="progress-label">
          <b>90%</b>
        </div>

        <div className="attendance-progress">
          <span />
        </div>

        <div className="attendance-numbers">
          <div>
            <b>18</b>
            <span>{copy.present}</span>
          </div>
          <div>
            <b>2</b>
            <span>{copy.absent}</span>
          </div>
          <div>
            <b>0</b>
            <span>{copy.leave}</span>
          </div>
        </div>
      </article>

      <article className="schedule-card schedule-stat next-class-stat">
        <div className="stat-heading">
          <span className="stat-icon">
            <CalendarDays size={18} />
          </span>

          <div className="stat-content">
            <h2>{copy.upcoming}</h2>
          </div>
        </div>

        <div className="next-class-body">
          <div className="next-row orange">
            <Clock3 size={14} />
            <span>{copy.tomorrow}</span>
          </div>

          <div className="next-row time">
            <Clock3 size={15} />
            <strong>19:00 - 20:30</strong>
          </div>

          <p>{copy.subject}</p>
          <small>{copy.teacher}</small>
        </div>
      </article>
    </div>
  )
}