import { CheckCircle, Filter, List, PenLine, CalendarDays } from 'lucide-react'

const filters = [
  [CalendarDays, 'Xem theo từng buổi'],
  [List, 'Bài trắc nghiệm'],
  [PenLine, 'Bài tự luận'],
  [CheckCircle, 'Đã nộp'],
  [Filter, 'Tất cả trạng thái'],
] as const

export function AssignmentFilters() {
  return (
    <div className="assignment-filters">
      {filters.map(([Icon, label]) => (
        <button type="button" key={label}>
          <Icon size={17} />
          {label}
        </button>
      ))}
    </div>
  )
}