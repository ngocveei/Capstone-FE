import { FileIcon } from './FileIcon'

const newDocs = [
  ['pdf', 'Tổng hợp công thức Toán 9', '16/05/2024'],
  ['doc', 'Bài tập Đại số - Chương 3', '15/05/2024'],
  ['xls', 'Đề kiểm tra giữa kỳ 2', '14/05/2024'],
] as const

const suggestions = [
  ['doc', 'Chuyên đề Hệ phương trình', 'Phù hợp với buổi học sắp tới'],
  ['pdf', 'Bài tập vận dụng cao - BĐT', 'Giúp nâng cao kỹ năng giải bài'],
  ['video', 'Video bài giảng Hình học', 'Ôn tập hiệu quả trước kiểm tra'],
] as const

export function DocumentSidebar() {
  return (
    <aside className="document-sidebar">
      <section className="document-side-card">
        <div className="side-heading">
          <h2>Tài liệu mới</h2>
          <button type="button">Xem tất cả</button>
        </div>

        {newDocs.map(([type, name, date]) => (
          <div className="small-doc-row" key={name}>
            <FileIcon type={type} />
            <div>
              <b>{name}</b>
              <small>{date}</small>
            </div>
          </div>
        ))}
      </section>

      <section className="document-side-card suggestion-card">
        <div className="side-heading">
          <h2>Gợi ý từ giáo viên</h2>
          <span>Dành cho bạn</span>
        </div>

        {suggestions.map(([type, name, desc]) => (
          <div className="small-doc-row" key={name}>
            <FileIcon type={type} />
            <div>
              <b>{name}</b>
              <small>{desc}</small>
            </div>
          </div>
        ))}

        {/* <button className="more-suggestion" type="button">
          Xem thêm gợi ý
        </button> */}
      </section>
    </aside>
  )
}