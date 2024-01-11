import classes from "./comment-list.module.css";


function CommentList(props) {
    return (
        <ul className={classes.comments}>
            {props.comments.map(comment => 
                <li key={comment._id}>
                    <p>{comment.title}</p>
                    <p>{comment.excerpt}</p>
                    <p>{comment.content}</p>
                    <p>{comment.postSlug}</p>
                </li>
            )}
        </ul>
    );
}

export default CommentList;