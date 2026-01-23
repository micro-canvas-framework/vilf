import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

function Card(props: { title: string; children: React.ReactNode }) {
  return (
    <div className="vilf-card">
      <h3 style={{ marginTop: 0 }}>{props.title}</h3>
      <div className="vilf-muted">{props.children}</div>
    </div>
  );
}

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Vigía Innovation Lab Framework (VILF) 1.0"
      description="A governance and operating blueprint for innovation lab networks."
    >
      <header className="hero hero--primary">
        <div className="container" style={{ paddingTop: 40, paddingBottom: 40 }}>
          <h1 className="hero__title">Vigía Innovation Lab Framework (VILF) 1.0</h1>
          <p className="hero__subtitle">
            A practical governance and operating blueprint to design, run, and scale innovation lab networks
            with measurable capability, coordination integrity, and audit-ready execution.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 18 }}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Read Introduction
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/roadmap">
              View Roadmap
            </Link>
          </div>
          <p style={{ marginTop: 16 }} className="vilf-muted">
            Note: Chapter content will be migrated only after the Docusaurus foundation and styling parity gates are completed.
          </p>
        </div>
      </header>

      <main>
        <section className="container" style={{ paddingTop: 28, paddingBottom: 12 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 16,
            }}
          >
            <Card title="What VILF is">
              A framework for building and governing <strong>innovation lab networks</strong>—including standards, roles, capability
              development, coordination mechanisms, and monitoring/evaluation practices.
            </Card>
            <Card title="Who it is for">
              Government innovation units, lab operators, network coordination units (NCU), ecosystem partners, and sponsors who need a
              repeatable operating model.
            </Card>
            <Card title="How to use it">
              Use VILF to define governance, establish operating rhythms, build capability and infrastructure spines, and run lab
              portfolios with evidence-backed decision thresholds.
            </Card>
          </div>
        </section>

        <section className="container" style={{ paddingTop: 24, paddingBottom: 16 }}>
          <h2>How it fits into the Vigía stack</h2>
          <p className="vilf-muted">
            VILF is part of a family of frameworks used to structure innovation and execution under uncertainty, with explicit evidence
            and governance constraints.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 16,
              marginTop: 16,
            }}
          >
            <Card title="MicroCanvas Framework (MCF) 2.1">
              The structured innovation process used to move from opportunity → problem → validation → efficiency → scaling.
            </Card>
            <Card title="Innovation Maturity Model (IMM) / IMM-P®">
              A capability and readiness lens to assess whether organizations can execute innovation repeatably—not a project process.
            </Card>
            <Card title="Vigía Incubation Framework (VIF)">
              A complementary blueprint focused on incubator and acceleration networks—reference structure for parity and reuse.
            </Card>
            <Card title="Vigía Innovation Lab Framework (VILF)">
              The lab-network operating model: governance, coordination, capability spine, infrastructure spine, MEL, accreditation, and
              network-level execution integrity.
            </Card>
          </div>
        </section>

        <section className="container" style={{ paddingTop: 10, paddingBottom: 36 }}>
          <div className="vilf-card">
            <h2 style={{ marginTop: 0 }}>Next: styling parity, then chapter migration</h2>
            <p className="vilf-muted">
              We will finalize styling parity (VIF + Doulab palette) and infrastructure gates before migrating chapter content into MDX.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 10 }}>
              <Link className="button button--primary" to="/docs/roadmap">
                View Roadmap
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
