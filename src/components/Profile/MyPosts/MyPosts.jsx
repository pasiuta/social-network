import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import LikeCounter from "./Post/LikeCounter";

const MyPosts = (props) => {
    let postsElements =
        props.posts.map( posts => <Post message={posts.message}/>);
    return(
        <div className={classes.myBlocks}>
            <h3>My posts</h3>
        <div>
            <div>
            <textarea></textarea>
        </div>
            <div>
            <button>Add post</button>
        </div>
        <div>
            <button>Remove</button>
        </div>
        <div className={classes.posts}>
            {postsElements}
            <LikeCounter like ='15 likes'/>
            <LikeCounter like ='16 dislikes'/>

        </div>
        </div>

    </div>);

}


export default MyPosts;