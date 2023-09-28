/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Navigation from './src/navigation'
import Welcome from './src/welcome'



AppRegistry.registerComponent(appName, () => App);

const App = () => {
    return(
        <Navigation/>
    )
}