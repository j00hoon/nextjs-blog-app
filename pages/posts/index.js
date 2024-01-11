import { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

import Head from "next/head";



// const DUMMY_POSTS =[
//     {
//         title: "test title", 
//         image: "test-image.png", 
//         excerpt: "test excerpt", 
//         date: "2023-12-25", 
//         slug: "test-slug1"
//     },
//     {
//         title: "test title", 
//         image: "test-image.png", 
//         excerpt: "test excerpt", 
//         date: "2023-12-25", 
//         slug: "test-slug2"
//     },
//     {
//         title: "test title", 
//         image: "test-image.png", 
//         excerpt: "test excerpt", 
//         date: "2023-12-25", 
//         slug: "test-slug3"
//     },
//     {
//         title: "test title", 
//         image: "test-image.png", 
//         excerpt: "test excerpt", 
//         date: "2023-12-25", 
//         slug: "test-slug4"
//     }
// ];



function AllPostsPage(props) {
    return (
        <Fragment>
            <Head>
                <title>All posts</title>
                <meta name="description" content="All posts!" />
            </Head>
            <AllPosts posts={props.posts} />
        </Fragment>
    );
}




export function getStaticProps() {
    const allPosts = getAllPosts();

    return {
        props: {
            posts: allPosts
        }
    }
}



export default AllPostsPage;