import type { LucideIcon } from 'lucide-react'
import { Bell, ChevronRight } from 'lucide-react'

type SummaryCardProps = {
  icon: LucideIcon
  title: string
  value: string
  lines: string[]
  action?: string
  badge?: string
  bell?: boolean
  dot?: boolean
}

export function SummaryCard({ action, badge, bell, dot, icon: Icon, lines, title, value }: SummaryCardProps) {
  return (
    <article className="overview-card summary-card">
      <div className="summary-card-body">
        <div className="summary-heading">
          <span className="summary-icon"><Icon size={19} strokeWidth={2.1} /></span>
          <h2>{title}</h2>
          {bell && <Bell className="summary-bell" size={19} strokeWidth={2} />}
          {dot && <span aria-hidden="true" className="orange-dot" />}
        </div>
        <div className="summary-content">
          <strong className="summary-value">{value}</strong>
          {badge && <span className="paid-badge">✓&nbsp; {badge}</span>}
          {lines.map((line) => <p key={line}>{line}</p>)}
        </div>
      </div>
      {action && (
        <button className="summary-action" type="button">
          <span>{action}</span><ChevronRight size={17} strokeWidth={2.4} />
        </button>
      )}
    </article>
  )
}
