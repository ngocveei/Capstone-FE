import { CalendarDays, Search, SlidersHorizontal, UserRound } from 'lucide-react'

export function DocumentFilters() {
  return (
    <div className="document-toolbar">
      <button type="button">
        <CalendarDays size={17} />
        Tất cả loại
      </button>

      <button type="button">
        <SlidersHorizontal size={17} />
        Tất cả chủ đề
      </button>

      <button type="button">
        <SlidersHorizontal size={17} />
        Tất cả định dạng
      </button>

      <button type="button">
        <UserRound size={17} />
        Người upload
      </button>

      <button type="button">
        <CalendarDays size={17} />
        Ngày upload
      </button>

      <label className="document-search">
        <input placeholder="Tìm kiếm tài liệu..." />
        <Search size={18} />
      </label>
    </div>
  )
}