import React, { useMemo, useState } from 'react';
import ProjectThumb from './ProjectThumb';

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web App' },
  { key: 'mobile', label: 'Mobile App' },
  { key: 'design', label: 'UI Design' },
];

const Portfolio = ({ data }) => {
  const [active, setActive] = useState('all');

  const projects = useMemo(
    () => [...data.careers, ...data.professionals, ...data.others],
    [data]
  );

  const visible =
    active === 'all' ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="portfolio-section position-relative" id="portfolio">
      <span className="deco-ring deco-ring-top" aria-hidden="true" />
      <span className="deco-ring deco-ring-left" aria-hidden="true" />

      <div className="container px-md-0 px-4 position-relative">
        <div className="row align-items-end mb-4">
          <div className="col-md-5">
            <div className="heading-stack">
              <span className="section-ghost" aria-hidden="true">
                my
                <br />
                portfolio
              </span>
              <h2 className="section-heading">
                <span className="section-mark" aria-hidden="true" />
                portofolio
              </h2>
            </div>
          </div>
          <div className="col-md-7">
            <p className="section-lead mb-0">
              A selection of client, professional and personal work, spanning
              corporate sites, business platforms and smaller experiments.
            </p>
          </div>
        </div>

        <div className="filter-tabs mb-4" role="tablist" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              role="tab"
              aria-selected={active === f.key}
              className={`filter-tab${active === f.key ? ' is-active' : ''}`}
              onClick={() => setActive(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {visible.map((project) => (
            <a
              key={project.id}
              className="project-card"
              href={project.url}
              target="_blank"
              rel="noreferrer"
            >
              <ProjectThumb
                category={project.category}
                id={project.id}
                title={project.name}
              />
              <div className="project-card-body">
                <span className="project-card-type">{project.type}</span>
                <h5 className="project-card-title">{project.name}</h5>
              </div>
            </a>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-center text-muted py-4 mb-0">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
