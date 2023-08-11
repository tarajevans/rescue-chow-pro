const BemRescuesAuthUserLineItem = ({ user, rescue, rescueRefetch }) => {
    console.log(user);

    const handleRemoveAuthUser = async () => {
        let newUserList = [];

        newUserList = rescue.authUsers.filter(
            (authUser) => user._id != authUser._id
        );

        let newUserIdList = [];

        if (newUserList.length > 0) {
            newUserList.map((authUser) => {
                newUserIdList.push(authUser._id);
            });
        }

        const result = await fetch("/api/data/rescues", {
            method: "PUT",
            body: JSON.stringify({
                rescueId: rescue._id,
                authUsers: newUserIdList,
            }),
        });

        rescueRefetch();
    };

    return (
        <div>
            <div className="flex flex-row p-2">
                <div className="">
                    <span className="font-bold">User Id: </span>
                    <span>{user._id}</span>
                </div>
                <div>
                    <span className="font-bold pl-4">Username: </span>
                    <span>{user.username}</span>
                </div>
                <div>
                    <span className="font-bold pl-4">First Name: </span>
                    <span>{user.firstName}</span>
                </div>
                <div>
                    <span className="font-bold pl-4">Last Name: </span>
                    <span>{user.lastName}</span>
                </div>
                <div className="pl-4">
                    <input
                        className="rounded border-2 border-slate-700 bg-slate-300 px-2"
                        type="button"
                        value="Remove User"
                        onClick={handleRemoveAuthUser}
                    />
                </div>
            </div>
        </div>
    );
};

export default BemRescuesAuthUserLineItem;
