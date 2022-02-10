import languageImages from '~/assets/lang'
import { ProgressBar } from '~/components'

export default function Coding() {
  // [<background>, <width(tw)>, <label>]
  const languageSettings = {
    angularjs: ['bg-angularjs', 'w-4/5', '80%'],
    css: ['bg-css', 'w-11/12', '90%'],
    database: ['bg-database', 'w-11/12', '90%'],
    docker: ['bg-docker', 'w-9/12', '70%'],
    git: ['bg-git', 'w-11/12', '90%'],
    html5: ['bg-html5', 'w-full', '100%'],
    javascript: ['bg-javascript', 'w-full', '100%'],
    nodejs: ['bg-nodejs', 'w-11/12', '90%'],
    php: ['bg-php', 'w-4/5', '80%'],
    python: ['bg-python', 'w-4/5', '80%'],
    react: ['bg-react', 'w-full', '100%'],
    ruby: ['bg-ruby', 'w-11/12', '90%'],
    typescript: ['bg-typescript', 'w-11/12', '90%'],
    webpack: ['bg-webpack', 'w-11/12', '90%'],
  }
  const languages = Object.keys(languageImages).map((l) => ({
    name: l,
    icon: languageImages[l],
    color: languageSettings[l][0],
    level: languageSettings[l][1],
    label: languageSettings[l][2],
  }))

  return (
    <div className="px-5 md:px-0">
      <h2 className="text-base lg:text-xl">Programming Experience</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
        {languages.map((lang) => (
          <li className="flex items-center gap-10" key={lang.name}>
            <img src={lang.icon} alt={lang.name} />
            <div className="flex-1">
              <ProgressBar
                value={lang.level}
                color={lang.color}
                label={lang.label}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

// <a href="https://iconscout.com/icon-pack/programming-language-logos" target="_blank">Programming Language Logos Icon Pack</a> by <a href="https://iconscout.com/contributors/icon-mafia">Icon Mafia</a> on <a href="https://iconscout.com">Iconscout</a>
