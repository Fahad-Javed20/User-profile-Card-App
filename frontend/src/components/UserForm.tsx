import { useForm } from "react-hook-form";
import type { UserType } from "../types/UserType";

interface UserFormProps {
  onAddUser: (user: UserType) => void;
}

const UserForm = ({ onAddUser }: UserFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserType>();

  const onSubmit = (user: UserType) => {
    onAddUser(user);
    reset();
  };
  return (
    <div className="flex flex-col gap-6 items-center mt-6">
      <div>
        <h1 className="font-semibold text-2xl px-6 py-1 rounded-2xl bg-amber-800 text-white">
          User Data Form
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-200 p-6 min-w-md rounded-2xl flex flex-col gap-4"
      >
        <div>
          <label className="text-left font-semibold block mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            className="px-2 shadow-2xl py-2 rounded-lg w-full border border-gray-300 
             focus:border-amber-700 focus:ring-1 focus:ring-amber-700 focus:outline-none"
            {...register("name", { required: true })}
          />
          {errors.name && <p className="bg-red-500">This field is Mandatory</p>}
        </div>

        <div>
          <label className="text-left font-semibold block mb-2" htmlFor="image">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            placeholder="Enter Image URL"
            className="px-2 shadow-2xl py-2 rounded-lg w-full border border-gray-300 
             focus:border-amber-700 focus:ring-1 focus:ring-amber-700 focus:outline-none"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <p className="bg-red-500">This field is Mandatory</p>
          )}
        </div>

        <div>
          <label
            className="text-left font-semibold block mb-2"
            htmlFor="profession"
          >
            Profession
          </label>
          <input
            type="text"
            id="profession"
            placeholder="Enter Profession"
            className="px-2 shadow-2xl py-2 rounded-lg w-full border border-gray-300 
             focus:border-amber-700 focus:ring-1 focus:ring-amber-700 focus:outline-none"
            {...register("profession", { required: true })}
          />
          {errors.profession && (
            <p className="bg-red-500">This field is Mandatory</p>
          )}
        </div>

        <div>
          <label
            className="text-left font-semibold block mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            placeholder="Enter Description"
            className="px-2 shadow-2xl py-2 rounded-lg w-full border border-gray-300 
             focus:border-amber-700 focus:ring-1 focus:ring-amber-700 focus:outline-none"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <p className="bg-red-500">This field is Mandatory</p>
          )}
        </div>
        <div className="flex justify-center">

        <button className="bg-amber-800 w-1/3 text-white font-semibold px-6 py-2 rounded-2xl hover:bg-amber-950">Add User</button>
        </div>
      </form>
    </div>
  );
};
export default UserForm;
