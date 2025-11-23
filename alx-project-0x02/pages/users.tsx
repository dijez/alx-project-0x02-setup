import Header from "@/components/layout/Header"
import UserCard from "@/components/common/UserCard"
import { UserProps } from "@/interfaces"
import { time } from "console"
import { title } from "process"
import { useState } from "react"



interface UsersPageProps{
    users: UserProps[];
}


const Users: React.FC<UsersPageProps> = ({users}) => {
    console.log(users)
     const [user, setPost] = useState<UserProps | null>(null);
    return(
        <div>
            <Header />
            <h1>
                POSTS CONTENT
            </h1>    
            <p>USER CONTENT</p>  
         {users.map((user) => (
                        <UserCard 
                        key = {user.id}
                        id = {user.id}
                        name = {user.name}
                        username= {user.username}
                        address = {user.address}
                        email = {user.email}
                        website = {user.website}
                        company = {user.company}
                        phone = {user.phone}
                        />
                    ))
                    }
        </div>
    )
}


export async function getStaticProps() {
    const response = await
    fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()

    return{
        props: {
            users
        }
    }
}

export default Users