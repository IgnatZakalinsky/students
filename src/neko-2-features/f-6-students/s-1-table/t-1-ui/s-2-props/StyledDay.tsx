import * as React from "react";
import {ReactNode, useState} from "react";

const StyledDay: React.FC<{SD: (day: string) => ReactNode}> = ({SD}) => {
    const [day, setDay] = useState<string>('Monday');

    return (
        <>
            <select value={day} onChange={e => setDay(e.target.value)}>
                <option value={'Monday'}>1</option>
                <option value={'Tuesday'}>2</option>
                <option value={'Wednesday'}>3</option>
                <option value={'Thursday'}>4</option>
                <option value={'Friday'}>5</option>
            </select>

            {SD(day)}
        </>
    )
};

export default StyledDay;
