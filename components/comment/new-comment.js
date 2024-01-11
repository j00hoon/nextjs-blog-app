import classes from "./new-comment.module.css";
import { useRef } from "react";


function NewComment(props) {

    const titleInputRef = useRef();
    const excerptInputRef = useRef();
    const featuredTrueInputRef = useRef();
    const featuredFalseInputRef = useRef();
    const contentInputRef = useRef();

    function sendCommentHandler(event) {
        event.preventDefault();

        let enteredFeatured;

        let featuredButton = document.getElementById('isFeaturedTrue');
        if (featuredButton.checked) {
            enteredFeatured = featuredTrueInputRef.current.value;
        } else {
            enteredFeatured = featuredFalseInputRef.current.value;
        }
        
        const enteredTitle = titleInputRef.current.value;
        const enteredExceprpt = excerptInputRef.current.value;
        const enteredContent = contentInputRef.current.value;

        props.onAddComment({
            title: enteredTitle,
            excerpt: enteredExceprpt,
            isFeatured: enteredFeatured,
            content: enteredContent
        });

        titleInputRef.current.value = "";
        excerptInputRef.current.value = "";
        contentInputRef.current.value = "";
        
    }


    return (
        <form className={classes.form}>
            <div className={classes.row}>
                <div className={classes.control}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="excerpt">Excerpt</label>
                    <input type="text" id="excerpt" ref={excerptInputRef} />
                </div>
            </div>
            <div className={classes.control}>
                <label htmlFor="isFeatured">Featured</label>
                <input type="radio" id="isFeaturedTrue" ref={featuredTrueInputRef} value="true" />True
                <input type="radio" id="isFeaturedFalse" ref={featuredFalseInputRef} value="false" />False
            </div>
            <div className={classes.control}>
                <label htmlFor="content">Content</label>
                <textarea id="content" rows='5' ref={contentInputRef}></textarea>
            </div>
            <button onClick={sendCommentHandler}>Submit</button>
        </form>
    );
}

export default NewComment;

