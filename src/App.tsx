import { useState } from 'react'
import { CustomDrawer } from './components/CustomDrawer'
import { Button } from './components/ui/button'
import './index.css'
import { RadialCounter } from './components/RadialCounter'

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
      <main className='p-4 bg-white/10 backdrop-blur rounded-lg w-full flex flex-col items-center justify-center gap-2'>
        <h1 className='text-3xl font-bold' hidden={isActive}>Tudo pronto?</h1>
        <RadialCounter />
        <div className='w-full'>
          <Button className='w-full font-bold' onClick={beginPomodoro} hidden={isActive}>Começar</Button>
          <CustomDrawer focusTime={focusTime} restTime={restTime} setFocusTime={setFocusTime} setRestTime={setRestTime}/>
        </div>
      </main>
    </div>
  )
}
