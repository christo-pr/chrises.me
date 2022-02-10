import { BiLinkExternal as ExternalIcon } from 'react-icons/bi'
import projectsImages from '~/assets/projects'

export default function Projects() {
  const projectSettings = {
    reduxHunt: {
      title: 'Redux Hunt',
      text: "Want to learn how Redux works? How about a game? Redux-Hunt its exactly what you need! Gotta catch 'em all!",
      url: 'https://christo-pr.github.io/redux-jsconf/',
    },
    laCarlota: {
      title: 'La Carlota - Colima',
      text: 'non-profit site that list a few of restaurants that are in a little city in Mexico, called Colima (where I live). Definitely check it out if your near here',
      url: 'https://lacarlota.chrises.me/',
    },
    reactLegra: {
      title: 'React Legra',
      text: 'Fun library that takes the power of legraJS and give the ability to render lego-like component using React.',
      url: 'https://christo-pr.github.io/react-legra-site/',
    },
    dangerouslySetHtmlContent: {
      title: 'Dangerously Set Html Content',
      text: 'Small react library that allows you to render any valid html string that can contain a script it will execute it.',
      url: 'https://www.npmjs.com/package/dangerously-set-html-content',
    },
  }
  const projects = Object.keys(projectsImages).map((p) => ({
    name: p,
    icon: projectsImages[p],
    ...projectSettings[p],
  }))
  const blogpost = [
    {
      title: 'Create a nice-looking input range with only CSS!!',
      url: 'https://dev.to/christo_pr/create-a-nice-looking-input-range-with-only-css-4oa2',
    },
    {
      title: 'Render dangerous content with React',
      url: 'https://dev.to/christo_pr/render-dangerous-content-with-react-2j7j',
    },
    {
      title: 'RedwoodJS: Intro & Web Side',
      url: 'https://dev.to/christo_pr/redwoodjs-intro-web-side-3i8j',
    },
    {
      title: 'Beacon API',
      url: 'https://dev.to/christo_pr/beacon-api-1g7p',
    },
    {
      title: 'How do I write React',
      url: 'https://dev.to/christo_pr/how-do-i-write-react-4pan',
    },
    {
      title: 'Do you want to be a senior?',
      url: 'https://dev.to/christo_pr/you-really-want-to-be-a-senior-57g6',
    },
  ]

  return (
    <div className="px-5 md:px-0">
      <h2 className="text-base lg:text-xl border-b">My BlogPost</h2>
      <ul className="list-disc pl-14 my-8">
        {blogpost.map((blog) => (
          <li className="text-xs md:text-sm">
            <a
              href={blog.url}
              target="_blank"
              className="hover:text-primary hover:underline transition-colors"
            >
              {blog.title}
            </a>
          </li>
        ))}
      </ul>
      <h2 className="text-base lg:text-xl border-b">What I've Worked On</h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 auto-rows-min gap-20 mt-20">
        {projects.map((p) => (
          <li key={p.name} className="bg-white bg-opacity-10 rounded pb-4">
            <a
              href={p.url}
              target="_blank"
              className="hover:text-primary transition-colors"
            >
              <figure className="mb-10 border-b">
                <img
                  src={p.icon}
                  alt={p.name}
                  className="rounded-tl rounded-tr mx-auto"
                />
                <figcaption className="mt-4 px-2 flex items-center gap-2">
                  {p.title} <ExternalIcon size={12} />
                </figcaption>
              </figure>
              <p className="text-white px-2">{p.text}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
