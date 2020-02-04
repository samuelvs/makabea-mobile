import { createStackNavigator } from 'react-navigation-stack';
// import Main from './pages/main';
// import Product from './pages/product';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Main from './pages/Main';

const Routes = createStackNavigator(
    {
        // SignIn,
        // SignUp,
        Main,
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#7E8CE6"
            },
            headerTintColor: "#FFF"
        }
    },
);

export default Routes;