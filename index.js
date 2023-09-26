/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Navigation from './src/navigation'
import Information from './src/information';
import Proflie from './src/proflie';
import EditProflie from './src/editproflie';
import Welcome from './src/welcome';


AppRegistry.registerComponent(appName, () => App);

const App = () => {
    return(
        <Information/>
    )
}