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
                            {this.props.data.education.map((resp) =>
                                <div className="clearfix block px-4 py-3 mb-3" key={resp.id}>
                                    <span>{resp.deploma}</span>
                                    <h5 className="font-weight-normal mb-1">{resp.name}</h5>
                                    <span className="date">{resp.start} - {resp.end}</span>
                                    <p></p>
                                </div>
                            )}
                        </div>
                        <div className="col-md-4">
                            <h4 className="font-weight-normal mb-3">Experience</h4>
                            {this.props.data.experience.map((resp) => 
                                <div className="clearfix block px-4 py-3 mb-3" key={resp.id}>
                                    <span>{resp.position}</span>
                                    <h5 className="font-weight-normal mb-1">{resp.name}</h5>
                                    <span className="date">{resp.start} - {resp.end}</span>
                                    <p></p>
                                </div>
                            )}
                            {/*<div className="clearfix text-center mb-2">
                                <button className="btn btn-primary">Show More</button>
                            </div>*/}
                        </div>
                        <div className="col-md-4">
                            <h4 className="font-weight-normal mb-3">Certificate</h4>
                            {this.props.data.certificates.map((cert) => 
                                <div className="clearfix block px-4 py-3 mb-3" key={cert.id}>
                                    <span>{cert.deploma}</span>
                                    <h5 className="font-weight-normal mb-1">{cert.company}</h5>
                                    <span className="date">{cert.date}</span>
                                    <p></p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;