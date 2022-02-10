import { Decoration, Link, Contact } from '~/components'

export default function Index() {
  return (
    <div className="flex flex-col">
      {/* Code Link */}
      <Link to="coding" withBorder>
        <Decoration text="{" purple />
        <Decoration text="==>" success />
        code
        <Decoration text="<==" success />
        <Decoration text="}" purple />
      </Link>

      {/* Projects Link */}
      <Link to="projects" withBorder>
        <Decoration text=".." warning />
        <Decoration text="{" purple />
        projects
        <Decoration text="}" purple />
        <Decoration text=".." warning />
      </Link>

      <div className="flex items-center">
        {/* Contact Form */}
        <div className="hidden lg:block">
          <Contact />
        </div>

        {/* Work & Misc Links */}
        <div className="flex-1 flex flex-col">
          <Link to="work" withBorder>
            <Decoration text="** " purple />
            work
            <Decoration text=" **" purple />
          </Link>
          <Link to="surfing">
            <Decoration text="++" success />
            surfing
            <Decoration text="++" success />
          </Link>
        </div>
      </div>

      {/* Contact Form */}
      <div className="block lg:hidden text-center mt-10">
        <Contact />
      </div>
    </div>
  )
}
