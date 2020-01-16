import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashBoardPage = () => (
  <div>
      This is from my dashboard component
  </div>
);

const CreateExpensePage = () => (
    <div>
        This is from my expense component
    </div>
  );
  const EditExpensePage = () => (
    <div>
        This is from my edit page
    </div>
  );
  const HelpPage = () => (
    <div>
        This is from my help page
    </div>
  );

  const NotFoundPage = () => (
    <div>
        404! - <Link to="/">Go home</Link>
    </div>
  );

  const Header = () => (
    <header>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
      <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
  );

  // switch moves through the routes and stops when there is a match
  // then if there are no match then it will continue moving till it get to the bottom
  // and finds the notfound page
const routes = (
    <BrowserRouter>
    <div>
      <Header/>
      <Switch>
      <Route path= '/' component={ExpenseDashBoardPage} exact={true}/>
      <Route path= '/create' component={CreateExpensePage}/>
      <Route path= '/edit' component={EditExpensePage}/>
      <Route path= '/help' component={HelpPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
    </div>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));
