import type { UserType } from "../types/UserType";

interface UserListProps {
  users: UserType[];
}
const UserList = ({ users }: UserListProps) => {
  return (
    <div className="flex gap-2 justify-around flex-wrap">
      {users.map((user) => (
        <div
          className="h-100 w-80 mb-2  bg-white shadow-lg/30 rounded-2xl"
          key={user.id}
        >
          <img
            className="h-60 w-full rounded-2xl object-cover"
            src={user.image}
            alt=""
          />
          <div className="text-left pl-3 mt-3">
            <h1 className="font-semibold text-xl">{user.name}</h1>
            <p className="text-red-700">{user.profession}</p>
            <p className="truncate pr-3">{user.description}</p>
          </div>
          <div className="flex justify-between px-3 mt-2">
            <p className="font-bold text-purple-600">{user.rating}</p>
            <button className="bg-blue-600 px-3 py-1 text-white rounded">Contact Us</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
