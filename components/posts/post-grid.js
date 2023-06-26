import classes from "./posts-grid.module.css";
import PostItem from "./post-item";
function PostGrid(props){
const{animes}=props;

    return(
        <ul className={classes.grid}>
            {animes.map(anime => 
            <PostItem key={anime.slug} post={anime}/>
            )}
        </ul>
    );
}
export default PostGrid;