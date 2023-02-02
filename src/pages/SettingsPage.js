import React, { useRef, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
  title: yup.string().required("Enter your title"),
  email: yup.string().email().required("Enter your email"),
});

const SettingsPage = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [color, setColor] = useState("");

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="settings">
      <h3 className="settings-title">Settings</h3>
      <form className="pt-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field mb-3 flex gap-2 flex-col">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            control={control}
            className="border-2 rounded-lg border-gray-500 pl-4 py-1"
            {...register("title")}
          />
          {errors?.title?.message && (
            <p className="text-red-500 text-sm">{errors?.title?.message}</p>
          )}
        </div>
        <div className="form-field mb-3 flex gap-2 flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            {...register("email")}
            control={control}
            className="border-2 rounded-lg border-gray-500 pl-4 py-1"
          />
          {errors?.email?.message && (
            <p className="text-red-500 text-sm">{errors?.email?.message}</p>
          )}
        </div>
        <div className="form-field mb-3 flex gap-2 flex-col">
          <label htmlFor="title">Background Color</label>
          <input
            type="text"
            name="background"
            value={color}
            {...register("background")}
            className="border-2 rounded-lg border-gray-500 pl-4 py-1"
          />
          <input
            type="color"
            name="background"
            control={control}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            className="border-2 rounded-lg border-gray-500 pl-4 py-1"
          />
        </div>
        <div className="form-field mb-3 flex gap-2 flex-col">
          <label htmlFor="date">Active date</label>
          <input
            type="date"
            name="date"
            {...register("date")}
            control={control}
            className="border-2 rounded-lg border-gray-500 pl-4 py-1"
          />
        </div>
        {isDirty && (
          <button type="submit" className="btn">
            Lưu
          </button>
        )}
      </form>
    </div>
  );
};

export default SettingsPage;
