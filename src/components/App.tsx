export const App = () => (
  <div className='app'>
    <div className='app-corner-triangle'></div>
    <div className='app-landing-content'>
      <div className='app-large-heading-text'>Hey,</div>
      <div className='app-large-heading-text'>I'm Michael,</div>
      <div className='app-large-heading-text'>software engineer</div>
      <div className='app-heading-sub-text'>React / TypeScript / GraphQL</div>
      <div className='app-bio-container'>
        <p>
          I'm a software engineer with experience in software development using
          both monolithic and microservice architecture. I enjoy learning about
          new technologies to further develop my skillset and to embrace the
          change in the ever-expanding web ecosystem.
        </p>
      </div>
      <div className='app-connect-text-container'>
        <p>
          Want to connect? Feel free to reach out on{' '}
          <a
            className='linkedin-link-text'
            href='https://www.linkedin.com/in/michael-nos/'
            target='_blank'
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </div>
  </div>
);
