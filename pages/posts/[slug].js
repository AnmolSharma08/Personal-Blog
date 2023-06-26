import PostContent from "@/components/posts/post-detail/post-content";
import { GetPostData } from "@/helper/post-util";
import { GetPostFiles } from "@/helper/post-util";

function PostDetailPage(props){


    return(
        <PostContent post={props.posts} />
    );
}


export function getStaticProps(context){
    const { params } = context;
    const { slug } = params;


    const SinglePosts = GetPostData(slug);
    return {
            props : {
                    posts : SinglePosts
            },
            revalidate : 600
    }
}

export function getStaticPaths(){
    const PostFileName = GetPostFiles();
    const slugs = PostFileName.map(fileName => fileName.replace(/\.md$/,'')); //removes the file extension, replace with empty string
    return{
        paths: slugs.map(slug => ({params: {slug : slug}})),
        fallback : false
    };
}


export default PostDetailPage;