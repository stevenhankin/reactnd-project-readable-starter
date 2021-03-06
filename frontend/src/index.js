import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './styles/App.css';
import App from './scenes/Default/index.js';
import CategoryView from './scenes/Default/scenes/CategoryView/index';
import PostDetailView from './scenes/PostDetailView/index';
import PostDeleteView from './scenes/PostDetailView/scenes/PostDeleteView/index';
import CreateEditView from './scenes/PostDetailView/scenes/CreateEditPost/index';
import Post404 from './scenes/components/Invalid404';
import CreateEditComment from './scenes/CreateEditComment/index'
import {Grid, Col, Row, Image} from 'react-bootstrap';
import {Provider} from 'react-redux';
import {store} from './store';
import Toast from './scenes/components/Toast'


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Grid className="App container">

                <Row className="hdr">

                    <Col xs={10}>
                        <Row>
                            <h1>Readable</h1>

                        </Row>
                        <Row>
                            <h3>Udacity Project showcasing Redux with React</h3>
                        </Row>

                    </Col>

                    <Col xs={2}>
                        <a href="https://stevenhankin.github.io/project-readable/">
                            <Image rounded
                                   src="https://www.gravatar.com/avatar/bbed4d2a6f627e45d8de9ed6e0c0a468?s=100"/>
                        </a>
                    </Col>

                </Row>
                <Row>
                    <Toast/>
                </Row>
                <Row>
                    <Switch>
                        <Route exact path="/" component={App}/>
                        <Route exact path="/:category" component={CategoryView}/>
                        <Route path="/post/edit/:postId" component={CreateEditView}/>
                        <Route path="/post/create" component={CreateEditView}/>
                        <Route exact path="/:category/:postId" component={PostDetailView}/>
                        <Route path="/post/delete/:postId" component={PostDeleteView}/>
                        <Route path="/post/:postId/comment/create" component={CreateEditComment}/>
                        <Route path="/post/:postId/comment/:commentId/edit" component={CreateEditComment}/>
                        <Route component={Post404}/>
                    </Switch>
                </Row>
            </Grid>
        </Router>
    </Provider>,
    document.getElementById('root')
);
