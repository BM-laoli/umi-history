import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { history } from 'umi'
import Hehe from './Hehe'
export default () => {
  return (
    <Router>
      <div>
        {/* <h1 className={styles.title}>Page index</h1> */}

        <h1 onClick={() => {
          history.push({
            pathname: '/HH',
            query: {
              key: 1
            }
          })
        }}>goto</h1>
        <Route path="/HH" component={Hehe}>
        </Route>
      </div>
    </Router>

  );
}
