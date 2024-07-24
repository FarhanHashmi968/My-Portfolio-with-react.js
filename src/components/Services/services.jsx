import './services.css'

const Services = () => {
  return (
    <div className='servicesBox' id='services'>
      <div className='head'>
        <h1>My Services</h1>
      </div>
      <div className='skillsContainer'>
        <div className='skillbox'>
          <h3>01</h3>
          <h2>Web design</h2>
          <p>
            Creating the structure and style of web pages using modern HTML5 and
            CSS3. Adding interactivity and dynamic content to websites. Ensuring
            websites are fully functional and visually appealing on all devices,
            from desktops to mobile phones.
          </p>
        </div>
        <div className='skillbox'>
          <h3>02</h3>
          <h2>Single Page Application</h2>
          <p>
            Building dynamic and efficient SPAs using frameworks like React.
            State Management: Managing application state with tools like Redux
          </p>
        </div>
        <div className='skillbox'>
          <h3>03</h3>
          <h2>SEO Best Practices</h2>
          <p>
            On-Page SEO: Implementing best practices for HTML structure, meta
            tags, and content to improve search engine rankings. Performance
            Optimization: Enhancing website speed and performance, which are
            critical factors for SEO.
          </p>
        </div>
        <div className='skillbox'>
          <h3>04</h3>
          <h2>Custom Web Applications</h2>
          <p>
            E-commerce Solutions: Developing front-end interfaces for online
            stores, including shopping carts, product listings, and payment
            gateways. Interactive Dashboards: Creating data-driven dashboards
            with real-time updates and visualizations.
          </p>
        </div>
        <div className='skillbox'>
          <h3>05</h3>
          <h2>Performance Optimization</h2>
          <p>
            Minification and Compression: Reducing the size of HTML, CSS, and
            JavaScript files to improve load times. Code Splitting: Dividing
            code into smaller chunks to improve loading performance and user
            experience.
          </p>
        </div>
        <div className='skillbox'>
          <h3>06</h3>
          <h2>Consultation and Strategy</h2>
          <p>
            Technical Consultation: Providing expert advice on front-end
            technologies, frameworks, and best practices. Project Planning:
            Assisting in the planning and scoping of web development projects to
            ensure successful outcomes.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Services
