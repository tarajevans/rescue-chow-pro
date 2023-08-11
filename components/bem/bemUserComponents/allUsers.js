import BemUserLineItem from "./bemUserLineItem";



const AllUsers = ({allUsers, userRefetch}) => {


    return (
        <div>
            {allUsers.map((user) => (
                <div className="p-2">
                    <BemUserLineItem
                        user={user}
                        userRefetch={userRefetch}
                    />
                </div>
            ))}
        </div>
    )
}
export default AllUsers;