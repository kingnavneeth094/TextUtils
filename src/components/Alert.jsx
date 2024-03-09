import React from "react";

function Alert(props) {
    return (
        props.alert && <div style={{justifyContent:"center",textAlign:"center",alignItems:"center"}} className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        {props.alert.message}
        </div>
    );
}

export default Alert;
