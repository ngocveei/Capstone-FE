import { CalendarDays, FileText, Lightbulb, TrendingUp, WalletCards } from 'lucide-react'
import { AttendanceCard } from './components/AttendanceCard'
import { StudyPlanCard } from './components/StudyPlanCard'
import { SummaryCard } from './components/SummaryCard'
import { UpcomingAssignmentsCard } from './components/UpcomingAssignmentsCard'
import './overview.css'

export default function OverviewPage() {
  return (
    <div className="overview-page">
      <header className="overview-header">
        <h1>Lớp Toán 9A</h1>
      </header>

      <section className="summary-grid">
        <SummaryCard dot icon={TrendingUp} lines={['Trung bình chung', 'Cập nhật: 12/05/2024']} title="Điểm hiện tại" value="8.7" />
        <SummaryCard action="Xem chi tiết" badge="Đã thanh toán" icon={WalletCards} lines={['Đến ngày 30/09/2024']} title="Thông báo học phí" value="Kỳ thu 1" />
        <SummaryCard action="Xem chi tiết" bell icon={FileText} lines={['Bài tập chương 3', '17:00, Thứ 6 (17/05)']} title="Hạn nộp bài sắp tới" value="Cần nộp" />
        <SummaryCard action="Xem lịch học" dot icon={CalendarDays} lines={['Toán 9A', 'Phòng online 2']} title="Lịch học hôm nay" value="18:30 - 20:00" />
      </section>

      <section className="details-grid">
        <AttendanceCard />
        <UpcomingAssignmentsCard />
        <StudyPlanCard />
      </section>

      <footer className="overview-footer"><Lightbulb size={21} />Hãy giữ vững tiến độ và hoàn thành mục tiêu học tập của bạn!</footer>
    </div>
  )
}
