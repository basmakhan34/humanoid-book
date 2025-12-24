import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>

        <p className="hero__subtitle">
          {siteConfig.tagline || "A Complete Guide to Humanoid Robotics"}
        </p>

        <div className={styles.buttons}>
          {/* 📖 Start Reading Button */}
          <Link
            className="button button--secondary button--lg"
            to="/humanoid/introduction"
          >
            Start Reading 📖
          </Link>

          {/* 🤖 Chatbot Button */}
          <Link
            className="button button--secondary button--lg"
            to="http://localhost:8501"
            style={{ marginLeft: "12px" }}
          >
            AI Chatbot 🤖
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A complete humanoid robotics book with AI chatbot support">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
