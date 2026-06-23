import type { PropsWithChildren } from 'react'

const SPIRAL_COUNT = 16

export function NotebookFrame({ children }: PropsWithChildren) {
  return (
    <main className="relative z-30 h-[clamp(610px,72vh,700px)] w-full rounded-[26px] bg-[#FFFDF8] shadow-[0_18px_38px_rgba(80,45,15,0.20)]">
      <div
        aria-hidden="true"
        className="absolute -left-[18px] top-7 z-30 flex h-[calc(100%-56px)] w-[50px] flex-col justify-between"
      >
        {Array.from({ length: SPIRAL_COUNT }, (_, index) => (
          <span
            className="block h-3 w-[49px] shrink-0 rounded-full border border-[#77736d] bg-[linear-gradient(180deg,#f3f2ef_0%,#8c8984_28%,#dedbd5_52%,#716e69_76%,#d9d7d2_100%)] shadow-[0_1px_2px_rgba(45,35,25,0.32)]"
            key={index}
          />
        ))}
      </div>

      <div className="relative z-30 h-full overflow-y-auto overflow-x-hidden rounded-[26px] px-16 py-12 text-[#123B73]">
        {children}
      </div>
    </main>
  )
}
