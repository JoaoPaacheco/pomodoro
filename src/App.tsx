import { useState } from 'react'
import { CustomDrawer } from './components/customDrawer'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import './index.css'

export function App() {
  const [focusTime, setFocusTime] = useState<number>(25)
  const [restTime, setRestTime] = useState<number>(5)
  const [pomodoroAmount, setPomodoroAmount] = useState<number>(3)
  const [isActive, setIsActive] = useState<boolean>(false)

  const beginPomodoro = () => {
    setIsActive(prev => !prev)
  }

  console.log(isActive)
  
  return (
    <div className="flex h-screen items-center justify-center bg-[url('src/assets/forest-starry-sky-night.jpg')] bg-cover p-8">
    {/* <div className="flex h-screen items-center justify-center bg-cover p-8 bg-gray-800 dark"> */}
      <main className='p-4 bg-white/10 backdrop-blur rounded-lg w-full'>
        <h1 className='text-center text-3xl font-bold'>Título</h1>
        <Button className='w-full font-bold' onClick={beginPomodoro}>Começar</Button>
        <CustomDrawer focusTime={focusTime} restTime={restTime} setFocusTime={setFocusTime} setRestTime={setRestTime}/>
      </main>
    </div>
  )
}
