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
  
  return (
    // <div className="flex h-screen items-center justify-center bg-[url('src/assets/forest-starry-sky-night.jpg')] bg-cover p-8">
    <div className="flex h-screen items-center justify-center bg-cover p-8 bg-gray-800">
      <main className='p-4 bg-white/10 backdrop-blur rounded-lg w-full text-white'>
        <div className='mb-4'>
          <div>
            <Label htmlFor='concentrationMinutes'>Tempo de concentração:</Label>
            <Input type='number' name='concentrationMinutes'/>
          </div>
          <div>
            <Label htmlFor='restMinutes'>Tempo de pausa:</Label>
            <Input type='number' name='restMinutes'/>
          </div>
        </div>
        <Button className='w-full font-bold'>Começar</Button>
        <CustomDrawer focusTime={focusTime} restTime={restTime} setFocusTime={setFocusTime} setRestTime={setRestTime}/>
      </main>
    </div>
  )
}
