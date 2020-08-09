import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';

const NoMatchPage = () => (
    <div>
        <h3>404 page not found</h3>
        <p>We are sorry but the page you are looking for does not exist.</p>
    </div>
);

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/* root route */}
                <Route path="/" exact component={Landing} />

                <Route path="/study" exact component={TeacherList} />
                <Route path="/give-classes" exact component={TeacherForm} />

                {/* didn't match route */}
                <Route component={NoMatchPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;