import { DecorableLink } from '~/components'

export default function Index() {
  return (
    <div className="flex flex-col min-h-full justify-between">
      <DecorableLink to="/coding">
        {'=>'}Code{'==='}
      </DecorableLink>
      <DecorableLink to="/projects">Projects</DecorableLink>
      <div className="flex items-center mt-3">
        <div className="flex flex-col flex-1 pr-5">
          <p className="text-sm font-light mb-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aspernatur, quaerat alias cumque debitis eius dolores!
          </p>
          <button className="bg-warning text-black py-3 px-5 mt-3 rounded-sm">
            Check out
          </button>
        </div>

        <div className="flex-1 flex flex-col">
          <DecorableLink to="/work">Work</DecorableLink>
          <DecorableLink to="/surfing">Surfing</DecorableLink>
        </div>
      </div>
    </div>
  )
}
