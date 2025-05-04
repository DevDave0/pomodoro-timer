import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const red = '#f54e4e';
const green = '#4aec8c';

function Timer () {

    let percentage = 100;

    return (
        <div>
            <CircularProgressbar value={percentage} styles={buildStyles({
                textColor: '#fff',
                pathColor: red,
                trailColor: 'rgba(255,255,255,.2)',
            })} text={`${percentage}%`} />
        </div>
    );
}

export default Timer;