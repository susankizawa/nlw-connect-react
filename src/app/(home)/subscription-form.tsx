'use client'

// Importing external dependencies
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

// Importing backend API methods
import { subscribeToEvent } from '@/http/api'

// Importing images
import { ArrowRight, Check, Mail, User } from 'lucide-react'

// Importing local components
import { Button } from '@/components/button'
import {
  TextInputField,
  TextInputIcon,
  TextInputRoot,
} from '@/components/text-input'

const subscriptionSchema = z.object({
  name: z.string().min(2, 'Digite seu nome completo'),
  email: z.string().email('Digite um e-mail válido'),
})

type SubscriptionSchema = z.infer<typeof subscriptionSchema>

export function SubscriptionForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionSchema),
  })

  async function onSubscribe({ name, email }: SubscriptionSchema) {
    setStatus('loading')

    try {
      const referrerId = searchParams.get('referrer')
      const { subscriberId } = await subscribeToEvent({
        name,
        email,
        referrerId,
      })

      setStatus('success')

      setTimeout(() => router.push(`/invite/${subscriberId}`), 500) // 500ms = 0.5s
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        {/* Name field */}
        <div className="space-y-2">
          <TextInputRoot>
            <TextInputIcon>
              <User />
            </TextInputIcon>
            <TextInputField placeholder="Nome completo" {...register('name')} />
          </TextInputRoot>
          {/* Errors */}
          {errors.name && (
            <p className="text-danger text-xs font-semibold">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email field */}
        <div className="space-y-2">
          <TextInputRoot>
            <TextInputIcon>
              <Mail />
            </TextInputIcon>
            <TextInputField placeholder="E-mail" {...register('email')} />
          </TextInputRoot>
          {/* Errors */}
          {errors.email && (
            <p className="text-danger text-xs font-semibold">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        className={status === 'idle' ? 'enabled' : 'disabled'}
      >
        {status === 'idle' && (
          <>
            Confirmar
            <ArrowRight />
          </>
        )}
        {status === 'loading' && 'Processando...'}
        {status === 'success' && (
          <>
            Inscrição confirmada!
            <Check />
          </>
        )}
      </Button>
    </form>
  )
}
