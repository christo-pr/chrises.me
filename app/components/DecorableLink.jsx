import { Link } from 'remix'

export function DecorableLink({ children, to, decorations = [] }) {
  const [leftDecorations, rightDecorations] = decorations

  return (
    <Link to={to} className="w-full text-6xl mt-3">
      {leftDecorations}
      {children}
      {rightDecorations}
    </Link>
  )
}
