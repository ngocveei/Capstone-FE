import { ChevronRight, FileText, PenLine } from 'lucide-react'
import { assignments } from '../data'

export function AssignmentList() {
  return (
    <section className="assignment-list-card">
      <div className="assignment-list-scroll">
        {assignments.map((item) => {
          const Icon = item.icon === 'pen' ? PenLine : FileText
          const isSubmitted = item.status === 'Đã nộp'

          return (
            <article className="assignment-row" key={item.title}>
              <span className={`assignment-icon ${item.icon}`}>
                <Icon size={23} />
              </span>

              <div className="assignment-info">
                <h2>{item.title}</h2>
                <p>{item.session}</p>
              </div>

              <span className={`assignment-type ${item.type === 'Tự luận' ? 'essay' : 'quiz'}`}>
                {item.type}
              </span>

              <span className="assignment-due">{item.due}</span>

              <span className={`assignment-status ${isSubmitted ? 'done' : 'missing'}`}>
                {item.status}
              </span>

              <button type="button">
                Xem chi tiết
                <ChevronRight size={15} />
              </button>
            </article>
          )
        })}
      </div>
    </section>
  )
}