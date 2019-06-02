import React from 'react'
import loadingGif from "../../loading.gif";

const Loader = ({width,height}) => {
    return (
        <div className="text-center">
              <img
                src={loadingGif}
                width={width ? width :"40px"}
                height={height ? height : "40px"}
                className="image"
                alt=""
              />
            </div>
    )
}

export default Loader
