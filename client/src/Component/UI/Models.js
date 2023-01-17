import { Fragment, useEffect } from "react";

const Models = (props) =>{
   
    useEffect(()=>{
        const fetchData = async() =>{
           const url = '';
           const response = await fetch(url);
           if(response.ok){
             throw new Error('something went wrong');
           }
           const responseData = await response.json();
        }
        fetchData()
    },[])

    return (
        <Fragment>
            <div>

            </div>
        </Fragment>
    )
}

export default Models;