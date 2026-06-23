import backgroundImage from '../../assets/images/background.png'

export function NotebookBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[#FCE7CC] bg-bottom bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '100% 100%' }}
    />
  )
}
