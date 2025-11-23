import Header from "@/components/layout/Header"
import PostCard from "@/components/common/PostCard"
import { PostProps } from "@/interfaces"
import { time } from "console"
import { title } from "process"
import { useState } from "react"




const Posts: React.FC<PostProps[]> = ({posts}) => {
    console.log(posts)
     const [post, setPost] = useState<PostProps | null>(null);
    return(
        <div>
            <Header />
            <h1>
                POSTS CONTENT
            </h1>
             {posts.map(({ title, content, userId ,id}: PostProps, key: number) => (
                        
        <PostCard 
          key={key} 
          title={title} 
          content={content} 
          userId={userId} 
          id={id}
        />
      ))}
        </div>
    )
}


export async function getStaticProps(){
    const response = await
    fetch ("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
  const posts = data.map((post) => ({
    title : post.title,
    content: post.body,
    userId:post.userId
  }))

  return{
    props:{
        posts
    }
  }
}

export default Posts