import { Link as NavigationLink } from 'remix'

export function Link({ children, to, withBorder }) {
  return (
    <NavigationLink
      className={`text-7xl text-center transition-colors hover:text-primary ${
        withBorder ? 'border-b border-white' : 'border-none'
      }`}
      to={to}
    >
      {children}
    </NavigationLink>
  )
}
