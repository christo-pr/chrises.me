import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from 'remix'

import chrisesCss from '~/styles/chrises.css'
import { Nav } from '~/components'

export function meta() {
  return { title: 'Christofer Flores' }
}

export function links() {
  return [{ rel: 'stylesheet', href: chrisesCss }]
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  )
}

export function ErrorBoundary({ error }) {
  console.error(error)
  return (
    <Document title="Christofer Flores | Error">
      <h1> Server Error </h1>
    </Document>
  )
}

export function CatchBoundary() {
  let caught = useCatch()
  console.error(caught)

  return (
    <Document
      title={`Christofer Flores | ${caught.status} ${caught.statusText}`}
    >
      <h1>Not Found</h1>
    </Document>
  )
}

function Document({ children, title }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{title ? title : 'Christofer Flores'}</title>
        <Meta />
        <Links />
      </head>
      <body>
        <main className="bg-black text-white max-h-screen h-screen overflow-hidden py-4">
          <div className="container mx-auto">
            <Nav />
            {children}
          </div>
        </main>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
