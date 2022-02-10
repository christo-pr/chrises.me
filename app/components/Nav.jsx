import { Link } from 'remix'
import { VscGithub as GHIcon, VscTwitter as TwitterIcon } from 'react-icons/vsc'
import { DiNpm as NpmIcon } from 'react-icons/di'

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
      <div>
        <ul className="flex items-center gap-3">
          <li>
            <a href="https://github.com/christo-pr" target="_blank">
              <GHIcon
                size={40}
                className="hover:text-primary transition-colors"
              />
            </a>
          </li>
          <li>
            <a href="https://www.npmjs.com/~crystal-stream" target="_blank">
              <NpmIcon
                size={40}
                className="hover:text-primary transition-colors"
              />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/christo_pr" target="_blank">
              <TwitterIcon
                size={40}
                className="hover:text-primary transition-colors"
              />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
