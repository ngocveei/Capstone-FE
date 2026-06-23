import {
  Bell,
  Download,
  EllipsisVertical,
  Folder,
  Heart,
  Megaphone,
  MessageCircle,
  Paperclip,
  Pin,
  Search,
  Send,
  Smile,
  Users,
  UserRound,
  Plus,
  Atom,
  BookOpen,
  Calculator,
  PartyPopper,
} from 'lucide-react'

import './DiscussionPage.css'

const conversations = [
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'General - Lớp 9A',
    text: 'Minh: Mai kiểm tra Toán nha các bạn!',
    time: '10:30',
    badge: 2,
    active: true,
  },
  {
    icon: <Calculator size={28} />,
    title: 'Nhóm học Toán',
    text: 'Lan: Ai làm bài 3 chưa? 😊',
    time: '09:45',
    badge: 1,
  },
  {
    icon: <Atom size={30} />,
    title: 'Dự án Khoa học',
    text: 'Hùng: Mình gửi file báo cáo đây',
    time: 'Hôm qua',
  },
  {
    icon: <BookOpen size={30} />,
    title: 'Ôn thi cuối kỳ',
    text: 'Thầy Nam: Các em xem tài liệu nhé',
    time: 'Hôm qua',
  },
  {
    icon: <PartyPopper size={30} />,
    title: 'Hoạt động lớp',
    text: 'Hoa: Cuối tuần đi cắm trại nhé!',
    time: '2 ngày trước',
  },
]

const messages = [
  {
    avatar: '👦🏻',
    name: 'Minh',
    text: 'Mai kiểm tra Toán nha các bạn!',
    time: '10:30',
    reaction: '❤️',
    count: 12,
  },
  {
    avatar: '👧🏻',
    name: 'Lan',
    text: 'Cảm ơn Minh đã nhắc nhé! 😊',
    time: '10:31',
    reaction: '👍',
    count: 5,
  },
  {
    me: true,
    text: 'Mình đã ôn xong chương 3 rồi!',
    time: '10:32',
    reaction: '🎉',
    count: 4,
  },
  {
    avatar: '👦🏼',
    name: 'Nam',
    text: 'Ai có đề cương ôn tập gửi mình với',
    time: '10:33',
  },
  {
    avatar: '👨🏻‍🏫',
    name: 'Thầy Nam',
    text: 'Thầy đã gửi đề cương ôn tập ở mục Tệp được chia sẻ nhé các em.',
    time: '10:34',
    teacher: true,
    reaction: '👍',
    count: 10,
  },
]

const pins = [
  {
    icon: <Megaphone size={30} />,
    title: 'Thông báo ôn tập giữa kỳ Toán',
    author: 'Thầy Nam',
    text: 'Mai kiểm tra giữa kỳ môn Toán chương 1-3.',
    date: 'Hạn: 17/05/2024',
    tag: 'Toán 9A',
  },
  {
    icon: '🔬',
    title: 'Nộp bài thuyết trình nhóm 3',
    author: 'Cô Hoa',
    text: 'Hạn nộp bài thuyết trình dự án Khoa học.',
    date: 'Hạn: 20/05/2024',
    tag: 'Khoa học',
    green: true,
  },
]

const files = [
  {
    type: 'PDF',
    title: 'Đề cương ôn tập giữa kỳ Toán.pdf',
    meta: 'Thầy Nam · 17/05/2024 · 2.4 MB',
    color: 'red',
  },
  {
    type: 'PPT',
    title: 'Bài giảng Đại số - Chương 3.pptx',
    meta: 'Cô Lan · 16/05/2024 · 8.7 MB',
    color: 'orange',
  },
  {
    type: 'DOC',
    title: 'Bài tập chương 3.docx',
    meta: 'Thầy Nam · 14/05/2024 · 1.1 MB',
    color: 'blue',
  },
]

