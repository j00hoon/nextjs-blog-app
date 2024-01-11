import { useEffect, useState } from "react";
import classes from "./comments.module.css";
import NewComment from "./new-comment";
import CommentList from "./comment-list";



function Comments(props) {

    const { postSlug } = props;

    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);
    const [isFetching, setIsFetching] = useState(false);



    useEffect(() => {
        if (showComments) {
            setIsFetching(true);

            //console.log("postSlug : " + postSlug);

            fetch(`/api/comment_blog/${postSlug}`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }

                    response.json().then(data => {
                        throw new Error(data.message || "Something went wrong 1");
                    });
                })
                .then(data => {
                    setComments(data.comments);
                    setIsFetching(false);
                })
        }
    }, [showComments]);



    function toggleCommentsHandler() {
        setShowComments((prevStatus) => !prevStatus);
    }

    function addCommentHandler(data) {
        const title = data.title;
        const excerpt = data.excerpt;
        const isFeatured = data.isFeatured;
        const content = data.content;
        
        // console.log("title : " + title);
        // console.log("excerpt : " + excerpt);
        // console.log("isFeatured : " + isFeatured);
        // console.log("content : " + content);
        // console.log("postSlug : " + postSlug);

        const enteredComment = {
            title : title,
            excerpt : excerpt,
            isFeatured : isFeatured,
            content : content,
            postSlug : postSlug
        }

        fetch(`/api/comment_blog/${postSlug}`, {
            method : 'POST',
            body: JSON.stringify(enteredComment),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            response.json().then(data => {
                throw new Error(data.message || "Something went wrong! POST comment");
            })
        });
    }



    return (
        <section className={classes.comments}>
            <button onClick={toggleCommentsHandler}>
                {showComments ? 'Hide' : 'Show'} Comments
            </button>
            {showComments && <NewComment onAddComment={addCommentHandler} />}
            {showComments && !isFetching &&  <CommentList comments={comments} />}
        </section>
    );
}

export default Comments;