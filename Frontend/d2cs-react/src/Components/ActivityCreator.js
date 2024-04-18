import { useRef } from 'react'
import { Button } from './Button';

export const ActivityCreator = (
    click
) => {
    const activityNameRef = useRef();
    const dateRef = useRef();
    const timeRef = useRef();

    function onSubmit(e) {
        e.preventDefault();
        console.log({
            activityName: activityNameRef.current.value,
            date: dateRef.current.value,
            time: timeRef.current.value
        })
    }

    return (
        <div className={click ? 'popup active' : 'popup'}>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="activityname">Activity name:</label><br></br>
                    <input ref={activityNameRef} id="activityname" type="text" placeholder='OOF!' />
                </div>
                <div>
                    <label htmlFor="date">Date:</label><br></br>
                    <input ref={dateRef} id='date' type="date" value={form.date} />
                </div>
                <div>
                    <label htmlFor="time">Time:</label><br></br>
                    <input ref={timeRef} id='time' type="time" value={form.time} />
                </div>
                <Button name="SubmitNewFierteamButton" type='submit' buttonStyle='btn--outline'>Create</Button>
            </form>
            <Button onClick={toggleNewFierteam} name="CancleNewFierteamButton" buttonStyle='btn--outline'>Cancel</Button>
        </div>
    );
};