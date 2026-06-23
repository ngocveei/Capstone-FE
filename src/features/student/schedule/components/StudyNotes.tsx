import { Check, ClipboardCheck, Plus } from 'lucide-react'

const notes = [
  { text: 'Mang sách vở Toán', done: false },
  { text: 'Hoàn thành bài tập chương 3', done: true },
  { text: 'Ôn tập trước kiểm tra giữa kỳ', done: false },
]

export function StudyNotes() {
  return (
    <section className="schedule-card side-card notes-card">
      <h2 className="schedule-section-title">
        <ClipboardCheck size={19} />
        Ghi chú học tập
      </h2>

      <ul>
        {notes.map((note) => (
          <li key={note.text}>
            <span className={note.done ? 'checked' : ''}>
              {note.done && <Check size={10} strokeWidth={3} />}
            </span>
            {note.text}
          </li>
        ))}
      </ul>

      <button type="button">
        <Plus size={14} />
        Thêm ghi chú mới...
      </button>
    </section>
  )
}