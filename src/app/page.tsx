import { ThemeModeToggle } from '@/components/atoms/buttons/ThemeModeToggle'
import { DatePicker } from '@/components/atoms/input/DatePicker'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DatePicker />
      <ThemeModeToggle/>
    </main>
  )
}