import { Link as NavigationLink } from 'remix'

export function Link({ children, to, withBorder }) {
  return (
    <NavigationLink
      className={`text-4xl md:text-3xl lg:text-7xl mt-5 pb-5 lg:mt-0 md:pb-0 text-center transition-colors hover:text-primary ${
        withBorder ? 'border-b border-white' : 'border-none'
      }`}
      to={to}
    >
      {children}
    </NavigationLink>
  )
}
