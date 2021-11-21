import React, { Component } from "react";


class MyForm extends Component {

    render() {

        const { text, inputStyle, labelStyle, type } = this.props;
        return <div>
            <form>
                <label style={labelStyle} for={text}>
                    {text}
                    <input type={type} id={text} style={inputStyle} />
                </label>
            </form>
        </div>
    }
}

export default MyForm;