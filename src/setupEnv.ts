import { globals as G } from 'wana'

export interface EnvConfig {
  act: (effect: () => any) => any
  globals?: {
    batchedUpdates: typeof G.batchedUpdates
  }
}

export const setupEnv = ({ act, globals = G }: EnvConfig) => {
  globals.batchedUpdates = effect => void act(effect)
}
