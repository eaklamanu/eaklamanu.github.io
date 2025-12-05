import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import Main from '../layouts/Main';

const About = () => {
  const [markdown, setMarkdown] = useState('');



  useEffect(() => {
    import('../data/about.md')
      .then((res) => {
        const url = res?.default;
        console.error('DEBUG: res', res);
        console.error('DEBUG: url', url);
        if (!url) throw new Error('Markdown URL not found');
        const fetchPromise = fetch(url);
        console.error('DEBUG: fetchPromise', fetchPromise);
        return fetchPromise;
      })
      .then((r) => r.text())
      .then(setMarkdown)
      .catch((err) => {
        setMarkdown('Failed to load markdown file.');
        console.error(err);
      });
  }, []);

  const count = markdown
    .split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  return (
    <Main title="About" description="Learn about Elorm">
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2>
              <Link to="/about">About Me</Link>
            </h2>
            <p>(in about {count} words)</p>
          </div>
        </header>
        <Markdown>{markdown}</Markdown>
      </article>
    </Main>
  );
};

export default About;
