import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "../style/form.scss";

function Form() {
  const [selectedOption, setSelectedOption] = useState("");

  const schema = yup.object().shape({
    selectedOption: yup.string().required("BŁĄD!! Wybierz jedzenie."),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="foodSelect" onSubmit={handleSubmit(onSubmit)}>
      <h3>Jedzenie </h3>
      <div className="foodSelect_select">
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="" disabled>
            Wybierz
          </option>
          <option value="warzywa">Warzywa</option>
          <option value="owoce">Owoce</option>
        </select>
        <span className="material-symbols-outlined">expand_all</span>
        {selectedOption === "" && errors.selectedOption && (
          <p className="error">{errors.selectedOption.message}</p>
        )}
      </div>
      <button type="submit">Wyślij</button>
    </form>
  );
}

export default Form;
