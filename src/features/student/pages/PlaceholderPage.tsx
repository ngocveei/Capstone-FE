type PlaceholderPageProps = {
  title: string
}

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return <h1 className="text-3xl font-extrabold text-[#123B73]">{title}</h1>
}
