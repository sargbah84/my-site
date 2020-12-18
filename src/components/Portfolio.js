import React from 'react';

class Portfolio extends React.Component
{
    render(){
        return(
            <section className="portfolio lite py-5">
                <div className="container">
                    <div className="clearfix">
                        <h1 className="display-1 opacity-25 mb-5">My Portfolio</h1>
                        <h4 className="font-weight-normal mb-2">Major Projects</h4>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="block px-4 py-3 mb-3">
                                <span>Laravel</span>
                                <h5 className="font-weight-normal mb-0">TrueLiberia</h5>
                                <p className="small d-block opacity-50 mb-1">A business directory built on Laravel framework.</p>
                                <a href="https://trueliberia.com" className="btn btn-primary btn-circle py-1" target="_blank">Visit Site</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="block px-4 py-3 mb-3">
                                <span>WordPress</span>
                                <h5 className="font-weight-normal mb-2">Real Estate Money, Inc</h5>
                                <p className="small d-block opacity-50 mb-1">Corporate website built on WordPress CMS.</p>
                                <a href="https://realestatemoney.com" className="btn btn-primary btn-circle py-1" target="_blank">Visit Site</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="block px-4 py-3 mb-3">
                                <span>React</span>
                                <h5 className="font-weight-normal mb-2">Terra Cocoa</h5>
                                <p className="small d-block opacity-50 mb-1">A business website built on React Js.</p>
                                <a href="https://terracocoa.com" className="btn btn-primary btn-circle py-1" target="_blank">Visit Site</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio;