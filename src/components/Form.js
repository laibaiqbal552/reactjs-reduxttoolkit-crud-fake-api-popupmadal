import React, { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useFormik } from "formik";
import { validationSchema } from "./../validationSchema";
const Form = ({ loading, initialSTATE, onSubmit }) => {
  const initialValues = {
    name: initialSTATE?.name ?? "",
    email: initialSTATE?.email ?? "",
    age: initialSTATE?.age ?? "",
    gender: initialSTATE?.gender ?? "",
  };
  const { handleSubmit, setValues, getFieldProps, touched, errors } = useFormik(
    { initialValues, validationSchema: validationSchema, onSubmit: onSubmit }
  );
  useEffect(() => {
    if (initialSTATE) {
      setValues(initialValues);
    }
  }, [initialSTATE]);

  return (
    <div>
      {" "}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-white"
          >
            Name
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="name"
              type="text"
              {...getFieldProps("name")}
              className="block px-2 w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
            {touched.name && errors.name && (
              <div className="text-red-500">{errors.name}</div>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-white"
          >
            Email
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              {...getFieldProps("email")}
              className="block px-2 w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
            {touched.email && errors.email && (
              <div className="text-red-500">{errors.email}</div>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="age"
            className="block text-sm font-medium leading-6 text-white"
          >
            Age
          </label>
          <div className="mt-2">
            <input
              id="age"
              name="age"
              type="number"
              {...getFieldProps("age")}
              className="block px-2 w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
            {touched.age && errors.age && (
              <div className="text-red-500">{errors.age}</div>
            )}
          </div>
        </div>

        {/* <div className="flex gap-20">
          <label
            htmlFor="gender"
            className="block text-sm font-medium leading-6 text-white"
          >
            Gender
          </label>
          <div className="flex gap-10">
            <div className="mt-2">
              <input
                id="female"
                name="gender"
                type="radio"
                {...getFieldProps("gender")}
                className="block px-2 w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
              <label className="text-white">Female</label>
            </div>
            <div className="mt-2">
              <input
                id="male"
                name="gender"
                type="radio"
                {...getFieldProps("gender")}
                className="block px-2 w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
              <label className="text-white">Male</label>
            </div>
          </div>
        </div> */}

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            {loading ? (
              <Oval
                height={20}
                width={20}
                color="#6366F1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#A5B4FC"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            ) : (
              <div>CREATE</div>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
