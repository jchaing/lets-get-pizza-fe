import React from "react";
import { Field, ErrorMessage } from "formik";

import RegisterForm from "../authentication/RegisterForm";

export default function LocationsRegister() {
  return (
    <div className="register">
      <h1>Register Business</h1>

      <RegisterForm
        extraValues={{
          business_name: "",
          first_name: "",
          last_name: "",
          address: "",
          website_url: "",
          official_description: "",
          latitude: 0,
          longitude: 0,
          order_service: "",
          store_bio: "",
          dietary_offerings: []
        }}
        extraSchema={{}}
        endpoint={"/auth/location/register"}
      >
        <Field type="text" name="business_name" placeholder="Business name" />
        <ErrorMessage name="business_name" />

        <Field type="text" name="first_name" placeholder="First name" />
        <Field type="text" name="last_name" placeholder="Last name" />

        <Field type="text" name="address" placeholder="Street address" />

        <Field type="url" name="website_url" placeholder="Website URL" />

        <Field
          name="official_description"
          as="textarea"
          placeholder="Business description"
        />

        <Field
          name="store_bio"
          as="textarea"
          placeholder="Location specific information"
        />

        <Field name="dietary_offerings" as="select" multiple>
          <option value="gluten-free">Gluten-free</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
        </Field>
      </RegisterForm>
    </div>
  );
}
