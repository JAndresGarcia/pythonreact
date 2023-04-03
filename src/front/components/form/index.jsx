import React, { useState } from "react";

const Form = ({ onSubmit, onChange, fileName }) => {
  return (
    <section className="update">
      <form onSubmit={onSubmit}>
        <div className="header">
          <h2>Crear gráfico de señales</h2>
          <small>Agrega solo archivos tipo excel</small>
        </div>
        <div className="updateInput">
          <span>Agregar Biceps</span>
          <div className="biceps">
            <label htmlFor="excel" className="custom-file-upload">
              Agregar B1
            </label>
            <input
              name="excel"
              id="excel"
              type="file"
              accept=".xlsx"
              onChange={onChange}
            />
            <label htmlFor="excel" className="custom-file-upload">
              Agregar B2
            </label>
            <input
              name="excel"
              id="excel"
              type="file"
              accept=".xlsx"
              onChange={onChange}
            />
          </div>
          <span>Agregar Triceps</span>
          <div className="triceps">
            <label htmlFor="excel" className="custom-file-upload">
              Agregar T1
            </label>
            <input
              name="excel"
              id="excel"
              type="file"
              accept=".xlsx"
              onChange={onChange}
            />
            <label htmlFor="excel" className="custom-file-upload">
              Agregar T2
            </label>
            <input
              name="excel"
              id="excel"
              type="file"
              accept=".xlsx"
              onChange={onChange}
            />
          </div>
        </div>

        <p>{fileName}</p>

        <button class="cssbuttons-io-button">
          {" "}
          Generar Gráfica
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              ></path>
            </svg>
          </div>
        </button>
      </form>
    </section>
  );
};

export default Form;
