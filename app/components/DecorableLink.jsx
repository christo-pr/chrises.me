import { Link } from 'remix'

export function DecorableLink({ children, to, decorations }) {
  return (
    <div className="w-full text-6xl mt-3">
      <Link to={to}>{children}</Link>
    </div>
  )
}
