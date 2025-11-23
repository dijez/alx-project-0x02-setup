import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({name, username, address, id,email, website, company, phone}) => {
    return(
        <div>
            <h2>
                {name}
            </h2>
            <p>
                {address.street}
                {address.suite}
            </p>
            <p>
                {username}
                {id}
            </p>
        </div>
    )
}

export default UserCard