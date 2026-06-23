import { Paperclip, Send, Smile } from 'lucide-react'

export function ChatInput() {
  return (
    <div className="chat-input">
      <Paperclip size={20} />
      <input placeholder="Nhập tin nhắn..." />
      <Smile size={20} />
      <button type="button">
        <Send size={19} />
      </button>
    </div>
  )
}