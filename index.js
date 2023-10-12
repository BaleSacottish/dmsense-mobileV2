/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Navigation from './src/navigation'
import Welcome from './src/welcome'
import QuestionPage4 from './src/screens/signup/register/question/quespage4';
import QuestionPage5 from './src/screens/signup/register/question/quespage5';
import QuestionPage6 from './src/screens/signup/register/question/quespage6';
import QuestionPage7 from './src/screens/signup/register/question/quespage7';
import QuestionPage8 from './src/screens/signup/register/question/quespage8';
import QuestionPage9 from './src/screens/signup/register/question/quespage9';
import QuestionPage10 from './src/screens/signup/register/question/quespage10';




AppRegistry.registerComponent(appName, () => App);

const App = () => {
    return(
        <QuestionPage10/>
    )
}