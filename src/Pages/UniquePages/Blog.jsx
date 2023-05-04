import React from "react";
import ReactToPdf from "react-to-pdf";
import { FaDownload } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Blog = () => {
  const ref = React.createRef();
  return (
    <div>
      <div>
        <ReactToPdf targetRef={ref} filename="div-blue.pdf">
          {({ toPdf }) => (
            <button
                data-tooltip-id="download-as-pdf"
                data-tooltip-content="Download As PDF"
              className="relative -ml-1 left-3/4 top-14 p-5 bg-gray-600 rounded-full"
              onClick={toPdf}>
                <FaDownload className=""></FaDownload>
              <Tooltip id="download-as-pdf" />
            </button>
          )}
        </ReactToPdf>
        <div className="mx-auto" style={{ width: 795 }} ref={ref}>
          <div>
            <h3 className="font-bold text-4xl ml-3 p-2 text-gray-900 text-opacity-80 bg-white rounded-3xl px-3">
              {" "}
              Answer to the Given{" "}
              <span className="text-green-500 uppercase">Questions</span>
            </h3>

            <div className="bg-gray-900 bg-opacity-80 my-5 text-white mx-2 p-6 rounded-xl shadow-xl">
              <h5 className="text-xl">
                Tell us the differences between uncontrolled and controlled
                components.
              </h5>
              <p>
                <span className="text-green-500">Answer:-</span>

              </p>
            </div>

            <div className="bg-gray-900 bg-opacity-80 my-5 text-white mx-2 p-6 rounded-xl shadow-xl">
              <h5 className="text-xl">
               How to validate React props using PropTypes?
              </h5>
              <p>
                <span className="text-green-500">Answer:-</span>

              </p>
            </div>

            <div className="bg-gray-900 bg-opacity-80 my-5 text-white mx-2 p-6 rounded-xl shadow-xl">
              <h5 className="text-xl">
                Tell us the difference between nodejs and express js.
              </h5>
              <p>
                <span className="text-green-500">Answer:-</span>
              </p>
            </div>

            <div className="bg-gray-900 bg-opacity-80 my-5 text-white mx-2 p-6 rounded-xl shadow-xl">
              <h5 className="text-xl">
                What is a custom hook, and why will you create a custom hook?
              </h5>
              <p>
                <span className="text-green-500">Answer:-</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
