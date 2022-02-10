import { DiJavascript as JavacriptIcon } from 'react-icons/di'
import { ProgressBar } from '~/components'

export default function Coding() {
  const languages = [
    {
      icon: '',
      level: '',
      color: '',
    },
  ]

  return (
    <div>
      <h2 className="text-base lg:text-xl">Programming Experience</h2>
      <ul className="mt-10">
        <li className="flex items-center gap-10">
          <JavacriptIcon size={150} />
          <div className="flex-1">
            <ProgressBar />
          </div>
        </li>
        <li className="flex items-center gap-10">
          <JavacriptIcon size={150} />
          <div className="flex-1">
            <ProgressBar />
          </div>
        </li>
        <li className="flex items-center gap-10">
          <JavacriptIcon size={150} />
          <div className="flex-1">
            <ProgressBar />
          </div>
        </li>
      </ul>
    </div>
  )
}
