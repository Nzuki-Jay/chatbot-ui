import React from 'react';
import { IoPersonSharp } from "react-icons/io5";

const Query = ({query}) => {

    return (
    <div className='query'>
        <IoPersonSharp className='' />
        <p>{query}</p>
    </div>
    )
}

export default Query
