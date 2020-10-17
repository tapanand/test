import React from 'react';
import IQuestion from '../../models/IQuestion';


interface ITextProps extends IQuestion {

}

class TextType extends React.PureComponent<ITextProps, object> {
    constructor(props: ITextProps) {
        super(props);
    }
    render() {
        return (
            <>
                <label htmlFor="" key='2'>
                    <input type="text" name="quize" id="" />
                </label>

            </>

        );
    }
}

export default TextType;
