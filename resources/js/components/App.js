import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab} from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {Provider} from 'react-redux'
import store from './../store/index'
import jwtDecode from 'jwt-decode'
import Landing from './Landing'
import Login from './Login'
import Register from './Register'
import Header from './Ui/Header'
import Films from './Films'
import CreateFilm from './CreateFilm'
import setAuthToken from './../utils/setAuthToken'
import * as Types from './../actions/types'
import Interceptor from './../utils/interceptor'
import SingleFilm from './SingleFilm';

library.add(fab, fas)


class App extends Component {

 
    componentDidMount(){
      const token = localStorage.getItem('auth_token')
      if(token){
          let decode = jwtDecode(token)
         
          setAuthToken(token)
          store.dispatch({
              type: Types.SET_USER,
              payload: {
                  user: decode
              }
          })
      }
    
    }
    
      render () {
        return (
          <BrowserRouter>
            <div >
             <Header/>
            <Switch>
              <Route exact  path ="/" component={Landing}/>
              <Route  path ="/login"  component={Login}/>
              <Route  path ="/register"  component={Register}/>
              <Route  exact  path ="/films" component={Films} />
              <Route exact path="/films/create" component={CreateFilm} />
              <Route path="/films/:name" component={SingleFilm} />
    
            </Switch>
            </div>
          </BrowserRouter>
        )
      }
    }
export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
}
