import React, { useState } from "react";
import useFetch from "../../hooks";
import "../../../front/App.css";
import Form from "../form";

const UpdateFiles = () => {
  const [fileName, setFileName] = useState(
    "No se ha seleccionado ningún archivo"
  );
  const [file, setFile] = useState([]);

  const handleFileChange = (event) => {
    if (event.target.files.length === 0) {
      setFileName("No se ha seleccionado ningún archivo");
      setFile(null);
    } else {
      setFileName(file.name);
      setFile(event.target.files[0]);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append("excel", file);
      const { error, loading } = useFetch("files.com", "POST", formData);
      if (loading) {
        console.log("Loading...");
      } else if (error) {
        console.error(error);
      } else {
        console.log("File uploaded successfully!");
      }
    } else {
      console.log("No file selected");
    }
  };

  return (
    <Form
      onSubmit={handleFormSubmit}
      onChange={handleFileChange}
      fileName={fileName}
    />
  );
};

export default UpdateFiles;
