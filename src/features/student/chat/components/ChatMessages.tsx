const messages = [
  ['left', '👦', 'Minh', 'Mai kiểm tra Toán nha các bạn!', '10:30', '❤️ 12'],
  ['left', '👧', 'Lan', 'Cảm ơn Minh đã nhắc nhé! 😊', '10:31', '👍 5'],
  ['right', '', 'Mình', 'Mình đã ôn xong chương 3 rồi!', '10:32', '🎉 4'],
  ['left', '👨', 'Nam', 'Ai có đề cương ôn tập gửi mình với', '10:33', ''],
  ['teacher', '👨‍🏫', 'Thầy Nam', 'Thầy đã gửi đề cương ôn tập ở mục Tệp được chia sẻ nhé các em.', '10:34', '👍 10'],
] as const

export function ChatMessages() {
  return (
    <div className="chat-messages">
      <div className="today-label">Hôm nay</div>

      {messages.map(([side, avatar, name, text, time, react]) => (
        <div className={`message-row ${side}`} key={`${name}-${time}`}>
          {side !== 'right' && <span className="message-avatar">{avatar}</span>}

          <div className="message-bubble">
            <b>{name}</b>
            <p>{text}</p>
            <small>{time}</small>
            {react && <em>{react}</em>}
          </div>
        </div>
      ))}
    </div>
  )
}