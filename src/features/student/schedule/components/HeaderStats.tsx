import { CalendarDays, Clock3, UserRound } from 'lucide-react'

export function HeaderStats() {
  return (
    <section className="schedule-stats">
      <article className="schedule-stat-card">
        <div className="stat-head">
          <span><UserRound size={20} /></span>
          <div>
            <h2>Điểm danh</h2>
            <strong>18/20 <small>buổi</small></strong>
          </div>
        </div>

        <b className="progress-text">90%</b>
        <div className="progress-bar"><i /></div>

        <div className="stat-numbers">
          <p><b>18</b><span>Đã có mặt</span></p>
          <p><b>2</b><span>Vắng</span></p>
          <p><b>0</b><span>Nghỉ phép</span></p>
        </div>
      </article>

      <article className="schedule-stat-card">
        <div className="stat-head">
          <span><CalendarDays size={20} /></span>
          <h2>Buổi học sắp tới</h2>
        </div>

        <div className="next-class">
          <p className="orange"><Clock3 size={15} />Ngày mai</p>
          <strong><Clock3 size={16} />19:00 - 20:30</strong>
          <b>Toán 9A</b>
          <small>Cô Lan</small>
        </div>
      </article>
    </section>
  )
}