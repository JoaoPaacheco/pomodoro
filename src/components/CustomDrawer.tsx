import { Minus, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

interface ICustomDrawer {
    focusTime: number;
    setFocusTime: React.Dispatch<React.SetStateAction<number>>;

    restTime: number;
    setRestTime: React.Dispatch<React.SetStateAction<number>>;
}

export function CustomDrawer({focusTime, setFocusTime, restTime, setRestTime}: ICustomDrawer) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="w-full mt-2 font-bold">Configurações</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Configuração</DrawerTitle>
            <DrawerDescription>Defina seus tempos de foco e descanso</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => setFocusTime(prev => prev - 5)}
                disabled={focusTime <= 5}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  {focusTime}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  Foco
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => setFocusTime(prev => prev + 5)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => setRestTime(prev => prev - 1)}
                disabled={restTime <= 1}

              >
                <Minus className="h-4 w-4" />
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  {restTime}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  Descanso
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => setRestTime(prev => prev + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button>Salvar</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
