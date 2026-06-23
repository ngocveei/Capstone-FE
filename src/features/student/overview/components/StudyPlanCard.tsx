import { Target } from 'lucide-react'

const plans = [
  'Học trước bài mới vào đầu tuần',
  'Ôn tập 2 dạng bài trong chương hiện tại',
  'Luyện thêm 3 bài nâng cao trước cuối tuần',
  'Ghi chú các lỗi sai để hỏi Cô Lan',
  'Giữ mục tiêu điểm 9+ nhé!',
]

export function StudyPlanCard() {
  return (
    <article className="overview-card large-card plan-card">
      <h2 className="section-title"><Target size={20} />Kế hoạch học tập của mình</h2>
      <ul>{plans.map((plan) => <li key={plan}><span className="checkbox" />{plan}</li>)}</ul>
    </article>
  )
}
