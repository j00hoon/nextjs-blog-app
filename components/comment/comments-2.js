import { useEffect, useState } from "react";
import classes from "./comments.module.css";
import NewComment2 from "./new-comment-2";



function Comments2 () {

    const [showComments, setShowComments] = useState(false);

    useEffect(() => {

    }, [showComments]);



    function toggleCommentsHandler() {
        setShowComments((prevStatus) => !prevStatus);
    }

    function addCommentHandler (data) {
        const title = data.title;
        const comment = data.comment;

        console.log('title : ' + title);
        console.log('comment : ' + comment);

        
    }



    return (
        <section className={classes.comments}>
            <button onClick={toggleCommentsHandler}>
                {showComments ? 'Hide ~ ' : 'Show ~ '} Comments
            </button>
            {showComments && <NewComment2 addCommentHandler={addCommentHandler} />}
        </section>
    );
}

export default Comments2;