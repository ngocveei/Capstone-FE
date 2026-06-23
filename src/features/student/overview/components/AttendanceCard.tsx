import { CalendarCheck, Check } from 'lucide-react'

const days = [
  { label: 'T2', state: 'done' }, { label: 'T3', state: 'done' },
  { label: 'T4', state: 'done' }, { label: 'T5', state: 'done' },
  { label: 'T6', state: 'done' }, { label: 'T7', state: 'late' },
  { label: 'CN', state: 'empty' },
] as const

export function AttendanceCard() {
  return (
    <article className="overview-card large-card attendance-card">
      <h2 className="section-title"><CalendarCheck size={19} />Tổng kết điểm danh</h2>
      <div className="gauge-wrap">
        <svg aria-hidden="true" className="gauge" viewBox="0 0 160 88">
          <path d="M20 78 A60 60 0 0 1 140 78" fill="none" pathLength="100" stroke="#E4E8F1" strokeLinecap="round" strokeWidth="10" />
          <path d="M20 78 A60 60 0 0 1 140 78" fill="none" pathLength="100" stroke="#083B7A" strokeDasharray="90 100" strokeLinecap="round" strokeWidth="10" />
        </svg>
        <div className="gauge-value"><strong>18/20</strong><span>buổi</span></div>
      </div>
      <p className="attendance-copy">Đã đi học 18 trên tổng 20 buổi của lớp.</p>
      <div className="days-row">
        {days.map(({ label, state }) => (
          <div className="day" key={label}>
            <span className={`day-status ${state}`}>{state !== 'empty' && <Check size={11} strokeWidth={3} />}</span>
            <b>{label}</b>
          </div>
        ))}
      </div>
    </article>
  )
}
