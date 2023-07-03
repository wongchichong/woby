/* IMPORT */
import useCleanup from './use_cleanup.js';
import useEventListener from './use_event_listener.js';
import { castArray } from '../utils/lang.js';
/* MAIN */
const useAbortController = (signals = []) => {
    signals = castArray(signals);
    const controller = new AbortController();
    const abort = controller.abort.bind(controller);
    const aborted = signals.some(signal => signal.aborted);
    if (aborted) {
        abort();
    }
    else {
        signals.forEach(signal => useEventListener(signal, 'abort', abort));
        useCleanup(abort);
    }
    return controller;
};
/* EXPORT */
export default useAbortController;