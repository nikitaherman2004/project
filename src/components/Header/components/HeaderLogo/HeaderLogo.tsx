import React, { ReactElement, useCallback } from "react";
import logoSvg from '../../../../img/logo-juce-svgrepo-com.svg';
import './headerLogo.scss';
import { useNavigate } from 'react-router-dom';

const HeaderLogo = (): ReactElement => {
    const navigate = useNavigate();

    const onClick = useCallback(() => {
        navigate('/home');
    }, []);


    return <div className='logoContainer' onClick={onClick}>
        <img src={logoSvg} />
        <span>feast</span>
    </div>
};

export default HeaderLogo;  