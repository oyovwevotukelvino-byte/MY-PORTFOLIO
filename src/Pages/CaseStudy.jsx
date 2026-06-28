import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import useMedia from "../hooks/useMedia";
// Helper component
function InfoCard({ title, value }) {
  return (
    <div
      style={{
        flex: 1,
        minWidth: "180px",
        padding: "22px",
        borderRadius: "18px",
        border: "1px solid var(--border)",
        background: "rgba(255,255,255,.03)",
        backdropFilter: "blur(8px)",
        transition: "all .25s ease",
      }}
    >
      <div
        style={{
          fontSize: "11px",
          fontFamily: "var(--font-mono)",
          textTransform: "uppercase",
          letterSpacing: ".08em",
          color: "var(--text-tertiary)",
          marginBottom: "10px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: "22px",
          fontWeight: 700,
          lineHeight: 1.3,
        }}
      >
        {value}
      </div>
    </div>
  );
}
export default function CaseStudy() {
  const { slug } = useParams();
  const isMobile = useMedia("(max-width:768px)");

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    
    <main className="section">
     <div
  className="container"
  style={{
    maxWidth: "1100px",
    paddingInline: isMobile ? "24px" : "40px",
  }}
>

        {/* Hero */}

<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  style={{ marginBottom: "60px" }}
>

  <span
    style={{
      display: "inline-block",
      padding: "8px 16px",
      borderRadius: "999px",
      background: "var(--accent-muted)",
      color: "var(--accent-text)",
      border: "1px solid var(--accent-border)",
      fontSize: "12px",
      letterSpacing: ".08em",
      textTransform: "uppercase",
      fontFamily: "var(--font-mono)",
      marginBottom: "26px"
    }}
  >
    {project.category}
  </span>

  <h1
    style={{
      fontSize:"clamp(40px,9vw,78px)",
      lineHeight: 1.05,
      marginBottom: "24px",
      letterSpacing: "-0.04em",
      maxWidth: "900px"
    }}
  >
    {project.title}
  </h1>

  <p
    style={{
      fontSize: "20px",
      lineHeight: 1.8,
      color: "var(--text-secondary)",
      maxWidth:isMobile
     ? "100%"
     : "760px",
      marginBottom: "48px"
    }}
  >
    {project.tagline}
  </p>

   <div
  style={{
    display: "grid",
    gridTemplateColumns: isMobile
      ? "1fr"
      : "repeat(4,minmax(0,1fr))",
    gap: "18px",
    marginTop: "40px",
  }}
>
  <InfoCard title="Year" value={project.year} />
  <InfoCard title="Status" value={project.status} />
  <InfoCard title="Category" value={project.category} />
  <InfoCard
    title="Tech Stack"
    value={`${project.tech.length} Technologies`}
  />
</div>

   </motion.div>
        {/* Hero Image */}

        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .3 }}
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            borderRadius: "20px",
            marginBottom: "70px",
            border: "1px solid var(--border)"
          }}
        />
       {/* Project Impact */}

{/* Project Impact */}

<section
  style={{
    marginBottom: "90px",
  }}
>
  <span className="section-label">
    Project Impact
  </span>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : "repeat(4,1fr)",
      gap: "18px",
      marginTop: "34px",
    }}
  >
    {project.metrics.map((metric) => (
      <div
        key={metric.label}
        style={{
          border: "1px solid var(--border)",
          borderRadius: "18px",
          padding: "22px",
          background: "var(--bg-secondary)",
          transition: ".25s",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: ".08em",
            color: "var(--text-tertiary)",
            marginBottom: "12px",
          }}
        >
          {metric.label}
        </p>

        <h3
          style={{
            fontSize: isMobile ? "26px" : "30px",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          {metric.value}
        </h3>
      </div>
    ))}
  </div>
</section>
        {/* Overview */}

        {/* Overview */}

<section
  style={{
    display: "grid",
    gridTemplateColumns: isMobile
      ? "1fr"
      : "1fr 1.4fr",

    gap: isMobile ? "32px" : "70px",

    marginTop: isMobile ? "60px" : "90px",
    marginBottom: isMobile ? "60px" : "90px",

    alignItems: "start",
  }}
>
  <div>
    <span className="section-label">Overview</span>

    <h2
      style={{
        fontSize: "clamp(36px,7vw,48px)",
        lineHeight: 1.1,
        marginTop: "18px",
      }}
    >
      Building a modern digital experience.
    </h2>
  </div>

  <p
    style={{
      fontSize: isMobile
     ? "17px"
     : "18px",
      lineHeight: 1.9,
      color: "var(--text-secondary)",
    }}
  >
    {project.desc}
  </p>
</section>

        {/* Problem */}

        {/* Problem */}

<section
  style={{
    display: "grid",
    gridTemplateColumns: isMobile
      ? "1fr"
      : "1fr 1.4fr",

    gap: isMobile ? "32px" : "70px",

    marginTop: isMobile ? "60px" : "90px",
    marginBottom: isMobile ? "60px" : "90px",

    alignItems: "start",
  }}
>
  <p
    style={{
      fontSize: isMobile
     ? "17px"
     : "18px",
      lineHeight: 1.9,
      color: "var(--text-secondary)",
    }}
  >
    {project.problem}
  </p>

  <div>
    <span className="section-label">Problem</span>

    <h2
      style={{
       fontSize: "clamp(36px,7vw,48px)",
        marginTop: "18px",
        lineHeight: 1.1,
      }}
    >
      Every project starts with a real problem.
    </h2>
  </div>
</section>

        {/* Solution */}
       
        {/* Solution */}

<section
  style={{
    display: "grid",
    gridTemplateColumns: isMobile
    ? "1fr"
    : "1.4fr 1fr",
    gap: isMobile ? "32px" : "70px",
    marginBottom: "90px",
    alignItems: "start",
  }}
>
  <div>
    <span className="section-label">Solution</span>

    <h2
      style={{
        fontSize: "40px",
        marginTop: "18px",
        lineHeight: 1.1,
      }}
    >
      Designed for simplicity and scale.
    </h2>
  </div>

  <p
    style={{
      fontSize: "18px",
      lineHeight: 1.9,
      color: "var(--text-secondary)",
    }}
  >
    {project.solution}
  </p>
</section>

        {/* Tech */}

        <section style={{ marginBottom: "70px" }}>
          <h2>Technology Stack</h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "25px"
            }}
          >
            {project.tech.map((tech) => (
              <span
                key={tech}
                style={{
                  padding: "10px 18px",
                  borderRadius: "999px",
                  border: "1px solid var(--border)",
                  background: "var(--bg-secondary)"
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Live */}

        <section
          style={{
            display: "flex",
            gap: "18px",
            flexWrap: "wrap",
            marginBottom: "80px"
          }}
        >
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Live Website
          </a>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              GitHub
            </a>
          )}
        </section>

        <Link
          to="/projects"
          className="btn btn-secondary"
        >
          ← Back to Projects
        </Link>

      </div>
    </main>
  );
}