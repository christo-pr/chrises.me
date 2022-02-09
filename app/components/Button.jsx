export function Button({ children, primary }) {
  let classes = [
    'py-3 px-5 mt-3 rounded-sm transition-all shadow-none hover:shadow-slide',
  ]

  switch (true) {
    case primary:
      classes = [
        ...classes,
        'bg-primary text-black hover:shadow-purple hover:text-white',
      ]
      break
    default:
      classes = [
        ...classes,
        'bg-primary text-black hover:shadow-purple hover:text-white',
      ]
      break
  }

  return <button className={classes.join(' ')}>{children}</button>
}
