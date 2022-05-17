import { Button, Input } from "@mui/material";
import { Dispatch } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUrl } from "../store/actions";

const CreateLink = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch: Dispatch<any> = useDispatch();

  const formSubmitHandler = (data: { [x: string]: any }) => {
    dispatch(addUrl(data as IUrl));
    reset();
  };

  return (
    <form className="box" onSubmit={handleSubmit(formSubmitHandler)}>
      <Input
        {...register("title", { required: true })}
        placeholder="Title"
        className="input"
      />
      <Input
        {...register("url", { required: true })}
        placeholder="Url"
        className="input"
      />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default CreateLink;
