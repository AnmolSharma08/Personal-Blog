import AllPosts from "@/components/posts/all-posts";
import { GetAllPosts } from "@/helper/post-util";
function AllPostsPage(props){
    return(
        <AllPosts animes={props.posts}/>
    );
}

export function getStaticProps(){
    const AllPost = GetAllPosts();
    return {
            props : {
                    posts : AllPost
            },
    }
    }


export default AllPostsPage;