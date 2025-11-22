import { ModalProps, PostModalProps } from "@/interfaces";
import { title } from "process";
import { useState } from "react";


const PostModal: React.FC<ModalProps> = ({onAddPost}) =>{
    
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const handleSubmit = () => {
        onAddPost({ title, content})
        setTitle("");
        setContent("")
    }

    return(
        
        <form>
            <label htmlFor="title" id="title">title</label>
            <input id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}/>

            <label htmlFor="content" id="content">content</label>
            <input id="content" 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            />

            <div>
                <button type="button" onClick={handleSubmit} >
                    submit
                </button>
            </div>
        </form>
    )

}

export default PostModal;