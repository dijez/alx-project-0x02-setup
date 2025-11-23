import { PostProps } from "@/interfaces";



const PostCard: React.FC<PostProps> = ({ title , content, userId, id}) => {
   
    return(
        <div>
            <h1>
                {title}
            </h1>
            <p>
                {content}
            </p>
            <p>
                {userId}
            </p>
        </div>
    )
}


export default PostCard