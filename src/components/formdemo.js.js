import { useFormik } from "formik";
import React, { useState } from "react";
import { contactFormValidation } from "../../Validations/index";
import {
  SelectFieldV2,
  TextField,
  TextArea,
} from "../AbstractComponents/InputFields";
import Button, { ButtonV2 } from "../AbstractComponents/Button";
import UtilityController from "../../Controllers/UtilityController";
import ToastController from "../../Controllers/ToastController";
import { useEffect } from "react";

const ContactForm = () => {
  const [laoding, setLaoding] = useState(false);

  async function onSubmit(data) {
    console.log("Data...", data);
    try {
      setLaoding(true);
      const res = await UtilityController.submitForm({
        ...data,
        formType: "contact us",
      });
      console.log(res.data, "hello");
      ToastController.success(`Your Form Submitted Successfully..!`);
      resetForm();
    } catch (error) {
      // ToastController.error(`Your Form Submitted Successfully..!`);
    } finally {
      setLaoding(false);
    }
  }

  const locationOptions = [
    { label: "Saint Petersburg", value: "Saint Petersburg" },
  ];

  const initialValues = {
    firstName: initialSTATE.firstname ?? "",
    lastName: "",
    email: "",
    phoneNumber: "",
    // location: "",
    message: "",
  };
  const {
    handleSubmit,
    values,
    setValues,
    getFieldProps,
    errors,
    touched,
    setErrors,
    resetForm,
    setTouched,
    secondaryField,
  } = useFormik({
    initialValues,

    validationSchema: contactFormValidation,

    onSubmit: onSubmit,
  });

  useEffect(
    (initialSTATE) => {
      if (initialSTATE) {
        setValues(initialValues);
      }
    },
    [initialSTATE]
  );

  return (
    <form
      className="w-full mb-[50px] flex flex-col gap-3 2xl:gap-5 text-left"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 gap-5 2xl:gap-[30px] md:grid-cols-2">
        <div className="relative">
          <TextField
            name="firstName"
            label={`First Name`}
            isRequired
            type={"text"}
            placeholder={"Enter your first name"}
            {...getFieldProps(`firstName`)}
          />
          <span className="text-[#CC2936] absolute  left-2 text-[11px] -bottom-4 md:-bottom-5 ">
            {touched["firstName"] && errors["firstName"]}
          </span>
        </div>
        <div className="relative">
          <TextField
            name="lastName"
            label={`Last Name`}
            isRequired
            type={"text"}
            placeholder={"Enter your last name"}
            {...getFieldProps(`lastName`)}
          />
          <span className="text-[#CC2936] absolute  left-2 text-[11px] -bottom-4 md:-bottom-5 ">
            {touched["lastName"] && errors["lastName"]}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 2xl:gap-[30px] md:grid-cols-2">
        <div className="relative">
          <TextField
            name="email"
            label={`Email`}
            isRequired
            type={"email"}
            placeholder={"Enter your email"}
            {...getFieldProps(`email`)}
          />
          <span className="text-[#CC2936] absolute  left-2 text-[11px] -bottom-4 md:-bottom-5 ">
            {touched["email"] && errors["email"]}
          </span>
        </div>
        <div className="relative">
          <TextField
            name="phoneNumber"
            placeholder={"Enter your phone number"}
            isRequired
            type={"text"}
            label={"Phone No."}
            {...getFieldProps(`phoneNumber`)}
          />
          <span className="text-[#CC2936] absolute  left-2 text-[11px] -bottom-4 md:-bottom-5 ">
            {touched["phoneNumber"] && errors["phoneNumber"]}
          </span>
        </div>
      </div>
      {/* <div className="grid grid-cols-1">
        <div className="relative">
          <SelectFieldV2
            name="location"
            type={"text"}
            value={``}
            placeholder={`Select Location`}
            label={`Location`}
            isRequired
            containerClass={``}
            {...getFieldProps(`location`)}
            options={locationOptions}
          />
          <span className="text-[#CC2936] absolute  left-2 text-[11px] -bottom-4 md:-bottom-5 ">
            {touched["location"] && errors["location"]}
          </span>
        </div>
      </div> */}

      <div className="grid grid-cols-1">
        <div className="relative">
          <TextArea
            name="message"
            label={`Message`}
            type={"text"}
            placeholder={
              "Leave us a message and we will get back to you as soon as possible."
            }
            className={`!min-h-[100px] resize-none`}
            {...getFieldProps(`message`)}
          />
          <span className="text-[#CC2936] absolute  left-2 text-[11px] -bottom-4 md:-bottom-5 ">
            {touched["message"] && errors["message"]}
          </span>
        </div>
      </div>
      <div
        className={`max-w-max mt-[30px] 2xl:mt-[50px] mx-auto md:col-span-2`}
      >
        <ButtonV2
          isLoading={laoding}
          disabled={laoding}
          className={
            "!mx-auto !max-w-max px-[30px] py-3 2xl:px-[45px] 2xl:py-[18px]"
          }
        >
          Submit
        </ButtonV2>
      </div>
    </form>
  );
};

export default ContactForm;
