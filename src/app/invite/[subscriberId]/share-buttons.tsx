// Importing external dependencies
import { SocialIcon } from 'react-social-icons'

interface ShareButtonsProps {
  url: string
}

export function ShareButtons(props: ShareButtonsProps) {
  const socialMediaButtons = [
    {
      network: 'X',
      message: 'Venha participar do evento e concorra a prêmios exclusivos!',
      hashtags: ['webdev', 'devstage', 'react', 'nodejs'],
    },
    {
      network: 'WhatsApp',
      message: 'Venha participar do evento e concorra a prêmios exclusivos!',
      hashtags: [],
    },
    {
      network: 'LinkedIn',
      message: '',
      hashtags: [],
    },
    {
      network: 'Facebook',
      message: '',
      hashtags: [],
    },
  ]

  // Helper function to generate the full share URL dynamically
  const getShareUrl = (button: (typeof socialMediaButtons)[number]) => {
    switch (button.network) {
      case 'X':
        return `https://x.com/intent/tweet?text=${encodeURIComponent(button.message)}&url=${encodeURIComponent(props.url)}&hashtags=${encodeURIComponent(button.hashtags.join(','))}`
      case 'WhatsApp':
        return `https://api.whatsapp.com/send?text=${encodeURIComponent(button.message)}%20${encodeURIComponent(props.url)}`
      case 'LinkedIn':
        return `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(props.url)}`
      case 'Facebook':
        return `https://facebook.com/sharer.php?u=${encodeURIComponent(props.url)}`
      default:
        return props.url
    }
  }

  return (
    <div className="flex flex-row gap-2">
      {socialMediaButtons.map(button => {
        return (
          <div
            key={button.network}
            className="flex flex-col items-center gap-2"
          >
            <SocialIcon url={getShareUrl(button)} target="_blank" />
            <p className="text-gray-300">{button.network}</p>
          </div>
        )
      })}
    </div>
  )
}
