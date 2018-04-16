import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { DashboardComponent } from "./dashboard.component";

const render = Component => {
  ReactDOM.render(
    <Component />,
    document.getElementById('root')
  );
};

render(DashboardComponent);

if ((module as any).hot) {
  (module as any).hot.accept('./dashboard.component', () => {
    const NextComponent = require('./dashboard.component').DashboardComponent;
    render(NextComponent);
  });
}
