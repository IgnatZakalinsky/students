import React from 'react'

class MidaevSkill extends React.Component<{skill: string}> {
    render() {
        return(
            <div className={"styleSkill"}>
                {this.props.skill}
            </div>
        )
    }
}

export default MidaevSkill