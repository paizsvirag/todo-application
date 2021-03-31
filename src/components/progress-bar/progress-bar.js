import { Component } from 'react';
import './progress-bar.css';

class ProgressBar extends Component {

    constructor(props) {
        super();
    };

    render() {

        const progressBarStyle = {
            width: this.props.percentage < 0 ?
                0 :
                this.props.percentage > 100 ?
                    100 : this.props.percentage + '%'
        };

        return (
            <div className='main'>
                <div className="progress-bar-base">
                    <div className="progress-bar" style={progressBarStyle}>{this.props.percentage}%</div>
                </div>
            </div>
        );
    };
};

export default ProgressBar;