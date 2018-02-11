import {connect} from "react-redux";
import React, {Component} from 'react';
import {getComments} from "./actions";
import {Table,Badge} from 'react-bootstrap';
import TimeAgo from 'timeago-react';
import {Link, withRouter} from 'react-router-dom';

class CommentsView extends Component {

    constructor(props) {
        super(props);

        // this.handleTitleChange = this.handleTitleChange.bind(this);
        // this.handleBodyChange = this.handleBodyChange.bind(this);
        // this.handleAuthorChange = this.handleAuthorChange.bind(this);
        // this.handleCategoryChange = this.handleCategoryChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.isCreating = this.isCreating.bind(this);
        //
        this.commentClickHandler = this.commentClickHandler.bind(this);
        // /*
        // isLoading flag to prevent flicker.
        // Set isLoading flag to suppress render of post
        // in case a previous post is already in props.
        // "creating" is true if no postId has been supplied
        //  */
        // this.state = {
        //     isLoading: true,
        //     // selectedCategory: "b",
        //     creating: props.postId == null ? true : false,
        //     post: {id: '', title: '', body: '', timestamp: '', author: '', category: ''}
        // };
        //
        // /*
        // If params passed, this is an Edit; use the ID
        // to get the required POST
        //  */
        // if (props.postId) {
        //     /* Async fetch for the supplied post id */
        //     props.getPost(props.postId);
        // }

        this.props.getComments(this.props.postId);
    }

    /**
     * Return true if Creating a NEW post
     * otherwise false
     * @returns {*}
     */
    // isCreating() {
    //     return this.state.creating;
    // }
    //
    // handleTitleChange(event) {
    //     this.setState({post: {...this.state.post, title: event.target.value}});
    // }
    //
    // handleBodyChange(event) {
    //     this.setState({post: {...this.state.post, body: event.target.value}});
    // }
    //
    // handleAuthorChange(event) {
    //     this.setState({post: {...this.state.post, author: event.target.value}});
    // }
    //
    // handleCategoryChange(e) {
    //     this.setState({post : {...this.state.post, category: e.target.value}});
    // }

    /**
     * Async update of current state to server
     * @param e
     */
    // handleSubmit(e) {
    //     e.preventDefault();
    //     const post = this.state.post;
    //     if (this.state.creating) {
    //         /*
    //         CREATE
    //          */
    //         const randomId = Math.random().toString(16).substr(2);
    //         const newPost = {...post, id: randomId, timestamp: Date.now()};
    //         this.props.createPost(newPost);
    //     }
    //     else {
    //         /*
    //         UPDATE
    //          */
    //         this.props.putPost(post.id, post.title, post.body, post.author);
    //     }
    // }


    // /**
    //  * Redux will map received properties from the server
    //  * then they will be copied into Controlled Component state
    //  * for local handling; want to avoid continual updates to
    //  * server for optimal performance
    //  * @param nextProps
    //  */
    // componentWillReceiveProps(nextProps) {
    //     this.setState({post: {...nextProps.post}, creating: false});
    // }

    commentClickHandler= (commentId) => () => {
        console.log('Clicked comment',commentId);
        this.props.history.push(`/comment/edit/${commentId}`);
    };

