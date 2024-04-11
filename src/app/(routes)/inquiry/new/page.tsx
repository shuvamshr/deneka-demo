"use client";

import { useForm } from "react-hook-form";
import Breadcrumb from "@/app/components/global/Header/Subheader/Breadcrumb/Breadcrumb";
import Subheader from "@/app/components/global/Header/Subheader/Subheader";
import Header from "@/app/components/global/Header/Header";

const Style = {
  // Fixed Styles
  container:
    "flex flex-col rounded-lg w-full bg-white py-7 px-6 md:py-8 md:px-7 gap-3 border border-gray-200 justify-between ease-in duration-100",

  textField:
    "border border-grey-300 bg-white text-sm font-regular text-gray-600 h-10 rounded-md px-3",
  longField:
    "border border-grey-300 bg-white text-sm font-regular text-gray-600 h-32 rounded-md p-3",

  fieldContainer: "flex flex-col gap-2",

  labelTitle: "text-xs whitespace-nowrap font-semibold text-gray-700",
  errorMessage: "text-xs whitespace-nowrap font-medium text-red-600",

  submitButton:
    "flex-row flex items-center justify-center gap-4 px-5 text-sm font-semibold rounded-full whitespace-nowrap bg-indigo-700 text-white hover:bg-indigo-600 h-10 w-full md:w-fit",
};

export default function NewInquiryPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    // try {
    //   const res = await fetch("http://localhost:1337/api/create-inquiry", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   if (!res.ok) {
    //     throw new Error("Failed to submit data");
    //   }

    alert("Data Submitted!");
    // } catch (error: any) {
    //   console.error("Error:", error.message);
    //   alert("Failed to submit data");
    // }
  };

  return (
    <>
      <div className="flex flex-col top-0 sticky">
        <div className="flex flex-row">
          <Header title="New Inquiry" />
        </div>
        <Subheader type="breadcrumb">
          <Breadcrumb path="/inquiry">Inquiry</Breadcrumb>
          <Breadcrumb state="active">New Inquiry</Breadcrumb>
        </Subheader>
      </div>
      <div className="container mx-auto p-5">
        <form onSubmit={handleSubmit(onSubmit)} className={Style.container}>
          <label className={Style.fieldContainer}>
            <span className={Style.labelTitle}>Inquiry Title *</span>
            <input
              className={Style.textField}
              type="text"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <p className={Style.errorMessage}>
                Title is required and must be under 50 characters
              </p>
            )}
          </label>
          <br />
          <label className={Style.fieldContainer}>
            <span className={Style.labelTitle}>Support Request Type *</span>
            <select
              {...register("categoryId", { required: true })}
              className={Style.textField}
            >
              <option value="">Select Type</option>
              <option value="1">On-Site Support</option>
              <option value="2">Remote Support</option>
              <option value="3">Backend Support</option>
            </select>
            {errors.categoryId && (
              <p className={Style.errorMessage}>
                Support Request Type is required
              </p>
            )}
          </label>
          <br />
          <label className={Style.fieldContainer}>
            <span className={Style.labelTitle}>Inquiry Description *</span>
            <textarea
              {...register("description", { required: true })}
              className={Style.longField}
            />
            {errors.description && (
              <p className={Style.errorMessage}>Description is required</p>
            )}
          </label>
          <br />
          <label className={Style.fieldContainer}>
            <span className={Style.labelTitle}>Link to Images/Videos</span>
            <input
              type="text"
              {...register("link")}
              className={Style.textField}
            />
          </label>
          <br />

          <br />
          <button type="submit" className={Style.submitButton}>
            Submit Inquiry
          </button>
        </form>
      </div>
    </>
  );
}
