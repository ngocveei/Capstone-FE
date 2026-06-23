import { FileArchive, FileText, Image, Link, Video } from 'lucide-react'

type FileIconProps = {
  type: string
}

export function FileIcon({ type }: FileIconProps) {
  const iconMap = {
    pdf: FileText,
    doc: FileArchive,
    xls: FileArchive,
    link: Link,
    img: Image,
    video: Video,
  }

  const Icon = iconMap[type as keyof typeof iconMap] ?? FileText

  return (
    <span className={`doc-file-icon ${type}`}>
      <Icon size={20} />
    </span>
  )
}