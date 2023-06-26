import { Fragment } from "react";
import Hero from '../components/Home-page/hero'
import Feature from '../components/Home-page/Features';

import { FeaturePost } from "@/helper/post-util";



function homepage(props){
        return(
                <Fragment>
                <Hero />
                <Feature animes={props.posts}/>
                </Fragment>



                );
}



export function getStaticProps(){
const FeaturePosts = FeaturePost();
return {
        props : {
                posts : FeaturePosts
        },
}
}

export default homepage;
