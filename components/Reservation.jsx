import React from 'react'
import Title from "./ui/Title";
import Input from '@/components/form/Input'
import { useFormik } from 'formik';
import { actionAsyncStorage } from 'next/dist/client/components/action-async-storage';
import { reservationSchema } from '@/schema/reservation';

const Reservation = () => {

        const onSubmit = async(values, actions) => {
            await new Promise((resolve) => setTimeout(resolve, 4000))
            actions.resetForm()
        }

      const {values, errors, handleSubmit, handleChange}  = useFormik({
        initialValues: {
          fullName: "",
          phoneNumber: "",
          email: "",
          persons: "",
          date: "",
        },
        onSubmit,
        validationSchema: reservationSchema,
      });

      console.log(values);

  const inputs = [
    {
        id:1,
        name:"fullName",
        type:"text",
        placeholder:"Your Full Name",
        value: values.fullName,
        errorMessage: errors.fullName,
    },
    {
        id:2,
        name:"phoneNumber",
        type:"number",
        placeholder:"Your Phone Number",
        value: values.phoneNumber,
        errorMessage: errors.phoneNumber,
    },
    {
        id:3,
        name:"email",
        type:"email",
        placeholder:"Your Email Adress",
        value: values.email,
        errorMessage: errors.email,
    },
    {
        id:4,
        name:"persons",
        type:"number",
        placeholder:"How many persons?",
        value: values.persons,
    },
    {
        id:5,
        name:"date",
        type:"date",
        value: values.date,
    }
  ]

  return (
    <div className="container mx-auto py-12">
        <Title addClass="text-[40px] mb-10">Book A Table</Title>
        <div className="flex justify-between flex-wrap-reverse items-center gap-10">
            <form className="lg:flex-1 w-full" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-y-3">
                    {inputs.map((input) =>
                        <Input key={input.id} {...input} onChange={handleChange} />
                    )}

                </div>
                <button className="btn-primary mt-4" type="submit">BOOK NOW</button>
            </form>
            <div className="lg:flex-1 !h-[384px] w-full">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.128596818941!2d32.82409437573186!3d39.91613828595543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f3ea3aab92b%3A0x6edc34cbf115c92b!2sNational%20Library!5e0!3m2!1sen!2str!4v1688832590828!5m2!1sen!2str"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full w-full"></iframe>
            </div>
        </div>
    </div>
  )
}

export default Reservation