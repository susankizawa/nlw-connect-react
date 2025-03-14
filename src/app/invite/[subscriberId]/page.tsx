// Importing external dependencies
import Image from 'next/image'

// Importing images
import logo from '../../../assets/logo.svg'

// Importing local components
import { InviteLinkInput } from './invite-link-input'
import { Ranking } from './ranking'
import { ShareButtons } from './share-buttons'
import { Stats } from './stats'

interface InviteProps {
  params: Promise<{
    subscriberId: string
  }>
}

export default async function Invite(props: InviteProps) {
  const { subscriberId } = await props.params

  const inviteLink = `${process.env.BACKEND_URL}/invites/${subscriberId}`

  return (
    <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
      <div className="flex flex-col gap-10 w-full max-w-[550px]">
        {/* Logo */}
        <Image src={logo} alt="devstage" width={108.5} height={30} />

        {/* Subscription confirmed */}
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">
            Inscrição confirmada!
          </h1>
          <p className="text-gray-300">
            Para entrar no event, acesse o link enviado para seu e-mail.
          </p>
        </div>

        {/* Invite and stats */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold font-heading text-gray-200 leading-none">
              Indique e Ganhe
            </h2>
            <p className="text-gray-300">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>

          <ShareButtons url={inviteLink} />

          <InviteLinkInput inviteLink={inviteLink} />

          <Stats subscriberId={subscriberId} />
        </div>
      </div>

      <Ranking />
    </div>
  )
}
