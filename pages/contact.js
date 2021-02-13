import React from 'react';
import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import FormInput from "../components/form/FormInput";
import FormTextArea from "../components/form/FormTextArea";


export default function Contact() {
  return (
    <Layout>
      <section className="pt-10">
        <div className="grid md:grid-cols-2">
          <div className="pl-6 bg-gray-100 py-5 md:pl-10 mx-8 rounded-lg">
            <h1 className="text-3xl font-bold md:text-5xl">Get in touch</h1>
            <p className="pt-2 font-medium text-lg text-gray-600 md:text-xl">
              Fill out the form to start working with us!
            </p>
            <div className="flex items-center mt-4 text-gray-600">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-3xl text-gray-400"
              />
              <div className="ml-4 text-md tracking-wide font-semibold">
                <p>zachlefko@gmail.com</p>
                <p>apollosburcham@gmail.com</p>
              </div>
            </div>
          </div>
          <div>
            <form name="contact" data-netlify="true" data-netlify-repatcha="true" className="grid grid-cols-1 gap-y-4 pr-8 mt-4 md:mt-0">
              <input type="hidden" name="form-name" value="contact" />
              <FormInput label="Full Name" name="name" inputType="text" />
              <FormInput label="Email" name="email" inputType="email" />
              <FormInput label="Company" name="company" inputType="text" />
              <FormTextArea label="Message" name="message" />
              <button type="submit" className="rounded-lg px-2 py-3 bg-blue-500 font-bold text-white hover:bg-blue-600">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
