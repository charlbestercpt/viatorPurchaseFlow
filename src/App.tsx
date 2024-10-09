import React from 'react'
import { Zap } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold mb-4 animate-pulse">LEKKER</h1>
      <p className="text-xl mb-8">Your awesome React app is ready!</p>
      <Zap size={48} className="animate-bounce" />
    </div>
  )
}

export default App