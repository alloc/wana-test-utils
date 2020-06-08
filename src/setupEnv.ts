import { globals } from 'wana'

export interface EnvConfig {
  act: (effect: () => any) => any
}

export const setupEnv = ({ act }: EnvConfig) => {
  globals.batchedUpdates = effect => void act(effect)
}
