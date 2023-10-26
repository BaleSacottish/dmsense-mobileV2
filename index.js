/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Navigation from './src/navigation'
import Welcome from './src/welcome'
import Ketone from './src/screens/graph/ketone';
import Sugar from './src/screens/graph/sugar';



AppRegistry.registerComponent(appName, () => App);

const App = () => {
    return(
        <Ketone/>
    )
}