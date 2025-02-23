'use client'

// Importing images
import { Copy, Link } from 'lucide-react'

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
  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink)
  }

  return (
    <TextInputRoot>
      <TextInputIcon>
        <Link className="size-5" />
      </TextInputIcon>
      <TextInputField defaultValue={inviteLink} readOnly />
      <IconButton className="-mr-2">
        <Copy className="size-5" onClick={copyInviteLink} />
      </IconButton>
    </TextInputRoot>
  )
}
