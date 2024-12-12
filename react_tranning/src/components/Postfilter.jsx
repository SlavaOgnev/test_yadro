import React from 'react';
import MyInput from "./UI/input/MyInput";
import Myselect from "./UI/select/Myselect";

const Postfilter = ({filter, setFilter}) => {
    return (
        <div>
            <div>
                <MyInput value={filter.search} onChange={(e) =>setFilter({...filter, search:e.target.value}) }></MyInput>
                <Myselect value={filter.sort}
                          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                          defaultValue='Сортировка' option={[
                    {value: 'title', name: 'Сортировка по заголовку'},
                    {value: 'body', name: 'Сортировка по описанию'}
                ]}></Myselect>

            </div>
        </div>
    );
};

export default Postfilter;