export default function DiscussionPage() {
  return (
    <section className="discussion-page">
      <header className="discussion-header">
        <div className="discussion-title-icon">
          <MessageCircle size={28} />
        </div>

        <div>
          <h1>Trao đổi</h1>
          <p>Nơi bạn kết nối và trao đổi với bạn bè, giáo viên</p>
        </div>
      </header>

      <div className="discussion-grid">
        <aside className="conversation-panel">
          <div className="chat-tabs">
            <button className="chat-tab active">
              <Users size={20} />
              Chat với lớp
            </button>

            <button className="chat-tab">
              <UserRound size={20} />
              Chat với giáo viên
            </button>
          </div>

          <p className="panel-label">Cuộc trò chuyện</p>

          <div className="conversation-list">
            {conversations.map((item) => (
              <article
                key={item.title}
                className={`conversation-item ${item.active ? 'active' : ''}`}
              >
                <div className="conversation-icon">{item.icon}</div>

                <div className="conversation-content">
                  <div className="conversation-top">
                    <h3>{item.title}</h3>
                    <span>{item.time}</span>
                  </div>

                  <p>{item.text}</p>
                </div>

                {item.badge && <b className="unread-badge">{item.badge}</b>}
              </article>
            ))}
          </div>

          <button className="new-group-btn">
            <Plus size={20} />
            Tạo nhóm mới
          </button>
        </aside>

        <main className="chat-panel">
          <header className="chat-header">
            <div className="chat-room-info">
              <div className="room-avatar">👨‍👩‍👧‍👦</div>

              <div>
                <h2>General - Lớp 9A</h2>
                <p>
                  <span>35 thành viên</span>
                  <i />
                  Đang hoạt động
                </p>
              </div>
            </div>

            <div className="chat-actions">
              <Search size={25} />
              <EllipsisVertical size={24} />
            </div>
          </header>

          <div className="chat-body">
            <div className="today-label">Hôm nay</div>

            {messages.map((message, index) => (
              <article
                key={index}
                className={`message-row ${message.me ? 'me' : ''}`}
              >
                {!message.me && <div className="message-avatar">{message.avatar}</div>}

                <div className={`message-bubble ${message.teacher ? 'teacher' : ''}`}>
                  {!message.me && <h4>{message.name}</h4>}
                  <p>{message.text}</p>

                  <div className="message-meta">
                    <span>{message.time}</span>

                    {message.reaction && (
                      <b>
                        {message.reaction} {message.count}
                      </b>
                    )}

                    {message.me && <span className="seen">✓✓</span>}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <footer className="message-input">
            <Paperclip size={23} />
            <input placeholder="Nhập tin nhắn..." />
            <Smile size={23} />
            <button>
              <Send size={22} />
            </button>
          </footer>
        </main>

        <aside className="right-info-panel">
          <section className="mini-card">
            <div className="mini-card-header">
              <h3>
                <Pin size={24} />
                Ghim thông báo
              </h3>
              <EllipsisVertical size={22} />
            </div>

            <div className="pin-list">
              {pins.map((pin) => (
                <article className="pin-item" key={pin.title}>
                  <div className={`pin-icon ${pin.green ? 'green' : ''}`}>
                    {pin.icon}
                  </div>

                  <div>
                    <h4>{pin.title}</h4>
                    <p className="pin-author">{pin.author}</p>
                    <p>{pin.text}</p>

                    <div className="pin-bottom">
                      <span>{pin.date}</span>
                      <b className={pin.green ? 'green' : ''}>{pin.tag}</b>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <button className="see-all">Xem tất cả ›</button>
          </section>

          <section className="mini-card files-card">
            <div className="mini-card-header">
              <h3>
                <Folder size={24} />
                Tệp được chia sẻ
              </h3>
              <EllipsisVertical size={22} />
            </div>

            <div className="file-list">
              {files.map((file) => (
                <article className="file-item" key={file.title}>
                  <div className={`file-type ${file.color}`}>{file.type}</div>

                  <div>
                    <h4>{file.title}</h4>
                    <p>{file.meta}</p>
                  </div>

                  <Download size={20} />
                </article>
              ))}
            </div>

            <button className="see-all">Xem tất cả ›</button>
          </section>
        </aside>
      </div>
    </section>
  )
}