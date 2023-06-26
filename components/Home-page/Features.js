import classes from "./featured-posts.module.css";
import PostGrid from "../posts/post-grid";
function Feature(props){
    return(
        <section className={classes.latest}>
            <h2>Featured Anime</h2>
            <PostGrid animes={props.animes}/>


        </section>
    );


}
export default Feature;