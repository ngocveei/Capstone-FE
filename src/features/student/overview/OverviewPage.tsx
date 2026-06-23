import { CalendarDays, FileText, Lightbulb, Target, TrendingUp, WalletCards } from 'lucide-react'
import { AttendanceCard } from './components/AttendanceCard'
import { StudyPlanCard } from './components/StudyPlanCard'
import { SummaryCard } from './components/SummaryCard'
import { UpcomingAssignmentsCard } from './components/UpcomingAssignmentsCard'
import './overview.css'

export default function OverviewPage() {
  return (
    <div className="overview-page">
      <div className="overview-inner">
        <header className="overview-header">
          <div className="overview-title-block">
            <span className="overview-eyebrow">TRANG HỌC SINH</span>
            <h1>Lớp Toán 9A</h1>
            <p className="overview-desc">Tổng hợp nhanh tiến độ, mục tiêu và các điểm nhấn của Toán 9A.</p>
            <i aria-hidden="true" className="overview-underline" />
          </div>
          <aside className="overview-highlight">
            <span className="overview-highlight-icon"><Target size={22} strokeWidth={2.2} /></span>
            <div>
              <p>Mục tiêu tuần này</p>
              <strong>Hoàn thành bài chương 3</strong>
              <span className="overview-highlight-badge">Tiến độ tốt</span>
            </div>
          </aside>
        </header>

        <main className="overview-content">
          <section className="summary-grid overview-top-grid">
            <SummaryCard dot icon={TrendingUp} lines={['Trung bình chung', 'Cập nhật: 12/05/2024']} title="Điểm hiện tại" value="8.7" />
            <SummaryCard action="Xem chi tiết" badge="Đã thanh toán" icon={WalletCards} lines={['Đến ngày 30/09/2024']} title="Thông báo học phí" value="Kỳ thu 1" />
            <SummaryCard action="Xem chi tiết" bell icon={FileText} lines={['Bài tập chương 3', '17:00, Thứ 6 (17/05)']} title="Hạn nộp bài sắp tới" value="Cần nộp" />
            <SummaryCard action="Xem lịch học" dot icon={CalendarDays} lines={['Toán 9A', 'Phòng online 2']} title="Lịch học hôm nay" value="18:30 - 20:00" />
          </section>
          <section className="details-grid overview-bottom-grid">
            <AttendanceCard />
            <UpcomingAssignmentsCard />
            <StudyPlanCard />
          </section>
          <footer className="overview-footer"><Lightbulb size={21} />Hãy giữ vững tiến độ và hoàn thành mục tiêu học tập của bạn!</footer>
        </main>
      </div>
    </div>
  )
}
