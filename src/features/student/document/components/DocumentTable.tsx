import { Download, Eye, MoreVertical } from 'lucide-react'
import { FileIcon } from './FileIcon'

const documents = [
  ['pdf', 'Tổng hợp công thức Toán 9', 'Ôn tập chương trình', 'Toàn bộ năm học', 'PDF', '16/05/2024'],
  ['doc', 'Bài tập Đại số - Chương 3', 'Chương 3: Hệ phương trình', 'Buổi 17', 'DOCX', '15/05/2024'],
  ['xls', 'Đề kiểm tra giữa kỳ 2', 'Đề kiểm tra', 'Buổi 22', 'XLSX', '14/05/2024'],
  ['link', 'Video bài giảng Hệ thức Viète', 'Chương 3: Hệ phương trình', 'Buổi 15', 'LINK', '12/05/2024'],
  ['img', 'Sơ đồ tư duy Bất đẳng thức', 'Chương 4: BĐT và GTLN - GTNN', 'Buổi 18', 'PNG', '11/05/2024'],
  ['video', 'Ôn tập cuối năm - Phần 1', 'Ôn tập tổng hợp', 'Buổi 28', 'MP4', '10/05/2024'],
  ['pdf', 'Phân dạng bài tập Hình học', 'Chương 6: Đường tròn', 'Buổi 24', 'PDF', '08/05/2024'],
] as const

export function DocumentTable() {
  return (
    <section className="document-table-card">
      <div className="document-table-head">
        <span>Tên tài liệu</span>
        <span>Buổi / Chủ đề</span>
        <span>Loại</span>
        <span>Ngày upload</span>
        <span>Người upload</span>
        <span>Thao tác</span>
      </div>

      <div className="document-table-body">
        {documents.map(([type, name, desc, topic, tag, date]) => (
          <div className="document-row" key={name}>
            <div className="document-name-cell">
              <FileIcon type={type} />
              <div>
                <b>{name}</b>
                <small>{desc}</small>
              </div>
            </div>

            <span>{topic}</span>
            <span className={`doc-tag ${tag.toLowerCase()}`}>{tag}</span>
            <span>{date}</span>
            <span>Cô Lan</span>

            <div className="document-actions">
              <button type="button">
                <Eye size={16} />
              </button>
              <button type="button">
                <Download size={16} />
              </button>
              <button type="button">
                <MoreVertical size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}