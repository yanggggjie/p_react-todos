import { create } from 'zustand'
import { produce } from 'immer'

interface BearStore {
  bears: number
  inc: () => void
  dec: () => void
  reset: () => void
}

export default create<BearStore>((setState) => {
  return {
    bears: 0,
    inc: () => {
      setState(
        produce((state: BearStore) => {
          ++state.bears
        }),
      )
    },
    dec: () => {
      setState(
        produce((state: BearStore) => {
          --state.bears
        }),
      )
    },
    reset: () => {
      setState(
        produce((state: BearStore) => {
          state.bears = 0
        }),
      )
    },
  }
})
