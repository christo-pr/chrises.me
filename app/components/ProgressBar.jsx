export function ProgressBar({ value, color, label }) {
  return (
    <div className={`h-10 rounded bg-white bg-opacity-10 flex items-center`}>
      <div
        className={`h-full flex items-center justify-center text-black rounded ${value} ${color}`}
      >
        {label}
      </div>
    </div>
  )
}
