import React from 'react';

class About extends React.Component{
    render(){
        return (
            <section className="clearfix position-relative py-5 dark">
                <div className="container px-md-0 px-4">
                    <div className="clearfix text-center mb-5">
                        <h1 className="display-1 opacity-25 mb-0">About Me</h1>
                        <p className="text-white opacity-50">List of my educational and work achievements as well as my coding skills.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <h4 className="font-weight-normal mb-3">Education</h4>
                            <div className="clearfix block px-4 py-3 mb-3">
                                <span>Bacholar of Arts</span>
                                <h5 className="font-weight-normal mb-1">California State University</h5>
                                <span className="date">2011/08 - 2014/05</span>
                                <p></p>
                            </div>
                            <div className="clearfix block px-4 py-3 mb-3">
                                <span>Associate of Arts</span>
                                <h5 className="font-weight-normal mb-1">Fullerton College</h5>
                                <span className="date">2008/01 - 2011/05</span>
                                <p></p>
                            </div>
                            <div className="clearfix block px-4 py-3 mb-3">
                                <span>Web Design & Graphics</span>
                                <h5 className="font-weight-normal mb-1">North County Community College District</h5>
                                <span className="date">2007/04 - 2008/05</span>
                                <p></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h4 className="font-weight-normal mb-3">Experience</h4>
                            <div className="clearfix block px-4 py-3 mb-3">
                                <span>Lead Developer</span>
                                <h5 className="font-weight-normal mb-1">Turn-keys System, LLC</h5>
                                <span className="date">2016/08 - Present</span>
                                <p>Test</p>
                            </div>
                            <div className="clearfix block px-4 py-3 mb-3">
                                <span>Web Developer</span>
                                <h5 className="font-weight-normal mb-1">US Newspaper, Inc.</h5>
                                <span className="date">2014/12 - 2016/07</span>
                                <p></p>
                            </div>
                            <div className="clearfix block px-4 py-3 mb-3">
                                <span>Frontend Developer</span>
                                <h5 className="font-weight-normal mb-1">Raeken, Inc.</h5>
                                <span className="date">2014/01 - 2015/12</span>
                                <p></p>
                            </div>
                            <div className="clearfix block px-4 py-3 mb-3">
                                <span>Web Developer</span>
                                <h5 className="font-weight-normal mb-1">Link4 Corporation</h5>
                                <span className="date">2013/07 - 2013/12</span>
                                <p></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h4 className="font-weight-normal mb-3">Certificate</h4>
                            <div className="clearfix block px-4 py-3 mb-3">
                                <span>Frontend Bootcamp</span>
                                <h5 className="font-weight-normal mb-1">FreeCodeCamp</h5>
                                <span className="date">2019/08</span>
                                <p>Test</p>
                            </div>
                            <div className="clearfix block px-4 py-3 mb-3">
                                <span>Google Tag Manager</span>
                                <h5 className="font-weight-normal mb-1">Google, Inc.</h5>
                                <span className="date">2018/12</span>
                                <p></p>
                            </div>
                            <div className="clearfix block px-4 py-3 mb-3">
                                <span>Shaping Up With Angular</span>
                                <h5 className="font-weight-normal mb-1">Code School</h5>
                                <span className="date">2017/01</span>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;