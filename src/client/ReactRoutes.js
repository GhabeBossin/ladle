import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

function Routing() {
  return(
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/login" component={App} />
        <Route path="/admin/dashboard" component={AdminDash} />
        <Route exact path="/admin/words" component={Topics} />
        <Route path="/admin/words/:id" component={Topics} />
        <Route exact path="/admin/users" component={Topics} />
        {/* STRETCH : <Route path="/admin/users/:id" component={Topics} /> */}
      </div>
    </Router>
  )
}

export default Routing
