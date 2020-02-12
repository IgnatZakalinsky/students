import React from 'react'
import css from './dz2OtMidaev.module.css'

class S19Day extends React.Component<{ day: string }> {

    render = () => {
        let d;
        switch (this.props.day) {
            case 'Monday':
                d = css.monday;
                break;
            case 'Tuesday':
                d = css.tuesday;
                break;
            case 'Wednesday':
                d = css.wednesday;
                break;
            case 'Thursday':
                d = css.thursday;
                break;
            case 'Friday':
                d = css.friday;
                break;
        }


        return (
            <div className={d}>
                {this.props.day}
            </div>
        )
    }
}

export default S19Day