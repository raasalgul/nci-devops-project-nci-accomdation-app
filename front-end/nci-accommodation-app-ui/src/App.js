import './App.css';
import Header from './components/header/Header';
import {tabs} from './components/constants/Contants';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
         <Route
            path={tabs.Home.url}
            component={tabs.Home.file}
          />
        <Route
            path={tabs.Profile.url}
            component={tabs.Profile.file}
          />
        <Route
            path={tabs.About.url}
            component={tabs.About.file}
          />
        <Route
            path={tabs.Contact_us.url}
            component={tabs.Contact_us.file}
          />
          <Route
            path={tabs.Sign_in.url}
            component={tabs.Sign_in.file}
          />
     <Route exact path="/">
    {/* <Redirect to="/login" /> */}
</Route>
</Switch>
    </div>
    </Router>
  );
}

export default App;
