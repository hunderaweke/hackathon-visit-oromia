import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import axios from "axios";

import styles from './suggest.module.css'

const schema = z.object({
  name: z.string(),
  place_image: z.string(),
  damage_lavel: z.string(),
  description: z.string(),
  region: z.string(),
  woreda: z.string(),

});

type FormData = z.infer<typeof schema>;

const SuggestNewPlace = () => {
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
    <form className={`my-5 p-5 ${styles.suggest}`} onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="mb-3 mt-3">
        <div className="col py-3">
          <label className="form-label">Place Name:</label>
          <input
            type="name"
            className="form-control"
            id="name"
            {...register("name")}
          />
        </div>
        <div className="col py-3">
          <label className="form-label">Image of the Place:</label>
          <input
            type="file"
            className="form-control"
            id="place_image"
            {...register("region")}
          />
        </div>
      </div>
      <div className="row">
      <div className="col py-3">
          <label className="form-label">Region:</label>
          <input
            type="name"
            className="form-control"
            id="region"
            {...register("region")}
          />
        </div>
      <div className="col py-3">
          <label className="form-label">Woreda: </label>
          <input
            type="name"
            className="form-control"
            id="woreda"
            {...register("woreda")}
          />
        </div>
      </div>
        <div className="py-3">
          <label className="form-label">Damage Level:</label>
          <select
            className="form-control"
            name="damage_lavel"
            id="damage_lavel"
          >
            <option value="normal">Normal</option>
            <option value="medium">Medium</option>
            <option value="extrem">Extrem</option>
          </select>
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
      <button className="btn btn-primary">Send </button>
    </form>
  );
};

export default SuggestNewPlace;

