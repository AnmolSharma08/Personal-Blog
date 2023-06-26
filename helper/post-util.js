import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const PostDir = path.join(process.cwd(),'databases');

export function GetPostData(filename){
    const PostSlug = filename.replace(/\.md$/,''); //removes the file extension, replace with empty string
    const FilePath = path.join(PostDir,`${PostSlug}.md`);

    const FileContent = fs.readFileSync(FilePath,'utf-8');
    const { data,content } = matter(FileContent);
    const Postdata= {
        slug : PostSlug,
        ...data,
        content,
    };

    return Postdata;
}



export function GetAllPosts(){

    const PostFiles = fs.readdirSync(PostDir);
    const AllPost= PostFiles.map(PostFile => {
        return GetPostData(PostFile);
    })

    const SortedPosts = AllPost.sort((postA,postB) => postA.date > postB.date ? -1 : 1) // bby this new post comes before

    return SortedPosts;

}


export function FeaturePost(){
    const AllPost = GetAllPosts();
    const FeaturePost = AllPost.filter(post => post.isFeatured);

    return FeaturePost;
}


export function GetPostFiles(){
    return fs.readdirSync(PostDir);

}