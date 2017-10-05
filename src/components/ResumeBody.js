import React from 'react';

const ResumeBody = props => {
  return (
    <div className="about-us-body-container">
      <div className="about-us-content-container">
        <h1 id="andrea-takamiya">Andrea Takamiya</h1>
        <p>Honolulu, HI 96816 | (808) 295-4260<a href="mailto:takamiya.andrea@gmail.com">Email: takamiya.andrea@gmail.com</a><a href="https://github.com/andimiya">Github: andimiya</a><br /><a href="https://www.linkedin.com/in/andreatakamiya">LinkedIn: andreatakamiya</a></p>
        <h2 id="development-experience">Development Experience</h2>
        <h3 id="devleague">DevLeague</h3>
        <p>Full Stack Developer Bootcamp</p><p>Nov 2016 - May 2017  </p>
        <ul>
        <li>Immersed myself in learning how to build full-stack applications in Javascript for 20-30 hours per week, while keeping up with my full-time day job as a Project Manager.</li>
        <li>Ventured beyond the typical bootcamp curriculum by learning Shell scripting to automate the collection and cleaning of data and insertion into databases, and DevOps tasks such as setting servers and databases for production.</li>
        <li>Created life-long friendships and learned the importance of working as a team through group projects and pair-programming.</li>
        </ul>
        <h3 id="buoy-call-web-application">Buoy Call Web Application</h3>
        <p><a href="https://github.com/andimiya/buoy-call">Github</a> | <a href="https://buoycall.org">BuoyCall.org</a><br />April 2017<br />Collaborated with 3 other students to create an application which found and displayed historical buoy data as well plotted both buoys and sharks on a map. Users were able to interact with the application by clicking on any buoy to view graphed data, and could also select a shark on the map and name it by making a five dollar donation.</p>
        <h4 id="contributions-to-this-project-include-">Contributions to this project include:</h4>
        <ul>
        <li>Creating the database schemas for our buoy data and buoy coordinates data.</li>
        <li>Writing of bash scripts to collect data from various webpages, create csv files, adjust headers and file contents to be importable into our database, then import the data into PostgreSQL.</li>
        <li>Stripe implementation on both the server-side and client-side so our application could receive real credit card donations.</li>
        <li>Deployment of the application which involved nginx, pm2, the configuration and setup of two Digital Ocean droplets (one for our database and one for our application), and  implementation of LetsEncrypt.</li>
        </ul>
        <h2 id="professional-experience">Professional Experience</h2>
        <h3 id="project-manager">Project Manager</h3>
        <p>Sudokrew Solutions<br />Honolulu, HI<br />2016 - Present  </p>
        <ul>
        <li>Improved workflows internally for Sudokrew developers as well as externally for Sudokrew clients by applying agile methodology techniques to allow developers to stay focused and increase productivity.</li>
        <li>Ensured that project requirements and deliverables were clearly communicated between clients and the Sudokrew team.</li>
        <li>Improved client relationships by facilitating frequent discussions around prioritization and budgeting to ensure that client expectations were clearly communicated.</li>
        </ul>
        <h3 id="online-experience-manager">Online Experience Manager</h3>
        <p>Hawaiian Airlines<br />Honolulu, HI<br />2014 – 2016  </p>
        <ul>
        <li>Received a quick promotion from Web Producer to Online Experience Manager and engaged with a team of over two hundred to successfully decommission the old HawaiianAirlines.com websites and launch seven multi-currency, multi-lingual websites for the airline.</li>
        <li>Worked through many risks and challenges that arose during the span of the project such as the movement from waterfall to agile methodologies, adoption of new systems and platforms, defining roles and responsibilities across the project, and working with many offshore team members.</li>
        <li>Managed the needs of the airline and its many stakeholders against the priorities of IT, government regulations and project timelines to ensure everyone was working towards a clear vision, hitting milestones set by the business, and accomplishing the goals of the project.</li>
        </ul>
        <h3 id="web-producer">Web Producer</h3>
        <p>Hawaiian Airlines<br />Honolulu, HI<br />2013 - 2014  </p>
        <ul>
        <li>Took on the role of Web Producer for the <a href="https://www.hawaiianairlines.com">HawaiianAirlines.com</a> re-platforming project as a step up from my previous Advertising Coordinator position. Gathered requirements, defined work flows, and worked with IT to ensure effective solutions.</li>
        <li>Quickly adopted new systems such as our Farelogix pricing and inventory management system and Sitecore content management system to ensure business-side expertise of those new tools.</li>
        <li>Communicated project status and timelines to multiple business units across the organization to ensure that business vision and expectations were in alignment across the program.</li>
        </ul>
        <h3 id="advertising-coordinator">Advertising Coordinator</h3>
        <p>Hawaiian Airlines<br />Honolulu, HI<br />2012 - 2013  </p>
        <ul>
        <li>Managed digital advertising for the airline, including Display Advertising, Paid Search, Travel Search and Affiliate Marketing. Met very aggressive return on investment metrics and improved the Affiliate Marketing program to 250% revenue increases year over year.</li>
        <li>Led teams across the globe to launch digital marketing efforts internationally for Australia, New Zealand, Korea, Japan and Taiwan. This included search engine marketing in foreign languages, country-specific creative, analytics across multiple platforms, multi-lingual teams and coordination across GSA, PR, marketing agencies and Hawaiian Airlines.</li>
        <li>Managed SEO strategies and operations including contracting of an SEO vendor, site strategy, implementation, and measuring effectiveness of the optimization</li>
        </ul>
        <h3 id="online-marketing-administrator">Online Marketing Administrator</h3>
        <p>Outrigger Hotels and Resorts<br />Honolulu, HI<br />2010 - 2012  </p>
        <ul>
        <li>Heavily involved in the Outrigger website redesign process which included development of new site architecture, writing detailed business use cases, researching design and layout options, using various developer tools for QA, troubleshooting, developing content, optimizing for SEO as the CMS was in development.</li>
        <li>Worked closely between developers and Outrigger stakeholders to understand and communicate business use cases between both parties. This included prioritization of issues/bug fixes by weighing level of developer effort versus business need and communicating to all parties any limitations and timelines.</li>
        <li>Utilized Omniture analytics software for general marketing analytics and decision-making when testing creative concepts. Worked with Omniture analytics back-end architecture, naming conventions, SAINT classifications and page code during the redesign to ensure accurate tagging and no data loss.</li>
        </ul>
        <h2 id="education">Education</h2>
        <h3 id="full-stack-javascript-developer">Full Stack Javascript Developer</h3>
        <p><a href="http://www.devleague.com">DevLeague</a><br />Honolulu, Hawaii<br />Nov 2016 - May 2017  </p>
        <h3 id="bachelor-of-arts-in-business-administration">Bachelor of Arts in Business Administration</h3>
        <p>Concentration in Marketing and International Business<br />University of Oregon, 2005 – 2007<br />University of Hawaii at Manoa , 2008 – 2009  </p>
        <h2 id="technical-skills">Technical Skills</h2>
        <h3 id="languages">Languages</h3>
        <p>JavaScript, HTML5, CSS, SQL</p>
        <h3 id="frontend-proficiencies">Frontend Proficiencies</h3>
        <p>HTML5, CSS3, SASS, Javascript, ES6, React, Redux</p>
        <h3 id="server-side-proficiencies">Server-Side Proficiencies</h3>
        <p>NodeJS, Express, Sequelize</p>
        <h3 id="database-proficiencies">Database Proficiencies</h3>
        <p>PostgreSQL</p>
        <h3 id="web-skills">Web Skills</h3>
        <ul>
        <li>Responsive/Mobile First Web Development</li>
        <li>Relational - and Non-Relational Database Modeling</li>
        <li>RESTful API Development</li>
        <li>API Integration</li>
        <li>Shell Scripting</li>
        </ul>
        <h3 id="other-skills-and-certifications">Other Skills and Certifications</h3>
        <ul>
        <li>Sitecore CMS ( Sitecore Certified)</li>
        <li>Sitecore OMS (Sitecore Certified)</li>
        <li>Sitecore DMS (Sitecore Certified)</li>
        <li>Adobe Sitecatalyst (Omniture)</li>
        <li>Adobe Test &amp; Target</li>
        <li>Farelogix Merchandising System </li>
        <li>Microsoft Sharepoint CMS</li>
        <li>Web layouts and wire-framing</li>
        <li>Adobe Photoshop CS6</li>
        <li>Adobe Illustrator CS6</li>
        <li>Google AdWords</li>
        </ul>
      </div>
    </div>
  );
};

export default ResumeBody;
