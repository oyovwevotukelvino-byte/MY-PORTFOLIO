import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="section">
        <div
          className="container"
          style={{
            textAlign: "center",
            padding: "120px 0",
          }}
        >
          <h1
            style={{
              fontSize: "48px",
              marginBottom: "20px",
            }}
          >
            Project Not Found
          </h1>

          <p
            style={{
              color: "var(--text-secondary)",
              marginBottom: "40px",
            }}
          >
            The project you're looking for doesn't exist.
          </p>

          <Link
            className="btn btn-primary"
            to="/projects"
          >
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="section">

      <div
        className="container"
        style={{ maxWidth: "1150px" }}
      >

        {/* Breadcrumb */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Link
            to="/projects"
            style={{
              color: "var(--accent-text)",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            ← Back to Projects
          </Link>
        </motion.div>

        {/* Hero */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          style={{
            marginTop: "50px",
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
        >

          {/* Left */}

          <div>

            <span
              style={{
                display: "inline-block",
                padding: "6px 14px",
                borderRadius: "999px",
                background: "var(--accent-muted)",
                color: "var(--accent-text)",
                fontSize: "12px",
                marginBottom: "20px",
              }}
            >
              {project.category}
            </span>

            <h1
              style={{
                fontSize: "clamp(40px,6vw,72px)",
                lineHeight: 1.05,
                marginBottom: "24px",
              }}
            >
              {project.title}
            </h1>

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "18px",
                lineHeight: 1.8,
                marginBottom: "30px",
              }}
            >
              {project.desc}
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
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
            </div>

          </div>

          {/* Image */}

          <motion.div
            whileHover={{
              scale: 1.02,
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                borderRadius: "20px",
                border: "1px solid var(--border)",
                display: "block",
              }}
            />
          </motion.div>

        </motion.div>

        {/* Tech Stack */}

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            marginTop: "90px",
          }}
        >
          <h2
            style={{
              marginBottom: "25px",
            }}
          >
            Technology Stack
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            {project.tech.map((item) => (
              <span
                key={item}
                style={{
                  padding: "10px 18px",
                  borderRadius: "999px",
                  border: "1px solid var(--border)",
                  background: "var(--bg-secondary)",
                }}
              >
                {item}
              </span>
            ))}
          </div>

        </motion.section>
        {/* Problem & Solution */}

<motion.section
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: .6 }}
  style={{
    marginTop: "90px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
    gap: "24px",
  }}
>

  <div
    style={{
      background: "var(--bg-secondary)",
      border: "1px solid var(--border)",
      borderRadius: "18px",
      padding: "30px",
    }}
  >
    <h2
      style={{
        marginBottom: "18px",
        color: "var(--accent-text)",
      }}
    >
      The Problem
    </h2>

    <p
      style={{
        color: "var(--text-secondary)",
        lineHeight: 1.8,
      }}
    >
      {project.problem || "No problem description yet."}
    </p>
  </div>

  <div
    style={{
      background: "var(--bg-secondary)",
      border: "1px solid var(--border)",
      borderRadius: "18px",
      padding: "30px",
    }}
  >
    <h2
      style={{
        marginBottom: "18px",
        color: "var(--accent-text)",
      }}
    >
      The Solution
    </h2>

    <p
      style={{
        color: "var(--text-secondary)",
        lineHeight: 1.8,
      }}
    >
      {project.solution || "No solution description yet."}
    </p>
  </div>

</motion.section>

{/* Metrics */}

{project.metrics && (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    style={{
      marginTop: "90px",
    }}
  >

    <h2 style={{ marginBottom: "30px" }}>
      Project Highlights
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: "18px",
      }}
    >

      {project.metrics.map((metric) => (

        <div
          key={metric.label}
          style={{
            background: "var(--bg-secondary)",
            border: "1px solid var(--border)",
            borderRadius: "18px",
            padding: "28px",
            textAlign: "center",
          }}
        >

          <div
            style={{
              fontSize: "36px",
              fontWeight: 700,
              marginBottom: "10px",
            }}
          >
            {metric.value}
          </div>

          <div
            style={{
              color: "var(--text-secondary)",
            }}
          >
            {metric.label}
          </div>

        </div>

      ))}

    </div>

  </motion.section>
)}

{/* Features */}

{/* Project Links */}

<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  style={{
    marginTop: "90px",
  }}
>

  <div
    style={{
      background: "var(--bg-secondary)",
      border: "1px solid var(--border)",
      borderRadius: "20px",
      padding: "40px",
      textAlign: "center",
    }}
  >

    <h2
      style={{
        marginBottom: "16px",
      }}
    >
      Explore the Project
    </h2>

    <p
      style={{
        color: "var(--text-secondary)",
        maxWidth: "620px",
        margin: "0 auto 30px",
        lineHeight: 1.8,
      }}
    >
      Explore the live application and review the codebase to see
      how the solution was built.
    </p>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "16px",
        flexWrap: "wrap",
      }}
    >

      <a
        href={project.live}
        target="_blank"
        rel="noreferrer"
        className="btn btn-primary"
      >
        Live Demo
      </a>

      {project.github && (

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="btn btn-secondary"
        >
          View GitHub
        </a>

      )}

    </div>

  </div>

</motion.section>

{/* Related Projects */}

<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  style={{
    marginTop: "110px",
  }}
>

  <h2
    style={{
      marginBottom: "30px",
    }}
  >
    More Projects
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
      gap: "20px",
    }}
  >

    {projects
      .filter((p) => p.slug !== project.slug)
      .slice(0, 3)
      .map((item) => (

        <motion.div
          whileHover={{
            y: -6,
          }}
          key={item.id}
          style={{
            background: "var(--bg-secondary)",
            border: "1px solid var(--border)",
            borderRadius: "18px",
            overflow: "hidden",
          }}
        >

          <img
            src={item.image}
            alt={item.title}
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
            }}
          />

          <div
            style={{
              padding: "22px",
            }}
          >

            <h3
              style={{
                marginBottom: "10px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "14px",
                lineHeight: 1.7,
                marginBottom: "20px",
              }}
            >
              {item.desc.substring(0, 90)}...
            </p>

            <Link
              to={`/projects/${item.slug}`}
              className="btn btn-secondary"
            >
              View Project →
            </Link>

          </div>

        </motion.div>

      ))}

  </div>

</motion.section>
<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  style={{
    marginTop: "90px",
  }}
>

  <h2
    style={{
      marginBottom: "30px",
    }}
  >
    Key Features
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
      gap: "20px",
    }}
  >

    {project.tech.map((tech) => (

      <div
        key={tech}
        style={{
          background: "var(--bg-secondary)",
          border: "1px solid var(--border)",
          borderRadius: "16px",
          padding: "22px",
        }}
      >

        <h3
          style={{
            marginBottom: "12px",
          }}
        >
          {tech}
        </h3>

        <p
          style={{
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            fontSize: "14px",
          }}
        >
          Used extensively throughout the application to
          deliver a scalable, maintainable and modern user
          experience.
        </p>

      </div>

    ))}

  </div>

</motion.section>
            </div>
    </main>
  );
}