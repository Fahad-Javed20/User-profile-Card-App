import type { UserType } from "../types/UserType";

interface UserListProps {
  users: UserType[];
}
const UserList = ({ users }: UserListProps) => {
  return (
    <div className="flex gap-2 justify-around flex-wrap">
      {users.map((user) => (
        <div
          className="h-100 w-80  bg-white shadow-lg/30 rounded-2xl"
          key={user.id}
        >
          <img
            className="h-60 w-full rounded-2xl object-cover"
            src={user.image}
            alt=""
          />
          <h1>{user.name}</h1>
          <p>{user.profession}</p>
          <p>{user.description}</p>
          <p>{user.rating}</p>
          <button>Contact Us</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
