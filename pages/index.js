import { Fragment } from "react";

import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";

import Head from 'next/head';


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


function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>SB's blog</title>
                <meta name="description" content="Seunghoon Baik!" />
            </Head>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </Fragment>
    );
}




export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts
        }
        // revalidate: 100
    }
}



export default HomePage;