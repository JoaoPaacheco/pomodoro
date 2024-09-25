import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import './index.css'

export function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-[url('src/assets/forest-starry-sky-night.jpg')] bg-cover p-8">
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
      </main>
    </div>
  )
}
