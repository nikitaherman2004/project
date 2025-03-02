import React, { FC, useCallback } from "react";
import CommonInput from "src/components/CommonInput/CommonInput";
import HeaderButton from "../HeaderButton/HeaderButton";
import './headerSearch.scss';

const HeaderSearch: FC = () => {
    const onChange = useCallback(() => {

    }, []);
    return <div className="searchContainer">
        <CommonInput onChange={onChange}
            width="400px"
            height="60%"
            placeHolder="Поиск места"
        />
        <HeaderButton onClick={() => { }} label="Поиск" height={34} />
    </div>
};

export default HeaderSearch;