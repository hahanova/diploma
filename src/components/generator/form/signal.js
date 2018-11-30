import React, {Component} from 'react';
import '../generator.css';

export class Signal extends Component {
    constructor(props) {
        super();
        this.props = props;
    }

    getDataSignals(){
        const { 
            name,
            type,
            size,
         } = this.props.signal;

         this.props.signal.name = name.value;
         this.props.signal.type = type.value;
         this.props.signal.size = size.value;

        return this.props.signal;
    }

    render() {
        const { 
            id,
         } = this.props.signal;

        return (
            <div className="form__signal" id={id}>
                <input ref={node => {this.props.signal.name = node}} className="form__input" type="text" id="signal-name" placeholder="name"/>
                <input ref={node => {this.props.signal.type = node}} className="form__input" type="text" id="signal-type" placeholder="type"/>
                <input ref={node => {this.props.signal.size = node}} className="form__input" type="number" id="signal-size" placeholder="size"/>
            </div>

        );
    }
}

export default Signal;
