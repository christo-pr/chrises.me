import { Link } from 'remix'

export function Nav() {
  return (
    <header className="flex justify-between mb-16 px-5 md:px-0">
      <div>
        <Link to={'/'}>logo</Link>
      </div>
      <div>
        <ul className="flex gap-10">
          <li>Menu 1</li>
          <li>Menu 2</li>
        </ul>
      </div>
      <div>social</div>
    </header>
  )
}
