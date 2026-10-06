// Small evidence panels shown beside each featured case study.

function ProfitFlow() {
  const inputs = [
    ['Shopify API', 'Orders, refunds, products'],
    ['Meta API', 'Ad spend and insights'],
    ['Suppliers', 'Costs and expenses'],
  ];
  return (
    <div className="flow">
      <ul className="flow__inputs">
        {inputs.map(([src, what]) => (
          <li key={src}>
            <span className="flow__src">{src}</span>
            <span className="flow__what">{what}</span>
          </li>
        ))}
      </ul>
      <div className="flow__join" aria-hidden="true" />
      <p className="flow__out">
        <span className="flow__src">Output</span>
        <span className="flow__big display">Real profit per ad</span>
      </p>
    </div>
  );
}

function Roles() {
  const roles = [
    ['Admin', 'Users, curriculum, audit log'],
    ['Instructor', 'Sessions, tasks, reviews'],
    ['Parent', 'Progress and trends'],
    ['Student', 'Challenges, badges, ranks'],
  ];
  return (
    <div className="roles">
      <ul className="roles__grid">
        {roles.map(([r, d]) => (
          <li key={r}>
            <span className="roles__name display">{r}</span>
            <span className="roles__desc">{d}</span>
          </li>
        ))}
      </ul>
      <p className="roles__api">One Express 5 API · MongoDB · Socket.IO</p>
    </div>
  );
}

function CallPipeline() {
  const gates = ['Consent recorded', 'Not on do-not-call list', 'Inside Egyptian calling hours'];
  return (
    <ol className="pipe">
      <li className="pipe__step">
        <span className="pipe__n">1</span>
        <div>
          <p className="pipe__title">Scheduler gates</p>
          <ul className="pipe__checks">
            {gates.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      </li>
      <li className="pipe__step">
        <span className="pipe__n">2</span>
        <div>
          <p className="pipe__title">Arabic AI dialogue</p>
          <p className="pipe__text">Script grounded in ingested procedures (RAG).</p>
        </div>
      </li>
      <li className="pipe__step">
        <span className="pipe__n">3</span>
        <div>
          <p className="pipe__title">Rules engine decides</p>
          <p className="pipe__chips">
            <span>Resolved</span>
            <span>Retry</span>
            <span>Hand off</span>
          </p>
        </div>
      </li>
      <li className="pipe__step">
        <span className="pipe__n">4</span>
        <div>
          <p className="pipe__title">First-call resolution report</p>
        </div>
      </li>
    </ol>
  );
}

function Modules() {
  const mods = [
    'Patients',
    'Queue & display board',
    'Encounters',
    'Vitals & diagnoses',
    'Prescriptions',
    'Wards & beds',
    'Laboratory',
    'Radiology',
    'Surgery',
    'Invoices & payments',
    'Insurance claims',
    'Identity & roles',
  ];
  return (
    <ul className="mods">
      {mods.map((m) => (
        <li key={m}>{m}</li>
      ))}
    </ul>
  );
}

const proofs = {
  profit: { el: ProfitFlow, caption: 'Three data sources joined into one number a team can act on.' },
  roles: { el: Roles, caption: 'Four role-based dashboards on one API.' },
  pipeline: { el: CallPipeline, caption: 'The AI talks; deterministic rules decide.' },
  modules: { el: Modules, caption: 'Modules across the app and its SQL Server schema.' },
};

export default function Proof({ type }) {
  const p = proofs[type];
  if (!p) return null;
  const El = p.el;
  return (
    <figure className="proof">
      <El />
      <figcaption className="proof__cap">{p.caption}</figcaption>
    </figure>
  );
}
