export const ADD_TOAST    = 'ADD_TOAST';
export const REMOVE_TOAST = 'REMOVE_TOAST';

const addToast = ( toast ) => {
    return {
        type: ADD_TOAST,
        payload: toast,
    };
};

const removeToast = ( id ) => {
    return {
        type: REMOVE_TOAST,
        payload: id,
    };
};

let id = 0;

const demoMessages = [
    'So tasty! ' + String.fromCodePoint( 0x1F60B ),
    'Mhh ... PIZZA ' + String.fromCodePoint( 0x1F355 ),
    'Oh yeah Pancakes! ' + String.fromCodePoint( 0x1F95E )
];

const defaultOptions = {
    icon: null,
    color: "primary"
};

export const createToast = ( options ) => {
    return dispatch => {

		let toast = {
                          id: id++,
                          ...defaultOptions,
                          ...options,
                      };
	
        if ( !toast.hasOwnProperty( 'message' ) )
        {
            toast['message'] = demoMessages[ Math.floor( Math.random() * demoMessages.length ) ];
        }

        return dispatch( addToast( toast ) )
    };
};

export const deleteToast = ( id ) => {
    return dispatch => dispatch( removeToast( id ) );
};
