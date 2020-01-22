import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import CreateExpensePage from '../components/CreateExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


    // switch moves through the routes and stops when there is a match
    // then if there are no match then it will continue moving till it get to the bottom
    // and finds the notfound page
    const AppRouter = () => (
        <BrowserRouter>
        <div>
          <Header/>
          <Switch>
          <Route path= '/' component={ExpenseDashBoardPage} exact={true}/>
          <Route path= '/create' component={CreateExpensePage}/>
          <Route path= '/edit/:id' component={EditExpensePage}/>
          <Route path= '/help' component={HelpPage}/>
          <Route component={NotFoundPage}/>
        </Switch>
        </div>
        </BrowserRouter>
    );

    export default AppRouter;