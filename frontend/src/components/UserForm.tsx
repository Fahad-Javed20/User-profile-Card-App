import { useForm } from "react-hook-form";
import type { UserType } from "../types/UserType";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserType>();
  return (
    <div className="flex flex-col gap-6 items-center mt-6">
      <div>
        <h1 className="font-semibold text-2xl px-6 py-1 rounded-2xl bg-amber-800 text-white">
          User Data Form
        </h1>
      </div>
      <form className="bg-gray-200 p-6 min-w-md rounded-2xl">
        <div>
          <label className="text-left font-semibold block mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            className="px-2 py-2 rounded-lg w-full border-2 border-gray-300 
             focus:border-amber-700 focus:ring-2 focus:ring-amber-700 focus:outline-none"
            {...register("name", { required: true })}
          />
        </div>
      </form>
    </div>
  );
};
export default UserForm;
