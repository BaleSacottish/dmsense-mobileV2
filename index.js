/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Navigation from './src/navigation'
import Welcome from './src/welcome'

import Passwordregister from './src/screens/signup/register/passwordregis'



AppRegistry.registerComponent(appName, () => App);

const App = () => {
    return(
        <Navigation/>
        // <Passwordregister/>
    )
}