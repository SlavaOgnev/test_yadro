import React from 'react';
import {getPageArray} from "../../utils/pages";

const MyPagination = ({totalPage, page, setPage}) => {
    let pageArray = getPageArray(totalPage);
    return (
    <div className='page__wrapper'>
        {pageArray.map(btn  =>
            <span key={btn} onClick={()=>setPage(btn)} className={btn === page ? 'page__current page__number' : 'page__number '}>
                {btn}
            </span>
        )}
    </div>
    );
};

export default MyPagination;