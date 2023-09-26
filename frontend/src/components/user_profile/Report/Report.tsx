
import styles from "./report.module.css";

import React, { ChangeEvent } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string(),
  damage_level: z.string(),
  description: z.string(),
  image: z
    .object({
      file: z.instanceof(File).nullable(), 
    })
    .nullable(),
});

type FormData = z.infer<typeof schema>;

const Report: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);

  };

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    console.log(selectedFile)
    if (selectedFile) {
      register("image.file", { value: selectedFile }); 
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`m-0 my-5 p-2 p-md-5 ${styles.report}`} encType="multipart/form-data">
      <div className="mb-3 mt-3">
        <label htmlFor="name" className="form-label">Place Name:</label>
        <input type="text" id="name" {...register("name")} className="form-control" />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div className="mb-3 mt-3">
        <label htmlFor="damage_level" className="form-label">Damage Level:</label>
        <select id="damage_level" {...register("damage_level")} className="form-control">
          <option value="normal">Normal</option>
          <option value="medium">Medium</option>
          <option value="extreme">Extreme</option>
        </select>
        {errors.damage_level && <p>{errors.damage_level.message}</p>}
      </div>
      <div className="mb-3 mt-3">
        <label htmlFor="description" className="form-label">Description about the place:</label>
        <textarea id="description" rows={5} {...register("description")} className="form-control" />
        {errors.description && <p>{errors.description.message}</p>}
      </div>
      <div className="mb-3 mt-3" >
        <label htmlFor="image" className="form-label">Image of the Place:</label>
        <input
          type="file"
          id="image"
          onChange={handleImage}
          accept="image/*" 
          className="form-control"
        />
        {errors.image && <p>{errors.image.file?.message}</p>}
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Report;
