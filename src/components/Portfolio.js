import React from 'react';

class Portfolio extends React.Component
{
    render(){
        return(
            <section className="portfolio position-relative lite py-5">
                <div className="container px-md-0 px-4">
                    <div className="clearfix text-center mb-5">
                        <h1 className="display-1 opacity-25">My Portfolio</h1>
                        <p className="text-muted">Below are lists of the different categories of projects. These are honerably mentioned</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <h4 className="font-weight-normal mb-2">Career Projects</h4>
                            <div className="block px-4 py-3 mb-3">
                                <span className="small">WordPress</span>
                                <h5 className="font-weight-normal mb-0">Real Estate Money, Inc</h5>
                                <p className="small d-block opacity-50 mb-1">Corporate website built on WordPress CMS. Also includes multiple lead magnet funnels used by the marketing department to generate new leads and dynamic forms to purchase products.</p>
                                <a href="https://www.realestatemoney.com" className="btn btn-warning btn-circle py-1" target="_blank" rel="noreferrer">Visit Site</a>
                            </div>
                            <div className="block px-4 py-3 mb-3">
                                <span className="small">HTML, CSS & JavaScript</span>
                                <h5 className="font-weight-normal mb-0">ProfitGrabber, Inc</h5>
                                <p className="small d-block opacity-50 mb-1">Software landing page and order form built on on Core CSS, HTML, JavaScript and PHP.</p>
                                <a href="https://www.profitgrabber.com" className="btn btn-warning btn-circle py-1" target="_blank" rel="noreferrer">Visit Site</a>
                            </div>
                            <div className="block px-4 py-3 mb-3">
                                <span className="small">Laravel & Blade Template Engine</span>
                                <h5 className="font-weight-normal mb-0">CoachingCall Organizer</h5>
                                <p className="small d-block opacity-50 mb-1">App to enable coaches and students organize and schedule calls with students.</p>
                                <a href="https://coachingcall.mentormemarko.com" className="btn btn-warning btn-circle py-1" target="_blank" rel="noreferrer">Visit Site</a>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <h4 className="font-weight-normal mb-2">Profession Projects</h4>
                            <div className="block px-4 py-3 mb-3">
                                <span className="small">Shopify Template Engine</span>
                                <h5 className="font-weight-normal mb-0">Swav Apparel</h5>
                                <p className="small d-block opacity-50 mb-1">Online store design and built on the Shopify theme engine.</p>
                                <a href="https://swavapparel.com" className="btn btn-danger btn-circle py-1" target="_blank" rel="noreferrer">Visit Site</a>
                            </div>
                            <div className="block px-4 py-3 mb-3">
                                <span className="small">WordPress & Laravel</span>
                                <h5 className="font-weight-normal mb-0">MTN Liberia Music Awards</h5>
                                <p className="small d-block opacity-50 mb-1">Client award & artist community app built on WordPress CMS and Laravel Framework.</p>
                                <a href="https://mtn.liberiamusicawards.org" className="btn btn-success btn-circle py-1" target="_blank" rel="noreferrer">Visit Site</a>
                            </div>
                            <div className="block px-4 py-3 mb-3">
                                <span className="small">Laravel & React Native</span>
                                <h5 className="font-weight-normal mb-0">TrueLiberia App</h5>
                                <p className="small d-block opacity-50 mb-1">A business directory App built on Laravel framework.</p>
                                <a href="https://www.trueliberia.com" className="btn btn-danger btn-circle py-1" target="_blank" rel="noreferrer">Visit Site</a>
                            </div>
                            <div className="block px-4 py-3 mb-3">
                                <span className="small">React & MongoDB</span>
                                <h5 className="font-weight-normal mb-0">Terra Cocoa</h5>
                                <p className="small d-block opacity-50 mb-1">A business website built on React Js.</p>
                                <a href="https://www.terraliberia.com" className="btn btn-secondary btn-circle py-1" target="_blank" rel="noreferrer">In Progress</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h4 className="font-weight-normal mb-2">Fun Projects</h4>
                            <div className="block px-4 py-3 mb-3">
                                <span className="small">HTML & CSS</span>
                                <h5 className="font-weight-normal mb-0">CSS Card</h5>
                                <p className="small d-block opacity-50 mb-1">One of my most viewed Simple HTML & CSS fun projects on Codepen</p>
                                <a href="https://codepen.io/sargbah84/pen/pyVzRo" className="btn btn-info btn-circle py-1" target="_blank" rel="noreferrer">Visit Project</a>
                            </div>
                            <div className="block px-4 py-3 mb-3">
                                <span className="small">React Js & Custom CSS</span>
                                <h5 className="font-weight-normal mb-0">Coming Soon Page</h5>
                                <p className="small d-block opacity-50 mb-1">Getting my hands at react js and custom css.</p>
                                <a href="https://0i9qs.csb.app/" className="btn btn-info btn-circle py-1" target="_blank" rel="noreferrer">Visit Project</a>
                            </div>
                            <div className="block px-4 py-3 mb-3">
                                <span className="small">React Js, Bootstrap & SCSS</span>
                                <h5 className="font-weight-normal mb-0">My website</h5>
                                <p className="small d-block opacity-50 mb-1">Getting my hands at custom building react components. Also integrating Bootstrap, SCSS and WebFonts.</p>
                                <a href="https://www.princesargbah.me/" className="btn btn-info btn-circle py-1" target="_blank" rel="noreferrer">Visit Project</a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio;