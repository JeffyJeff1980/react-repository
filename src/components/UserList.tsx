import { useContext, useEffect, useState } from "react";
import { IUser } from "../repositories/UserRepository";
import { ApiResponse } from "../base/BaseRepository";
import { UserRepositoryContext } from "../context/UserRepositoryProvider";

const UserList = () => {
  const [users, setUsers] = useState<IUser[]>();
  const userRepository = useContext(UserRepositoryContext);

  useEffect(() => {
    userRepository
      ?.getMany()
      .then((response: ApiResponse<IUser[]>) => {
        console.log(response);
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userRepository]);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users?.map((user, idx) => (
          <li key={idx}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
