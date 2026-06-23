import { Bell, ChevronLeft, ChevronRight, Plus } from 'lucide-react'

const subjects = [
  { name: 'Toán 9A ⭐', teacher: 'Cô Lan' },
  { name: 'Tiếng Anh 9A', teacher: 'Thầy Nam' },
  { name: 'Vật lý 9A', teacher: 'Thầy Minh' },
  { name: 'Ngữ văn 9A', teacher: 'Cô Hoa' },
] as const

const controlClass =
  'grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#FFFDF8] text-[#0B3A78] shadow-[0_4px_10px_rgba(80,45,15,0.14)] transition-transform hover:-translate-y-0.5'

export function NotebookTabs() {
  return (
    <header className="absolute bottom-[calc(100%-2px)] left-[7%] right-[7%] z-40 flex h-16 items-end gap-2.5">
      <button aria-label="Môn học trước" className={`${controlClass} mb-2.5 mr-1`} type="button">
        <ChevronLeft size={23} strokeWidth={2.5} />
      </button>

      <div className="flex min-w-0 flex-1 items-end gap-2.5">
        {subjects.map((subject, index) => (
          <button
            className={`h-16 min-w-0 flex-1 rounded-t-[17px] px-3 text-center text-[#123B73] shadow-[0_-2px_9px_rgba(80,45,15,0.07)] ${
              index === 0
                ? 'border-t-4 border-[#0B3A78] bg-[#FFFDF8]'
                : 'border border-b-0 border-[#ead7bd] bg-[#F7E8D4] pt-[3px]'
            }`}
            key={subject.name}
            type="button"
          >
            <span className="block truncate text-[16px] font-extrabold leading-6">{subject.name}</span>
            <span className="block truncate text-[13px] font-medium opacity-80">{subject.teacher}</span>
          </button>
        ))}
      </div>

      <button aria-label="Môn học tiếp theo" className={`${controlClass} mb-2.5 ml-1`} type="button">
        <ChevronRight size={23} strokeWidth={2.5} />
      </button>
      <button aria-label="Thêm môn học" className={`${controlClass} mb-2.5 bg-[#0B3A78] text-white`} type="button">
        <Plus size={23} strokeWidth={2.3} />
      </button>
      <button aria-label="Thông báo" className="absolute -right-40 bottom-2.5 grid h-10 w-10 place-items-center text-[#0B3A78]" type="button">
        <Bell size={24} strokeWidth={2.2} />
      </button>
    </header>
  )
}
