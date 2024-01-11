import { Fragment } from "react";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
import Head from "next/head";

import Comments from "../../components/comment/comments";
import Comments2 from "../../components/comment/comments-2";



function SinglePostPage(props) {
    console.log('props : ' + JSON.stringify(props));
    
    return (
        <Fragment>
            <Head>
                <title>{props.post.title}</title>
                <meta name="description" content={props.post.excerpt} />
            </Head>
            <PostContent post={props.post} />
            <Comments postSlug={props.post.slug} />
            <Comments2 />
        </Fragment>
    );
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    // console.log("params : " + JSON.stringify(params));
    // console.log("slug : " + slug);
    const postData = getPostData(slug);

    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}

export function getStaticPaths() {

    const postFilenames = getPostsFiles();

    const slugs = postFilenames.map(file => file.replace(/\.md$/, ''));

    return {
        paths: slugs.map(slug => ({ params: { slug: slug }})),
        fallback: false
    };
}

export default SinglePostPage;