import { PhysicsTopics } from "@/components/physics-topics"

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Physics Practice Sheets</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Download comprehensive physics practice sheets covering various topics from mechanics to modern physics.
          </p>
        </header>
        <PhysicsTopics />
      </div>
    </main>
  )
}

