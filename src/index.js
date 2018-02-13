import DeliciousToasts from './component/DeliciousToasts';
import dToastsReducer from './reducer/deliciousToasts';
import { createToast, deleteToast } from './action/deliciousToasts';

export default DeliciousToasts;
export const reducer = dToastsReducer;
export const createToastAction = createToast;
export const deleteToastAction = deleteToast;
