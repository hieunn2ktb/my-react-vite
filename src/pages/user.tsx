import UserForm from "../conponents/user/user.form";
import UserTable from "../conponents/user/user.table";

const UserPage = () => {
    return (
        <div style={{padding: "20px"}}>
            <div><UserForm/></div>
            <div><UserTable/></div>
        </div>
    )
}

export default UserPage;