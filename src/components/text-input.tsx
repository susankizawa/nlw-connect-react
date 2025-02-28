import type { ComponentProps } from 'react'

interface TextInputRootProps extends ComponentProps<'div'> {
  error?: boolean
}

export function TextInputRoot({ error = false, ...props }: TextInputRootProps) {
  return (
    <div
      data-error={error}
      className="flex items-center gap-2 group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 w-full focus-within:border-gray-100 data-[error=true]:border-danger"
      {...props}
    />
  )
}

// interface TextInputIconProps extends ComponentProps<'span'> {}

export function TextInputIcon(props: ComponentProps<'span'>) {
  return (
    <span
      className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
      {...props}
    />
  )
}

// interface TextInputFieldProps extends ComponentProps<'input'> {}

export function TextInputField(props: ComponentProps<'input'>) {
  return <input className="flex-1 outline-0 placeholder-gray-400" {...props} />
}
