import React from "react";
import { useForm } from "react-hook-form";

let counter = 0;

const CustomerRegister = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (register) => alert(JSON.stringify(register));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        User Name:
        <input {...register("userName")} />
      </label>
      <label>
        Password:
        <input {...register("passWord")} />
      </label>
      <p>
        Render: <span>{counter++}</span>
      </p>
      <input type="submit" value="submit" />
    </form>
  );
};
export default CustomerRegister;
