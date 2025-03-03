'use client'

// Importing external dependencies
import { useState } from 'react'

// Importing images
import { Check, Copy, Link } from 'lucide-react'

// Importing local components
import { IconButton } from '@/components/icon-button'
import {
  TextInputField,
  TextInputIcon,
  TextInputRoot,
} from '@/components/text-input'

interface InviteLinkInputProps {
  inviteLink: string
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  const [isCopied, setIsCopied] = useState(false)

  function copyInviteLink() {
    // Sets isCopied to true for 1 second which results in the copy icon being shown by default
    // until the copy link button is clicked, then it changes to a check icon for 1s before
    // reverting to the copy icon

    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 1000) // 1000ms = 1s

    navigator.clipboard.writeText(inviteLink)
  }

  return (
    <TextInputRoot>
      <TextInputIcon>
        <Link className="size-5" />
      </TextInputIcon>
      <TextInputField defaultValue={inviteLink} readOnly />
      <IconButton className="-mr-2" onClick={copyInviteLink}>
        {/* Shows Check icon if isCopied is true and a Copy icon if not */}
        {isCopied ? <Check className="size-5" /> : <Copy className="size-5" />}
      </IconButton>
    </TextInputRoot>
  )
}
