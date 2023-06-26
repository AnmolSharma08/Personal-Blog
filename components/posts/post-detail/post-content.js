import classes from './post-content.module.css';
import PostHeader from './post-header';
import  ReactMarkdown  from 'react-markdown';
import Image from 'next/image';


function PostContent(props){
    const { post } = props;

    const ImgPath= `/images/posts/${post.slug}/${post.image}`;
    
    return(
        <article className={classes.content}> 
            <PostHeader title={post.title} image={ImgPath} />
            <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
    );
}
export default PostContent;