import {
  CalendarDays,
  ClipboardList,
  Folder,
  Home,
  MessageSquare,
  type LucideIcon,
} from 'lucide-react'
import { NavLink, type NavLinkRenderProps } from 'react-router-dom'

type MenuItem = {
  label: string
  path: string
  icon: LucideIcon
  color: string
  activeColor: string
  textColor: string
  end?: boolean
}

const menuItems: MenuItem[] = [
  {
    label: 'Tổng quan',
    path: '/student',
    icon: Home,
    color: '#B8BDC8',
    activeColor: '#123B73',
    textColor: '#4A5568',
    end: true,
  },
  {
    label: 'Lịch học',
    path: '/student/schedule',
    icon: CalendarDays,
    color: '#CFE4FF',
    activeColor: '#2563EB',
    textColor: '#4E6E9E',
  },
  {
    label: 'Bài tập',
    path: '/student/assignments',
    icon: ClipboardList,
    color: '#FFE7B3',
    activeColor: '#B75A1A',
    textColor: '#A56A1A',
  },
  {
    label: 'Tài liệu',
    path: '/student/documents',
    icon: Folder,
    color: '#D5F0D7',
    activeColor: '#2E7D32',
    textColor: '#4B7A52',
  },
  {
    label: 'Trao đổi',
    path: '/student/discussions',
    icon: MessageSquare,
    color: '#F8D1DA',
    activeColor: '#D62828',
    textColor: '#A2576A',
  },
]

export function NotebookSidebar() {
  return (
    <nav aria-label="Điều hướng sổ tay" className="absolute -right-[125px] top-20 z-20 flex flex-col gap-2.5">
      {menuItems.map(({ activeColor, color, end, icon: Icon, label, path, textColor }) => (
        <NavLink
          className={({ isActive }: NavLinkRenderProps) =>
            `flex h-[68px] w-[155px] flex-row-reverse items-center justify-start gap-2 rounded-2xl pl-10 pr-3 text-right text-[13px] transition-all duration-200 ${
              isActive
                ? 'scale-[1.03] font-extrabold opacity-100 shadow-[0_12px_28px_rgba(0,0,0,0.18)]'
                : 'scale-100 font-semibold opacity-90 shadow-[0_6px_16px_rgba(0,0,0,0.08)] hover:translate-x-1 hover:scale-[1.01] hover:opacity-100'
            }`
          }
          end={end}
          key={path}
          style={({ isActive }: NavLinkRenderProps) => ({
            backgroundColor: isActive ? activeColor : color,
            color: isActive ? '#FFFFFF' : textColor,
          })}
          to={path}
        >
          <Icon aria-hidden="true" className="shrink-0" size={22} strokeWidth={2.2} />
          <span className="whitespace-nowrap">{label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
