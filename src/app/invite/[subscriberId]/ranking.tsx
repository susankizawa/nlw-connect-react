// Importing external dependencies
import Image from 'next/image'

// Importing backend API methods
import { getRanking } from '@/http/api'

// Importing images
import medal1 from '../../../assets/medal-1.svg'
import medal2 from '../../../assets/medal-2.svg'
import medal3 from '../../../assets/medal-3.svg'

export async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((subscriber, index) => {
          const position = index + 1

          return (
            <div
              key={subscriber.id}
              className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
            >
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{position}º</span> |{' '}
                {subscriber.name}
              </span>
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {subscriber.score}
              </span>

              {position === 1 && (
                <Image
                  src={medal1}
                  alt="gold medal"
                  className="absolute top-0 right-8"
                />
              )}

              {position === 2 && (
                <Image
                  src={medal2}
                  alt="silver medal"
                  className="absolute top-0 right-8"
                />
              )}

              {position === 3 && (
                <Image
                  src={medal3}
                  alt="copper medal"
                  className="absolute top-0 right-8"
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
