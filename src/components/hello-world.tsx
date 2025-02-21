interface ButtonProps {
  text?: string
}

export function HelloWorld(props: ButtonProps) {
  return <p className="text-blue px-5 py-2">Hello, {props.text || 'World'}!</p>
}
