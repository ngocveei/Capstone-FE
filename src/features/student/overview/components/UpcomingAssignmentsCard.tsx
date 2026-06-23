import { FileText } from 'lucide-react'

const assignments = [
  ['Bài tập Toán - Chương 3', '17/05'],
  ['Bài văn nghị luận xã hội', '18/05'],
  ['Bài tập Tiếng Anh - Unit 5', '19/05'],
  ['Thí nghiệm Vật lý - Bài 14', '20/05'],
  ['Worksheet Hóa học - Bài 2', '21/05'],
] as const

export function UpcomingAssignmentsCard() {
  return (
    <article className="overview-card large-card assignments-card">
      <div className="large-card-heading">
        <h2 className="section-title orange-icon"><FileText size={19} />Các bài tập sắp nộp</h2>
        <button type="button">Xem tất cả</button>
      </div>
      <ul>
        {assignments.map(([name, date]) => (
          <li key={name}>
            <span className="list-circle" /><span className="assignment-name">{name}</span>
            <span className="due-date"><em>Hạn:</em> {date}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}
