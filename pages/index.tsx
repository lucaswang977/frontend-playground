import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Link href="/smzu">React state management</Link>
      <Link href="/todolist">Todolist with local storage</Link>
      <Link href="/cssplay">CSS playground pages</Link>
    </main>
  )
}
