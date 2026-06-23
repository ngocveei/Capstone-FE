import { Bell, ChevronRight, FolderOpen, MessageSquareText } from 'lucide-react'

const upcoming = [
  ['Bài tập Toán - Chương 3', '17:00, Thứ 6 (17/05)', 'Còn 5 giờ'],
  ['Bài văn nghị luận xã hội', '18:30, Thứ 7 (18/05)', 'Còn 1 ngày'],
  // ['Bài tập Tiếng Anh - Unit 5', '18:30, CN (19/05)', 'Còn 2 ngày'],
] as const

export function AssignmentSidebar() {
  return (
    <aside className="assignments-sidebar">
      <section className="assignment-side-card deadline-card">
        <h2>
          <Bell size={20} />
          Hạn nộp sắp tới
        </h2>

        {upcoming.map(([title, time, badge]) => (
          <div className="deadline-item" key={title}>
            <span />
            <div>
              <b>{title}</b>
              <p>{time}</p>
            </div>
            <em>{badge}</em>
          </div>
        ))}

        {/* <button type="button">
          Xem tất cả
          <ChevronRight size={17} />
        </button> */}
      </section>

      <section className="assignment-side-card comment-card">
        <h2>
          <MessageSquareText size={20} />
          Nhận xét của giáo viên
        </h2>

        <p>
          Bài làm tốt, trình bày rõ ràng, logic. Cần chú ý kiểm tra lại các phép tính ở câu 3.
        </p>

        <small>– Cô Lan</small>

        {/* <button type="button">Xem chi tiết nhận xét</button> */}
      </section>

      <section className="assignment-side-card progress-card">
        <h2>Tỷ lệ hoàn thành</h2>

        <div className="progress-content">
          <div className="assignment-donut">
            <strong>75%</strong>
            <span>Hoàn thành</span>
          </div>

          <ul>
            <li><i className="green" />Đã nộp <b>15 bài</b></li>
            <li><i className="blue" />Đã chấm <b>11 bài</b></li>
            <li><i className="red" />Chưa nộp <b>5 bài</b></li>
          </ul>
        </div>
      </section>

      <section className="assignment-side-card submitted-card">
        <h2>
          <FolderOpen size={20} />
          Bài làm của bạn
        </h2>

        <p>Bài làm mới nhất:</p>
        <b>Bài tập Toán - Chương 3.pdf</b>
        <small>Nộp lúc: 16/05/2024 19:45</small>

        <button type="button">
          Xem bài làm
          <ChevronRight size={17} />
        </button>
      </section>
    </aside>
  )
}