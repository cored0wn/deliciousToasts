# deliciousToasts - a simple react plugin
[![NPM](https://nodei.co/npm/react-delicious_toasts.png)](https://nodei.co/npm/react-delicious_toasts/)

I've started a few weeks ago with react development. During playing in a real world app I came to the point where I've to show the user a notification. Through my previous projects I got to know and love [toastr](http://www.toastrjs.com/). I searched for an react implementation but nothing I've found was easy to understand or had few dependencies.

So I came up with the idea to implement notifications similar to toastr's own. Thanks to Robert Lyall's ([@robertlyall](https://github.com/robertlyall)) [blog post](https://www.natterly.com/blog/toast-notification-system-in-a-react-redux-application), I found a good place to start. So this is the result of a bloody beginner in react. Maybe it'll help someone else out there.

![Preview image of a toast](https://image.ibb.co/jgPcd7/2018_02_13_19_58_24.png)

Feel free to place pull requests or open issues :fire:

## Implementation Guide
##### 1. Installation
`TODO`

##### 2. Add the styles
import the scss file into your project
```javascript
import 'react-redux-toastr/src/styles/deliciousToasts.scss';
```

##### 3. Add the reducer
```javascript
import { combineReducers } from 'redux';
import {reducer as deliciousToasts} from 'react-deliciousToasts';
// [...]
const appReducer = combineReducers(
    {
        // [...]
        deliciousToasts,  // <- Mounted at deliciousToasts
    } );
// [...]
```

##### 4. Add the container component into your app (root)
```javascript
import React from "react";
import DeliciousToasts from 'react-deliciousToasts';

class App extends React.Component {

    // [...]

    render() {
        return (
            <div>
                {/*[...]*/}
                <DeliciousToasts />
                {/*[...]*/}
            </div>
        )
    }

}

export default App;
```

#### 5. Dispatch an action from anywhere (with options)
```javascript
import React from 'react';
import {connect} from 'react-redux';

import { createToastAction } from 'react-deliciousToasts';

const myFancyComponent = (props) => (
    <div>
        {/*[...]*/}
        <button onClick={() => props.createToast()}>Hallo</button>
        {/*[...]*/}
    </div>
);

const mapDispatchToProps = (dispatch) => {
    return {
            createToast: (options) => {
                dispatch(createToastAction(options));
            }
        }
};

export default connect((state) => {},mapDispatchToProps)(myFancyComponent);
```

### toast options
Currently a toast has only a few options because I don't need more any for my use case. Feel free to add more.
```javascript
const options = {
    icon: null, // any react element | max-width & height 30px
    color: "primary", // OPTIONAL any bootstrap bg-color
    message: 'So tasty! ' + String.fromCodePoint( 0x1F60B ), // any message (optional with emoji-codes)
    
    id: 12345 // OPTIONAL: If you want to delete your toast your from your application, you can set a manual ID here
}
```

### Questions?
If you have any trouble or question feel free to open an issue :wink:
