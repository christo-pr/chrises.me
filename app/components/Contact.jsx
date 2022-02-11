import { Button } from './Button'

export function Contact() {
  return (
    <div className="flex flex-col flex-1 px-5">
      <p className="text-xs md:text-sm font-light mb-10">
        #BugMaker | #SurfingWaves | #Nerdy
        <br />
        #SunLover | #EnjoyingLife
      </p>
      <Button warning>
        <a href="mailto:cristofer.flort@gmail.com">
          Still wanna to contact me? 😆
        </a>
      </Button>
    </div>
  )
}
