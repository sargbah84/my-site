import React from 'react';
import ToolIcon from './ToolIcons';

const Tools = ({ data }) => (
  <section className="tools-section position-relative" id="tools">
    <span className="section-ghost section-ghost-right" aria-hidden="true">
      tools i
      <br />
      used
    </span>

    <div className="container px-md-0 px-4 position-relative">
      <div className="row align-items-center">
        <div className="col-md-7 order-md-1 order-2">
          <div className="tool-grid">
            {data.tools.map((tool) => (
              <div className="tool-item" key={tool.id} title={tool.name}>
                <ToolIcon name={tool.icon} />
                <span className="tool-name">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-5 order-md-2 order-1 mb-4 mb-md-0">
          <h2 className="section-heading">
            <span className="section-mark" aria-hidden="true" />
            tools
          </h2>
          <p className="section-lead mb-0">
            The languages, frameworks and design tools I reach for when building
            and shipping web and mobile applications.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Tools;
