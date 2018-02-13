import DeliciousToasts from './component/DeliciousToasts';
import dToastsReducer from './reducer/deliciousToasts';
import * as dToastsActions from './action/deliciousToasts';

export default DeliciousToasts;
export const reducer = dToastsReducer;
export const createToast = dToastsActions.createToast;
export const deleteToast = dToastsActions.deleteToast;
