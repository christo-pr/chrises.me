import { Link as NavigationLink } from '@remix-run/react'

export function Link({ children, to, withBorder, external }) {
  const classes = `text-4xl md:text-3xl lg:text-7xl mt-5 pb-5 lg:mt-0 md:pb-0 text-center transition-colors hover:text-primary ${
    withBorder ? 'border-b border-white' : 'border-none'
  }`

  if (external) {
    return (
      <a href={to} target="_blank" className={classes}>
        {children}
      </a>
    )
  }

  return (
    <NavigationLink className={classes} to={to}>
      {children}
    </NavigationLink>
  )
}
