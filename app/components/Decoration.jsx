export function Decoration({ text, primary, purple, warning, success }) {
  let classes = []

  switch (true) {
    case primary:
      classes = [...classes, 'text-primary']
      break
    case purple:
      classes = [...classes, 'text-purple']
      break
    case warning:
      classes = [...classes, 'text-warning']
      break
    case success:
      classes = [...classes, 'text-success']
      break
    default:
      break
  }

  return <span className={classes.join(' ')}>{text}</span>
}
