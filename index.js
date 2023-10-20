/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Navigation from './src/navigation'
import Welcome from './src/welcome'
import Quiz from './src/screens/signup/register/question/test/quiz';



AppRegistry.registerComponent(appName, () => App);

const App = () => {
    return(
        <Quiz/>
    )
}