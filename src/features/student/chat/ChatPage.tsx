import { ChatInput } from './components/ChatInput'
import { ChatMessages } from './components/ChatMessages'
import { ChatRoomHeader } from './components/ChatRoomHeader'
import { ConversationList } from './components/ConversationList'
import { RightPanel } from './components/RightPanel'
import './chat.css'

export default function ChatPage() {
  return (
    <div className="chat-page">
      <header className="chat-header">
        <h1>Trao đổi</h1>
      </header>

      <main className="chat-layout">
        <ConversationList />

        <section className="chat-center-panel chat-card">
          <ChatRoomHeader />
          <ChatMessages />
          <ChatInput />
        </section>

        <RightPanel />
      </main>
    </div>
  )
}