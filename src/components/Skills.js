import React from 'react';

class Skills extends React.Component
{
    render(){
        return (
            <section className="skills py-5 dark">
                <div className="container">
                    <div className="clearfix">
                        <h1 className="display-1 opacity-25 mb-5">My Skills</h1>
                    </div>
                    <div className="row justify-content-center text-center">
                        <div className="col-md-10">
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>React Js</li>
                                <li>JavaScript</li>
                                <li>PHP</li>
                                <li>Webpack</li>
                                <li>Bootstrap5</li>
                                <li>WordPress</li>
                                <li>Laravel</li>
                                <li>Mango DB</li>
                                <li>MySQL</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Skills;