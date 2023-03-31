import React from 'react'
import './how.css'
import Button from 'react-bootstrap/Button';

const How = () => {
    return (
        <div>
            <div className="mrProcess">
                <div className="mrRow">
                    <div className="section-title">
                        <div className="pr-line">
                            <div className="line-pr"></div>
                            <p>How it work</p>
                        </div>
                        <h1>Backix makes it easier</h1>
                    </div>

                    <div className="section-button">
                        <Button variant="primary" className="btn-how">HOW WORK</Button>
                    </div>
                </div>
                <div className="processBar">
                    <div className="processMain">
                        <div className="processCircle1 pc"></div>
                        <div className="processCircle2 pc"></div>
                        <div className="processCircle3 pc"></div>
                    </div>
                    <div className="processContent">
                        <h1>Register With Your Real Identity</h1>
                        <h1 className='ProcessMid'>Give Details With Innovative Idea</h1>
                        <h1>& Finally Get Awesome Backers</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default How