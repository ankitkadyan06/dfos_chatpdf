import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Close from "./assets/close.svg";

const FileUpload = () => {
  const [fileName, setFileName] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const updatedFileNames = [...fileName, file.name];
      setFileName(updatedFileNames);

      localStorage.setItem("uploadedFiles", JSON.stringify(updatedFileNames));
    }
  };

  const handleClose = (index) => {
    const updatedFileNames = fileName.filter((_, i) => i !== index);
    setFileName(updatedFileNames);
    localStorage.setItem("uploadedFiles", JSON.stringify(updatedFileNames));
  };

  useEffect(() => {
    const savedFiles = localStorage.getItem("uploadedFiles");
    if (savedFiles) {
      setFileName(JSON.parse(savedFiles));
    }
  }, []);

  return (
    <div className="text-cyan-950 w-[100%] pt-[20px] mt-[40px]">
      <label
        htmlFor="uploadFile"
        className="block w-[50%] text-center py-[1%] cursor-pointer text-cyan-950 font-poppins text-xl border-[2px] border-dashed border-[#ccc] ml-[25%]"
      >
        Upload
      </label>
      <input
        type="file"
        id="uploadFile"
        accept=".pdf"
        className="hidden"
        onChange={handleFileChange}
        multiple
      />

      {fileName.length === 0 ? (
        <div className="mt-[20px] w-[50%] ml-[25%]">
          <div className="rounded px-[10px] py-[10px] text-center">
            No file uploaded
          </div>
        </div>
      ) : fileName.length !== 0 ? (
        <div className="mt-[20px] mr-[20px] w-[50%] ml-[25%] block lg:grid lg:grid-cols-3 gap-4 font-poppins">
          {fileName.map((fileName, index) => (
            <CardGroup>
              <Card
                style={{ width: "100%" }}
                className="shadow-md mb-3 lg:mb-0"
              >
                <Card.Body>
                  <Card.Title
                    className="flex justify-between text-lg h-12 mb-5"
                    style={{ color: "#3b82f6" }}
                  >
                    <Link
                      to={`/chat/1?fileNames=${fileName}`}
                      className="no-underline"
                      key={index}
                    >
                      {fileName}
                    </Link>
                    <img
                      src={Close}
                      onClick={()=>{handleClose(index)}}
                      alt=""
                      className="w-[10%] mb-[20px] cursor-pointer"
                    />
                  </Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, nisi?
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default FileUpload;
