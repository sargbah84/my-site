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
                            {this.props.data.careers.map((resp) => 
                                <div className="block px-4 py-3 mb-3" key={resp.id}>
                                    <span className="small">{resp.type}</span>
                                    <h5 className="font-weight-normal mb-0">{resp.name}</h5>
                                    <p className="small d-block opacity-50 mb-1">{resp.details}</p>
                                    <a href={resp.details} className="btn btn-primary btn-circle py-1" target="_blank" rel="noreferrer">Visit Site</a>
                                </div>
                            )}
                        </div>
                        <div className="col-md-4">
                            <h4 className="font-weight-normal mb-2">Profession Projects</h4>
                            {this.props.data.professionals.map((resp) => 
                                <div className="block px-4 py-3 mb-3" key={resp.id}>
                                    <span className="small">{resp.type}</span>
                                    <h5 className="font-weight-normal mb-0">{resp.name}</h5>
                                    <p className="small d-block opacity-50 mb-1">{resp.details}</p>
                                    <a href={resp.details} className="btn btn-primary btn-circle py-1" target="_blank" rel="noreferrer">Visit Site</a>
                                </div>
                            )}
                        </div>
                        <div className="col-md-4">
                            <h4 className="font-weight-normal mb-2">Fun Projects</h4>
                            {this.props.data.others.map((resp) => 
                                <div className="block px-4 py-3 mb-3" key={resp.id}>
                                    <span className="small">{resp.type}</span>
                                    <h5 className="font-weight-normal mb-0">{resp.name}</h5>
                                    <p className="small d-block opacity-50 mb-1">{resp.details}</p>
                                    <a href={resp.details} className="btn btn-primary btn-circle py-1" target="_blank" rel="noreferrer">Visit Site</a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio;