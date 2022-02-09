import { Link } from 'remix'
import { Button, Decoration } from '~/components'

export default function Index() {
  return (
    <div className="flex flex-col">
      <Link to="/coding" className="text-7xl text-center">
        <Decoration text="{" purple />
        <Decoration text="==>" success />
        code
        <Decoration text="<==" success />
        <Decoration text="}" purple />
      </Link>
      <Link to="/projects" className="text-7xl text-center">
        <Decoration text="..." warning />
        <Decoration text="{" purple />
        projects
        <Decoration text="}" purple />
        <Decoration text="..." warning />
      </Link>
      <div className="flex items-center mt-3">
        <div className="flex flex-col flex-1 pr-5">
          <p className="text-sm font-light mb-10">
            #BugMaker | #SurfingWaves | #Nerdy
            <br />
            #SunLover | #EnjoyingLife
          </p>
          <Button warning>Want to contact me?</Button>
        </div>

        <div className="flex-1 flex flex-col">
          <Link to="/work" className="text-7xl">
            work
            <Decoration text=" **" purple />
          </Link>
          <Link to="/surfing" className="text-7xl">
            <Decoration text="++" success />
            surfing
            <Decoration text="++" success />
          </Link>
        </div>
      </div>
    </div>
  )
}
