import React, {useState} from 'react';
import s from './name.module.css';

const S4Name = () => {
    const [show, setShow] = useState(true);

    return show
        ? (
            <div className={s.name} onMouseOver={() => setShow(false)}>
                Васильев Артем Александрович
            </div>
        )
        : (
            <div className={s.text} onMouseOut={() => setShow(true)}>
                Пришел в инкубатор бомбить REACT!
            </div>
        )
};

export default S4Name;