
import React from 'react'

class ClassApp extends React.Component {
    state = {
        num: 0
    }



    render(){
        return (
            <div>
                <h1>class app</h1>
                <h2>{this.state.num}</h2>
            </div>
        )
    }
}

export default ClassApp