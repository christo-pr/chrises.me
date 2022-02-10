import { Link } from 'remix'

import Logo from '~/assets/logo.png'

export function Nav() {
  return (
    <header className="flex justify-between mb-16 px-5 md:px-0">
      <Link
        to={'/'}
        className="flex items-center flex-grow-0 gap-2 hover:text-primary transition-colors"
      >
        <img src={Logo} alt="Chrises.me" className="h-10 w-10" />
        <span className="hidden lg:block">Christofer Flores</span>
      </Link>
      <div>social</div>
    </header>
  )
}
