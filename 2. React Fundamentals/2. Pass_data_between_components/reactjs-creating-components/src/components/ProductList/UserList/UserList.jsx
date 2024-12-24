import { useEffect, useState } from "react";


function UserList(){
    const [userList, setUserList] = useState([]); 
    const [loading, setLoading] = useState(false);
    async function fetchUsersData() {
        try{
            setLoading(true);
            const apiResponse  = await fetch('https://dummyjson.com/users');
            const result  = await apiResponse.json();
            
            if(result?.users){
                setUserList(result?.users);
                setLoading(false);
            }
            else{
                setUserList([]);
                setLoading(false);
            }
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchUsersData();
    },[])

    if(loading)  return <h3> Loading, please wait</h3>

    return (
        <div>
            <h3> User List</h3>
            
            <ul>
                {       
                    userList && userList.length > 0 ? userList.map((user, index) =>
                        <li key={index}>Name: {user.firstName} {user.lastName}</li>
                    )
                    :<h3> No Users Found</h3>
                }       
        
            </ul>
            

        </div>
    )
}

export default UserList;