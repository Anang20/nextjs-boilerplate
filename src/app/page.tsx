import { ModeToggle } from '@/components/atoms/buttons/ModeToggle'
import { DatePicker } from '@/components/atoms/input/DatePicker'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DatePicker />
      <ModeToggle/>
    </main>
  )
}