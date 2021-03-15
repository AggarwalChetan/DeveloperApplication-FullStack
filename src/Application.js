import WelcomeSection from './developers/WS';
import WelcomeSectionDeveloperProfile from './developerProfile/WS';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function Application() {
    return(
        <Router>
            <Switch>
                <Route exact path ="/" component={WelcomeSection}/>
                <Route exact path ="/developerProfile" component={WelcomeSectionDeveloperProfile}/>
            </Switch>
        </Router>
    );
}

export default Application;