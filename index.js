/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Navigation from './src/navigation'
import Welcome from './src/welcome'
import Testpassword from './src/screens/signup/register/passwordregis';
import TestPassReg from './src/screens/signup/register/testPassReg';
import PassWordReg from './src/screens/signup/register/testPassReg';



AppRegistry.registerComponent(appName, () => App);

const App = () => {
    return(
        <PassWordReg/>
    )
}