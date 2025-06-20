
/* IMPORT */

import useScheduler from '../hooks/use_scheduler'
import type { Disposer, ObservableMaybe } from '../types'

/* MAIN */

const useAnimationLoop = (callback: ObservableMaybe<FrameRequestCallback>): Disposer => {
  const stack = new Error()

  return useScheduler({
    callback,
    loop: true,
    cancel: cancelAnimationFrame,
    schedule: requestAnimationFrame,
    stack
  })

}

/* EXPORT */

export default useAnimationLoop