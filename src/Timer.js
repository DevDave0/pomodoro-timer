import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SettingsButton from './SettingsButton';

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
            <div style={{marginTop: '20px'}}>
                <PlayButton />
                <PauseButton />
            </div>
            <div style={{marginTop: '20px'}}>
                <SettingsButton />
            </div>
        </div>
    );
}

export default Timer;