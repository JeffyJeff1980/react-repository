import { useContext, useEffect, useState } from "react";
import UserRepository, { IUser } from "../repositories/UserRepository";
import { ApiResponse } from "../base/BaseRepository";
import { UserRepositoryContext } from "../context/UserRepositoryContext";

const UserList = () => {
  const [users, setUsers] = useState<IUser[]>();
  const userRepository = useContext(UserRepositoryContext) as UserRepository;

  useEffect(() => {
    userRepository.getMany().then((response: ApiResponse<IUser[]>) => {
      console.log(response);
      setUsers(response.data);
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
