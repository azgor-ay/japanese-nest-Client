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
        <ReactToPdf targetRef={ref} filename="AY'S Answers.pdf">
          {({ toPdf }) => (
            <button
              data-tooltip-id="download-as-pdf"
              data-tooltip-content="Download As PDF"
              className="relative -ml-1 left-3/4 top-14 p-5 bg-gray-600 rounded-full"
              onClick={toPdf}
            >
              <FaDownload className=""></FaDownload>
              <Tooltip id="download-as-pdf" />
            </button>
          )}
        </ReactToPdf>
        <div className="mx-auto" style={{ width: 795 }} ref={ref}>
          <div>
            <h3 className="font-bold text-4xl ml-3 p-2 text-gray-900 text-opacity-80 bg-white rounded-3xl px-3 mb-5">
              {" "}
              Answer to the Given{" "}
              <span className="text-green-500 uppercase">Questions</span>
            </h3>

            <div className="bg-gray-900 bg-opacity-80 my-1 text-white mx-2 p-3 rounded-xl shadow-xl">
              <h5 className="text-green-500">
                Tell us the differences between uncontrolled and controlled
                components.
              </h5>
              <p className="text-xs">
                <span className="text-green-500">Answer:-</span>
                The main key difference between controlled and uncontrolled
                components are one is managed by react and another by
                DOM/Browser. <br /> <br />
                Controlled components are managed by react it can have a initial
                value and it have more control over the state of component.
                React simply manage controlled components with using function
                and managing state of components. <br /> <br />
                On the other hand uncontrolled components are managed by DOM
                means it don't have any specific state management system or it
                does'nt need to re-render the component on change unlike
                controlled components.
              </p>
            </div>

            <div className="bg-gray-900 bg-opacity-80 my-1 text-white mx-2 p-3 rounded-xl shadow-xl">
              <h5 className="text-green-500">
                How to validate React props using PropTypes?
              </h5>
              <p className="text-xs">
                <span className="text-green-500">Answer:-</span>
                React PropTypes is just a react package that allows to define
                expected type and shape of any prop. <br /> <br />
                To validate react propTypes first have to instal that package
                then import it and use something like{" "}
                <code>ComponentName.PropTypes</code> then inside it use{" "}
                <code>data.PropTypes.dataType--number/string/bool</code>. <br />{" "}
                <br />
                Well it's a little bit of confusing to describe in text but
                that's how it happened.
              </p>
            </div>

            <div className="bg-gray-900 bg-opacity-80 my-1 text-white mx-2 p-3 rounded-xl shadow-xl">
              <h5 className="text-green-500">
                Tell us the difference between nodejs and express js.
              </h5>
              <p className="text-xs">
                <span className="text-green-500">Answer:-</span>
                Well nodeJs and expressJs are same in use both are used for
                server side web development but they serve different purpose.{" "}
                <br /> <br />
                NodeJs is a JavaScript runtime environment that allows to run
                JavaScript code on server-side. It use JavaScript, NodeJs also
                has a large ecosystem of third-party modules that used to extend
                functionality. <br />
                <br />
                on the other hand, Express.js, is a web application framework
                built with Node.js. Express.js provides a set of features for
                building web applications, like routing. It provides a simpler
                and more structured way of building web applications than using
                Node.js directly. <br />
                <br />
                Express.js makes it easier to build web applications by
                providing a higher-level API, while Node.js provides only a
                lower-level API.
              </p>
            </div>

            <div className="bg-gray-900 bg-opacity-80 my-1 text-white mx-2 p-3 rounded-xl shadow-xl">
              <h5 className="text-green-500">
                What is a custom hook, and why will you create a custom hook?
              </h5>
              <p className="text-xs">
                <span className="text-green-500">Answer:-</span>
                Custom hooks are something that can be used to carry a value and use it in multiple places where ever it's needed. <br /><br />
                To carry any data of any kind of string, number, boolean we can create a custom hook. To make something interactive or anything that depends on something can be use a custom hook. By using a custom we can easily hold a data. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
