/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Navigation from './src/navigation'
import Welcome from './src/welcome'
import PassWordReg from './src/screens/signup/register/PinReg';
import PinReg from './src/screens/signup/register/PinReg';
import PinLogin from './src/screens/signup/login/PinLogin';
import Question from './src/screens/signup/register/question/page1';
import QuestionPage1 from './src/screens/signup/register/question/quespage1';
import QuestionPage2 from './src/screens/signup/register/question/quespage2';




AppRegistry.registerComponent(appName, () => App);

const App = () => {
    return(
        <QuestionPage2/>
    )
}