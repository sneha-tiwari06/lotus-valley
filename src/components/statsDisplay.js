import React from 'react';

function StatsDisplay() {
    return (
        <div className="stats-display w-100 padding">
            <div className='container'>
                <h2 className='h1'> Our Stats</h2>
                <div className='element'>
                    <div className='element-items'>
                        <div className='element-icon'>
                            <img src='../assets/icons/map.png' alt=''></img>
                        </div>
                        <div className='element-content' id="stats-content-1">
                            <p>Acres of arts Sports</p>
                        </div>
                    </div>
                    <div className='element-items'>
                        <div className='element-content' id="stats-content-2">
                            <p>Student-Teacher ratio</p>
                        </div>
                        <div className='element-icon'>
                            <img src='../assets/icons/degree.png' alt=''></img>
                        </div>
                    </div>
                    <div className='element-items'>
                        <div className='element-icon'>
                            <img src='../assets/icons/football.png' alt=''></img>
                        </div>
                        <div className='element-content' id="stats-content-1">
                            <p>Sports Activities</p>
                        </div>
                    </div>
                    <div className='element-items'>
                        <div className='element-content' id="stats-content-2">
                            <p>Clubs</p>
                        </div>
                        <div className='element-icon'>
                            <img src='../assets/icons/university.png' alt=''></img>
                        </div>
                    </div>
                    <div className='element-items'>
                        <div className='element-icon'>
                            <img src='../assets/icons/people.png' alt=''></img>
                        </div>
                        <div className='element-content' id="stats-content-1">
                            <p>Students</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatsDisplay;
