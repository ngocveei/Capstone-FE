import { MoreVertical, Search } from 'lucide-react'

export function ChatRoomHeader() {
  return (
    <div className="chat-room-header">
      <div className="room-avatar">👨‍👩‍👧‍👦</div>

      <div>
        <h2>General - Lớp 9A</h2>
        <p>
          <span />
          35 thành viên · Đang hoạt động
        </p>
      </div>

      <Search size={22} />
      <MoreVertical size={22} />
    </div>
  )
}