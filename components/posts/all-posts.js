import classes from './all-posts.module.css';
import PostGrid from './post-grid';
 function AllPosts(props){
return(
<section className={classes.posts}>
    <h1>All Animes</h1>
    <PostGrid animes={props.animes} />
</section>
);
 }
 export default AllPosts;