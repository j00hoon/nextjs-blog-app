import { useRef } from "react";
import classes from "./new-comment.module.css";



function NewComment2 (props) {

    const titleInputRef = useRef();
    const commentInputRef = useRef();


    function sendCommentHandler2(event) {
        event.preventDefault();
        
        const enteredTitle = titleInputRef.current.value;
        const enteredComment = commentInputRef.current.value;

        props.addCommentHandler({
            title: enteredTitle,
            comment: enteredComment
        });        
    }

    return (
        <form className={classes.form}>
            <div className={classes.row}>
                <div className={classes.control}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" ref={titleInputRef} />
                </div>
            </div>

            <div className={classes.control}>
                <label htmlFor="comment">Your comment</label>
                <textarea id="comment" rows="5" ref={commentInputRef} />
            </div>
            <button onClick={sendCommentHandler2}>Submit!</button>
        </form>
    );
}

export default NewComment2;