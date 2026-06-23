import { Download, FolderOpen, MoreVertical, Pin } from 'lucide-react'

const pins = [
  ['📣', 'Thông báo ôn tập giữa kỳ Toán', 'Thầy Nam', 'Mai kiểm tra giữa kỳ môn Toán chương 1-3.', 'Hạn: 17/05/2024', 'Toán 9A'],
  ['🏫', 'Nộp bài thuyết trình nhóm 3', 'Cô Hoa', 'Hạn nộp bài thuyết trình dự án Khoa học.', 'Hạn: 20/05/2024', 'Khoa học'],
] as const

const files = [
  ['pdf', 'Đề cương ôn tập giữa kỳ Toán.pdf', 'Thầy Nam · 17/05/2024 · 2.4 MB'],
  ['ppt', 'Bài giảng Đại số - Chương 3.pptx', 'Cô Lan · 16/05/2024 · 8.7 MB'],
//   ['doc', 'Bài tập chương 3.docx', 'Thầy Nam · 14/05/2024 · 1.1 MB'],
] as const

export function RightPanel() {
  return (
    <aside className="chat-right-panel">
      <section className="chat-card pin-card">
        <div className="right-card-heading">
          <h2>
            <Pin size={20} />
            Ghim thông báo
          </h2>
          <MoreVertical size={19} />
        </div>

        {pins.map(([icon, title, teacher, desc, date, tag]) => (
          <article className="pin-item" key={title}>
            <span>{icon}</span>
            <div>
              <b>{title}</b>
              <small>{teacher}</small>
              <p>{desc}</p>
              <footer>
                <em>{date}</em>
                <i>{tag}</i>
              </footer>
            </div>
          </article>
        ))}

        <button className="view-all" type="button">Xem tất cả ›</button>
      </section>

      <section className="chat-card shared-card">
        <div className="right-card-heading">
          <h2>
            <FolderOpen size={20} />
            Tệp được chia sẻ
          </h2>
          <MoreVertical size={19} />
        </div>

        {files.map(([type, name, desc]) => (
          <div className="shared-file" key={name}>
            <span className={type}>{type.toUpperCase()}</span>
            <div>
              <b>{name}</b>
              <small>{desc}</small>
            </div>
            <Download size={18} />
          </div>
        ))}

        {/* <button className="view-all" type="button">Xem tất cả ›</button> */}
      </section>
    </aside>
  )
}