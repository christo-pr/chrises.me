import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import ReactVerticalStyles from 'react-vertical-timeline-component/style.min.css'

import micheladaio from '~/assets/michelada.png'
import xebia from '~/assets/xebia.jpeg'
import sa from '~/assets/sa.png'

export default function Work() {
  const jobs = [
    {
      role: 'Sr. Frontend Developer at Xebia',
      place: 'Remote',
      description: `Developing and improving on both, the admin tool and the website of BPF (Better Place Forests).
        Working with Ruby on Rails for their backend platform and a custom CMS for the website.`,
      date: '2021 - present',
      icon: <img src={xebia} alt="Xebia" className="rounded-full" />,
      contentStyle: { backgroundColor: '#91D7E0', color: '#121218' },
    },
    {
      role: 'Sr. Javascript Developer at michleda.io',
      place: 'Colima, Mexico',
      description: `Working as Javascript developer for many platforms, from simple CMS sites, to large ecommerce enterprise apps. 
        Working with Ruby on Rails, Shopify, & Javascript`,
      date: '2018 - 2021',
      icon: (
        <img src={micheladaio} alt="micheladaio" className="rounded-full" />
      ),
      contentStyle: { backgroundColor: '#30b594', color: '#121218' },
    },
    {
      role: 'FullStack Developer at Software Allies',
      place: 'Cd. Guzman, Mexico',
      description:
        'Working with technologies like Salesforce & Lightning Components, and also mobile development with React Native for social newtwork-like apps',
      date: '2106 - 2018',
      icon: <img src={sa} alt="sa" className="rounded-full" />,
      contentStyle: { backgroundColor: '#DBDEEB', color: '#121218' },
    },
  ]

  return (
    <VerticalTimeline lineColor="#6F6CD9">
      {jobs.map((job, i) => (
        <VerticalTimelineElement
          key={i}
          date={job.date}
          dateClassName="text-black underline md:text-white"
          contentStyle={job.contentStyle}
          icon={job.icon}
          iconClassName="rounded-full"
        >
          <h3>{job.role}</h3>
          <h4>{job.place}</h4>
          <p>{job.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  )
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: ReactVerticalStyles,
    },
  ]
}
