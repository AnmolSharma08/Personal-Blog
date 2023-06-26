import Link from "next/link";
import Image from "next/image";
import classes from "./post-item.module.css";
function PostItem(props){



    const { title,image,description,date,slug}=props.post;

    const ModifyDate=new Date(date).toLocaleDateString('en-us',{
        day:'numeric',
        month:'long',
        year:'numeric'
    });
    const ImgPath=`/images/posts/${slug}/${image}`;
    const LinkPath=`/posts/${slug}`;

    return(
        <li className={classes.post}>
            <Link href={LinkPath} legacyBehavior>
            <a>
            <div className={classes.image}>
                <Image src={ImgPath} alt={title} width={300} height={200} layout="responsive"/>
            </div>
            <div className={classes.content}> 
<h3>{title}</h3>
<time>{ModifyDate}</time>
<p>{description}</p>
            </div>
            </a>
            </Link>
        </li>
    );
}
export default PostItem;