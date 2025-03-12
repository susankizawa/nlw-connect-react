// Importing external dependencies
import Image from 'next/image'
import { Suspense } from 'react'

// Importing images
import { Radio } from 'lucide-react'
import logo from '../../assets/logo.svg'

import { Button } from '@/components/button'
// Importing local components
import { SubscriptionForm } from './subscription-form'

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col justify-center gap-16">
      {/* Logo and event title */}
      <div className="flex flex-col gap-8 items-center md:items-start">
        <Image src={logo} alt="devstage" width={108.5} height={30} />

        <h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left">
          <span className="text-blue">CodeCraft</span>
          Summit 2025
        </h1>
      </div>

      <div className="flex gap-5 items-stretch flex-col md:flex-row">
        {/* About event */}
        <div className="flex-1 bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-heading font-semibold text-gray-200 text-xl">
              Sobre o evento
            </h2>
            <span className="text-purple font-semibold text-xs flex items-center gap-2">
              <Radio className="size-5" />
              AO VIVO
            </span>
          </div>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Um evento feito por e para pessoas desenvolvedoras apaixonadas por
            criar soluções inovadoras e compartilhar conhecimento. Vamos
            mergulhar nas tendências mais recentes em desenvolvimento de
            software, arquitetura de sistemas e tecnologias emergentes, com
            palestras, workshops e hackathons.
            <br />
            <br />
            Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito
          </p>
        </div>

        {/* Subscription */}
        <div className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]">
          <h2 className="font-heading font-semibold text-gray-200 text-xl">
            Inscrição
          </h2>

          <Suspense>
            <SubscriptionForm />
          </Suspense>

          {/* Divider */}
          <div className="flex flex-row w-full justify-center items-center font-semibold text-gray-200">
            <hr className="flex-1" />
            <span className="px-5">Ou se inscrever usando</span>
            <hr className="flex-1" />
          </div>

          {/* Subscribe through other identity providers */}
          <a
            href="https://discord.com/oauth2/authorize?client_id=1348405607564054538&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3030%2Foauth%2Fdiscord%2Fcallback&scope=identify+email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Login pelo Discord</Button>
          </a>
        </div>
      </div>
    </div>
  )
}
