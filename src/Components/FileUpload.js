import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
// import Button from 'react-bootstrap/Button';

const FileUpload = () => {
  const [fileName, setFileName] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName((prevFileName) => [...prevFileName, file.name]);

      localStorage.setItem('uploadedFiles', JSON.stringify([...fileName, file.name]));
    }
  };
  useEffect(() => {
    
    const savedFiles = localStorage.getItem('uploadedFiles');
    if (savedFiles) {
      setFileName(JSON.parse(savedFiles));
    }
  }, []);
//   const handleClose = () => {
//     localStorage.removeItem('uploadedFiles');
//     setFileName(false);
//   };

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
            <Link to={`/chat/1?fileNames=${fileName}`} className="no-underline" key={index}>
              <CardGroup>
                <Card style={{ width: "100%" }} className="shadow-md mb-3 lg:mb-0">
                  <Card.Body>
                    <Card.Title className="text-lg h-12 mb-5" style={{ color: "#3b82f6" }}>
                      {fileName}
                    </Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nisi?
                    </Card.Text>
                    {/* <Button onChange={handleClose} variant="danger">Close</Button> */}
                  </Card.Body>
                </Card>
              </CardGroup>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default FileUpload;
