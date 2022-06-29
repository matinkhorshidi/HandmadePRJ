import React, { useEffect } from 'react';

const Rotation = (props) => {
  // const [count, setCount] = useState(1);
  useEffect(() => {
    // Update the document title using the browser API
    // return //for componentDidMount
  }, []);

  return (
    <div className="position-relative" id="Rotation">
      <div
        className="w-100 vh-100 w-100 position-relative blur-7 "
        style={{ backgroundImage: `url(/img/bg/slide2_cover.png)` }}
      ></div>
      <div
        className="  centered-axis-xy d-flex justify-content-center align-items-center flex-column p-3  "
        style={{
          background: '#c5b2b287',
          borderRadius: '15px',
          width: 'fit-content',
        }}
      >
        <div className="w-50">
          <img
            className="   w-100  "
            src="/img/items/orientation.svg"
            alt="orientation"
          />
        </div>
        <div className="block-header mt-3 ">
          <h3 className="block-title  border-b-s  ">
            Please rotate your phone 90 degrees{' '}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Rotation;
