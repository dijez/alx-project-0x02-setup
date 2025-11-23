import Card from "@/components/common/Card"
import PostModal from "@/components/common/PostModal"
import { PostModalProps } from "@/interfaces"
import { useState } from "react"
import Header from "@/components/layout/Header"

// const Home: React.FC<PostModalProps> = () =>{
const Home = () => {
    const [posts, setPosts] = useState([]);

    const addPost = (newPost) => {
        setPosts((prev) => [...prev, newPost]);

    }


    return(
        <div>
            <Header />
            <h1>HOME PAGE</h1>
            <Card 
            title="WELCOME TO ALX LISTNG APPLICATION"
            content="find milleions of homes at the most affordable prices"
            />
              <Card 
            title="Why Choose Us?"
            content="Trusted by millions of travelers worldwide."
            />

            <Card 
            title="Top Deals"
            content="Enjoy promotional offers on top properties."
            />
            
            <PostModal onAddPost= {addPost}/>

            {posts.map((post, index) => (
            
            <Card key={index} title={post.title} content={post.content} />
            ))}

        </div>
    )
}


export default Home