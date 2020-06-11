import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './../store/index'
import Interceptor from './../utils/interceptor'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

function App() {
    return (
        <div className="container">

        <BrowserRouter>
            <div >
             <Header/>
            <Switch>
              <Route exact  path ="/" component={Landing}/>
              <Route  path ="/login"  component={Login}/>
              <Route  path ="/register"  component={Register}/>
              <Route  exact  path ="/films" component={Films} />
              <Route  path ="/films/create" component={CreateFilm} />
              <Route  path ="/films/:name" component={SingleFilm} />
    
            </Switch>
            </div>
          </BrowserRouter>
        </div>
    );
}

export default App;




ReactDOM.render(<Provider store ={store}><App /></Provider>, document.getElementById('app'))