    render() {
        const props = this.props;
        const comments = this.props.comments;

        console.log('RENDER',comments);

        return (
            <div>
                <h1>Comments <Link to={`/comment/create/${props.postId}`}>
                    <small><span className="glyphicon glyphicon-plus-sign"/></small>
                </Link></h1>

                <Table>
                    <thead>
                    <tr>
                        <th>Created</th>
                        <th>Comment</th>
                        <th>Author</th>
                        <th>Vote Score</th>
                    </tr>

                    </thead>
                    <tbody>
                    {
                        comments && comments.map(
                            comment =>
                                <tr key={comment.id} onClick={this.commentClickHandler(comment.id,props.postId)}>
                                    <td><TimeAgo datetime={comment.timestamp}/></td>
                                    <td>{comment.body}</td>
                                    <td>{comment.author}</td>
                                    <td><Badge>{comment.voteScore}</Badge></td>
                                </tr>
                        )
                    }
                    </tbody>
                </Table>
            </div>
        )


            // <Form componentClass="fieldset" horizontal>
            //     <Row>
            //         <Col xs={6}>
            //             <h1>Post</h1>
            //         </Col>
            //     </Row>
            //
            //     <Row>
            //         <Col xs={8}>
            //             <Row>
            //                 <Col xs={2}>
            //                     <ControlLabel>Title</ControlLabel>
            //                 </Col>
            //                 <Col xs={10}>
            //                     <FormControl type="text" value={(!props.isLoading && post.title) || ''}
            //                                  onChange={this.handleTitleChange}/>
            //                 </Col>
            //             </Row>
            //             <Row>
            //                 <Col xs={2}>
            //                     <ControlLabel>Body</ControlLabel>
            //                 </Col>
            //                 <Col xs={10}>
            //                     <FormControl type="text" componentClass="textarea" rows={5}
            //                                  value={( post.body) || ''}
            //                                  onChange={this.handleBodyChange}/>
            //                 </Col>
            //             </Row>
            //
            //             <Row>
            //                 <Col xs={2}>
            //                     <ControlLabel>Author</ControlLabel>
            //                 </Col>
            //                 <Col xs={10}>
            //                     {this.state.creating?
            //                         <FormControl type="text" value={(!props.isLoading && post.author) || ''}
            //                                      onChange={this.handleAuthorChange}/>
            //                         :
            //                         <Well>{post.author}</Well>
            //                     }
            //                 </Col>
            //             </Row>
            //
            //             <Row>
            //                 <Col xs={2}>
            //                     <ControlLabel>Category</ControlLabel>
            //                 </Col>
            //                 <Col xs={10}>
            //                     {this.state.creating ?
            //                         <FormControl componentClass="select"   value={post.category}
            //                                      onChange={this.handleCategoryChange}>
            //                             {
            //                                 props.categories.map(
            //                                     val =>
            //                                         <option key={val.name} value={val.name}>{val.name}</option>
            //
            //                                 )
            //                             }
            //                         </FormControl>
            //                         :
            //                         <Well>{post.category}</Well>
            //                     }
            //                 </Col>
            //             </Row>
            //
            //             <Row>
            //                 <Col xsOffset={2} xs={2}>
            //                     <Button type="submit" onClick={this.handleSubmit} disabled={props.isLoading}
            //                             bsStyle="primary">Submit</Button>
            //                     {/*<Button bsStyle="warning" onClick={this.cancelEdit}>Cancel</Button>*/}
            //                 </Col>
            //             </Row>
            //
            //         </Col>
            //
            //          {/*No need to show votes and comment count when creating NEW post */}
            //         {this.state.creating ||
            //         <Col xsOffset={1} xs={3}>
            //
            //             <Row>
            //                 <Col xs={12} className="text-right">
            //                     <ControlLabel>Votes</ControlLabel>
            //                     <Badge className="myFormControl">{post.voteScore}</Badge>
            //                 </Col>
            //             </Row>
            //             <Row>
            //                 <Col xs={12} className="text-right">
            //                     <ControlLabel>Comment Count</ControlLabel>
            //                     <Badge className="myFormControl">{post.commentCount}</Badge>
            //                 </Col>
            //             </Row>
            //         </Col>
            //         }
            //
            //     </Row>
            //
            // </Form>

    }

}


const mapStateToProps = (state, ownProps) => {
    console.log('state',state);
    return {postId: ownProps.postId, comments: state.PostDetailViewReducer.comments }
};

const mapDispatchToProps = dispatch => ({
    getComments: (postId) => dispatch(getComments(postId)),
    // putPost: (id, title, body) => dispatch(updatePost(id, title, body)),
    // createPost: (postDetails) => dispatch(createPost(postDetails))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentsView));
