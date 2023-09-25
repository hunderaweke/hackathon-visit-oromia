import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import axios from "axios";

const schema = z.object({
  name: z.string(),
  place_image: z.string(),
  damage_lavel: z.string(),
  description: z.string(),
});

type FormData = z.infer<typeof schema>;

const Report = () => {
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
    <form className="my-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3 mt-3">
        <div className="py-3">
          <label className="form-label">Place Name:</label>
          <input
            type="name"
            className="form-control"
            id="name"
            {...register("name")}
          />
        </div>
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

export default Report;
