import { Plus, UsersRound } from 'lucide-react'

const conversations = [
  ['👨‍👩‍👧‍👦', 'General - Lớp 9A', 'Minh: Mai kiểm tra Toán nha các bạn!', '10:30', '2', true],
  ['🧮', 'Nhóm học Toán', 'Lan: Ai làm bài 3 chưa? 😄', '09:45', '1', false],
  ['⚛️', 'Dự án Khoa học', 'Hùng: Mình gửi file báo cáo đây', 'Hôm qua', '', false],
  ['📖', 'Ôn thi cuối kỳ', 'Thầy Nam: Các em xem tài liệu nhé', 'Hôm qua', '', false],
  ['🎉', 'Hoạt động lớp', 'Hoa: Cuối tuần đi cắm trại nhé!', '2 ngày trước', '', false],
] as const

export function ConversationList() {
  return (
    <aside className="chat-left-panel chat-card">
      <div className="chat-tabs">
        <button className="active" type="button">
          <UsersRound size={18} />
          Chat với lớp
        </button>
        <button type="button">Chat với giáo viên</button>
      </div>

      <h2>Cuộc trò chuyện</h2>

      <div className="conversation-list">
        {conversations.map(([icon, name, last, time, badge, active]) => (
          <button className={`conversation-item ${active ? 'active' : ''}`} key={name} type="button">
            <span className="conversation-avatar">{icon}</span>
            <div>
              <b>{name}</b>
              <small>{last}</small>
            </div>
            <em>{time}</em>
            {badge && <i>{badge}</i>}
          </button>
        ))}
      </div>

      <button className="create-group" type="button">
        <Plus size={18} />
        Tạo nhóm mới
      </button>
    </aside>
  )
}