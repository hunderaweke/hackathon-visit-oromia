import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import axios from "axios";

import styles from './add.module.css'

const schema = z.object({
  place_image: z.string(),
  description: z.string(),
});

type FormData = z.infer<typeof schema>;

const AddPost = () => {
  const {
    register,
    handleSubmit,
    // formState: { },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    // try {
    //   axios
    //     .post("http://192.168.60.185:5000/accounts/login/", data)
    //     .then((res) => {
    //       console.log(res.data);
    //     });
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <form className={`my-5 p-5 ${styles.add}`} onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3 mt-3">
        <div className="py-3">
          <label className="form-label">Image of the Place:</label>
          <input
            type="file"
            className="form-control"
            id="place_image"
            {...register("place_image")}
          />
        </div>
        <div className="py-3">
          <label className="form-label">Description about the place:</label>
          <textarea
            className="form-control"
            id="description"
            rows={5}
            {...register("description")}
          />
        </div>
      </div>
      <button className="btn btn-primary">Post Story </button>
    </form>
  );
};

export default AddPost;
