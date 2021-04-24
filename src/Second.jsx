import React from "react";

const Second=()=>{
    return(
        <div className="super">
            {Super.map(co=><div>{co.name}</div>)}
        </div>
    );
}
export default Second;