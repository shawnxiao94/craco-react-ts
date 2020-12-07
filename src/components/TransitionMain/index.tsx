import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {Route, Switch} from 'react-router-dom';

interface TransitionMainProps {
  children: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function TransitionMain({children}: TransitionMainProps) {
  return (
    <Route
      render={({location}) => (
        <TransitionGroup className="layout__route">
          <CSSTransition key={location.pathname} classNames="layout__route" timeout={300}>
            <Switch location={location}>{children}</Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    ></Route>
  );
}

export default TransitionMain;
