import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import CustomButton from '@/app/exam/CustomButton'
import InfoIcon from '@/svg/InfoIcon'

export const metadata: Metadata = {
  title: '난이도 선택 - BDSM 고사',
}

export default async function Page() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center gap-12 p-4 sm:p-8 md:p-16 lg:p-24">
      <Link href="/" className="flex place-items-center gap-2 whitespace-nowrap">
        <h1>By</h1> <Image src="/bdsm-logo.svg" alt="BDSM Logo" width={24} height={24} priority />
      </Link>
      <h2 className="flex items-stretch gap-1 text-xl font-semibold">
        난이도
        <button className="group relative text-xs">
          <InfoIcon width="16" />
          <div
            className="max-w-64 pointer-events-none absolute top-full z-50 translate-x-[-50%] p-2 text-sm text-gray-500 opacity-0 transition-opacity duration-300 hover:opacity-100 group-hover:opacity-100 group-focus:opacity-100"
            role="tooltip"
          >
            <div className="grid h-full w-full gap-1 rounded-lg border border-gray-200 bg-white p-4 shadow">
              <h3 className="whitespace-nowrap">난이도 = 문제 개수</h3>
              <p className="whitespace-nowrap font-normal">문제와 선택지 순서는 매번 랜덤</p>
            </div>
          </div>
        </button>
        를 선택해주세요
      </h2>
      <nav className="grid text-center sm:mb-0 sm:grid-cols-2 sm:text-left lg:mb-0 lg:grid-cols-4">
        <Link
          href="/exam/10?i=1"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h3 className="mb-3 text-2xl font-semibold">
            Junior &nbsp;
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <Image src="/images/arrow-right.svg" alt="right-arrow" width={20} height={20} />
            </span>
          </h3>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            BDSM에 대한 초보자 또는 호기심 많은 사용자를 대상으로 한 기본적인 테스트{' '}
            <span className="text-xs">(10개)</span>
          </p>
        </Link>
        <Link
          href="/exam/20?i=1"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h3 className="mb-3 text-2xl font-semibold">
            Senior &nbsp;
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <Image src="/images/arrow-right.svg" alt="right-arrow" width={20} height={20} />
            </span>
          </h3>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            더 깊이 있는 지식을 시험해 보고 싶은 사용자를 위한 테스트 <span className="text-xs">(20개)</span>
          </p>
        </Link>
        <Link
          href="/exam/30?i=1"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h3 className="mb-3 text-2xl font-semibold">
            Staff &nbsp;
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <Image src="/images/arrow-right.svg" alt="right-arrow" width={20} height={20} />
            </span>
          </h3>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            BDSM에 대한 깊은 경험을 가진 사람들을 위한 도전적인 테스트 <span className="text-xs">(30개)</span>
          </p>
        </Link>
        <CustomButton />
      </nav>
    </main>
  )
}
