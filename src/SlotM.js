import React from "react";
const SlotM=(props)=>{
    // let x= '😍';
    // let y= '😍';
    // let z= '😍';
  
    // let x= props.x;
    // let y= props.y;
    // let z= props.z;

    let {x, y, z} = props;
  
  
    if((x===y) && (y===z)){
      return(
        <>
        <div className='slot-inner'>
          <h3>{x} {y} {z} </h3>
          <h4>This is matching</h4>
          <hr />
        </div>
        </>
      )
    }else{
      return(
        <>
        <div className='slot-inner'>
          <h3>{x} {y} {z} </h3>
          <h4>This is not matching</h4>
          <hr />
        </div>
        </>
      )
    }
  
  }

  export default SlotM;