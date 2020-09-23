import React from 'react';
import {connect} from "react-redux"

class PageError extends React.Component{

    render(){
        return(
            <div>
                Page not found
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    };
  };
  
export default connect (null, mapDispatchToProps) (PageError);