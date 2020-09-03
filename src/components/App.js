import React from 'react'
import {Route,Router, Switch} from 'react-router-dom'
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history'

const App =()=>{
    return(
        <div className="ui container" style={{marginTop:20}}>
            <Router history={history}>
                <Header />
                <Switch >
                    <Route exact path="/" component={StreamList} />
                    <Route  path="/streams/new" exact component={StreamCreate} />
                    <Route  path="/streams/delete/:id" exact component={StreamDelete} />
                    <Route  path="/streams/edit/:id" exact component={StreamEdit} />
                    <Route  path="/streams/:id"  exact component={StreamShow} />
                </Switch>
             </Router>
        </div>
    )
}

export default App;