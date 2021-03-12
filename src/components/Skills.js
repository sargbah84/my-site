import React from 'react';

class Skills extends React.Component
{
    render(){
        return (
            <section className="skills position-relative pb-5 text-center dark">
                <div className="container px-md-0 px-4">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <h4 className="font-weight-normal my-3">Coding Skills</h4>
                            <ul>
                                {this.props.data.skills.map((resp) => 
                                    <li key={resp.id}>{resp.name}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Skills;