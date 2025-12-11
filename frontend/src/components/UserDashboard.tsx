import { useEffect, useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";
import type { UserType } from "../types/UserType";

const UserDashboard = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      setUsers(data);
    };

    fetchUser();
  }, []);

  const handelAddUser = (newUser: UserType) => {
    setUsers((prev) => [...prev, newUser]);
  };

  return (
    <div className="flex flex-col gap-16">
      <UserForm onAddUser={handelAddUser} />
      <UserList users={users} />
    </div>
  );
};

export default UserDashboard;
