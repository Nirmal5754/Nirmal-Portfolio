import { useState } from 'react'
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'

const blogs = [
  {
    date: 'July 2026',
    author: 'Nirmal Patil',
    title: 'My Journey to Becoming a Full-Stack Developer',
    excerpt:
      'Every developer starts somewhere. This is the story of my journey from writing my first lines of code to building web applications and continuously improving my skills.',
    sections: [
      {
        heading: 'My Journey to Becoming a Full-Stack Developer',
        body: [
          "Every developer starts somewhere. This is the story of my journey from writing my first lines of code to building web applications and continuously improving my skills.",
          "I do not consider myself an expert yet. Instead, I see myself as someone who enjoys learning, solving problems, and building projects that help me grow as a software developer.",
        ],
      },
      {
        heading: 'Why I Chose Software Development',
        body: [
          'Technology has always fascinated me because it allows ideas to become real products. A simple idea can turn into a website or application that people use every day.',
          "That possibility inspired me to begin learning programming. Like many beginners, I started with the basics. Over time, I discovered that programming is not just about writing code - it is about understanding problems and designing practical solutions.",
        ],
      },
      {
        heading: "Skills I've Learned So Far",
        body: [
          'Frontend: HTML5, CSS3, JavaScript (ES6+), React, and Tailwind CSS.',
          'Building user interfaces taught me how important responsive design, clean layouts, and user experience are.',
          'Backend: Java, JDBC, Servlets, and JSP.',
          'These technologies helped me understand authentication, CRUD operations, server-side programming, and how complete applications work.',
          'Database: MySQL.',
          'Designing tables, writing SQL queries, and connecting databases with applications has been an important part of my learning.',
        ],
      },
      {
        heading: 'Tools I Use',
        body: [
          'My regular development workflow includes VS Code, Eclipse IDE, Git, GitHub, Vercel, and npm.',
          'These tools have helped me build, manage, and deploy projects more efficiently.',
        ],
      },
      {
        heading: 'Projects That Helped Me Learn',
        body: [
          'The best way I have learned programming is by building projects.',
          'Some of the projects I have worked on include a portfolio website using React, a Java Servlet CRUD application, and database-driven web applications using MySQL.',
          'Every project introduced new challenges and taught me something different.',
        ],
      },
      {
        heading: 'Challenges Along the Way',
        body: [
          'Learning programming has not always been easy.',
          'I have encountered deployment errors, routing problems, database connection issues, Git merge conflicts, JavaScript bugs, and configuration mistakes.',
          'Instead of seeing these as failures, I started viewing them as opportunities to understand how software actually works.',
          'Debugging has become one of the most valuable skills I have developed.',
        ],
      },
      {
        heading: "What I'm Learning Next",
        body: [
          'Software development evolves constantly, and so does my learning roadmap.',
          'Some technologies I plan to explore include TypeScript, Next.js, authentication systems, MongoDB, Docker, cloud deployment, and system design.',
          'I am excited to continue building projects that challenge me and expand my understanding.',
        ],
      },
      {
        heading: 'My Goal',
        body: [
          'My goal is not simply to learn frameworks.',
          'I want to become a developer who can design, build, and deploy complete applications that solve real-world problems.',
          'Every project, bug, and new concept brings me one step closer.',
        ],
      },
      {
        heading: 'Final Thoughts',
        body: [
          'This portfolio represents my progress - not perfection.',
          'As I continue learning, I will keep updating my projects and sharing what I discover through these blog posts.',
          'Thank you for following my journey.',
        ],
      },
    ],
  },
  {
    date: 'July 2026',
    author: 'Nirmal Patil',
    title: 'Common Mistakes I Faced While Learning React',
    excerpt:
      'When I started learning React, I discovered that components, routing, state, deployment, and debugging were where most of the real learning happened.',
    sections: [
      {
        heading: 'Common Mistakes I Faced While Learning React',
        body: [
          'When I started learning React, I expected writing components to be the difficult part.',
          'Instead, I discovered that understanding the overall workflow - components, routing, state, deployment, and debugging - was where most of the learning happened.',
          'These are some of the mistakes I encountered and the lessons I learned from them.',
        ],
      },
      {
        heading: '1. Thinking Everything Belongs in One Component',
        body: [
          'Initially, I placed too much code inside a single component.',
          'This quickly made the code difficult to read and maintain.',
          'I learned to divide the UI into reusable components, making the project cleaner and easier to scale.',
        ],
      },
      {
        heading: '2. Ignoring Folder Structure',
        body: [
          'My first projects had files scattered everywhere. As the application grew, finding files became frustrating.',
          'Now I organize projects using folders such as components, pages, assets, data, hooks, and utils.',
          'A good folder structure saves time as projects become larger.',
        ],
      },
      {
        heading: '3. React Router Confusion',
        body: [
          'I initially struggled with navigation between pages.',
          'I learned how React Router works and why client-side routing is different from traditional multi-page websites.',
          'Understanding routes made my applications feel much more professional.',
        ],
      },
      {
        heading: '4. Tailwind CSS Configuration Issues',
        body: [
          'One of my biggest frustrations was getting Tailwind CSS to work correctly.',
          'Sometimes classes would not apply because of incorrect configuration or file paths.',
          'Instead of giving up, I learned how the build process works and how configuration files affect styling.',
        ],
      },
      {
        heading: '5. Deployment Errors',
        body: [
          'Deploying my first React application was not as simple as clicking a button.',
          'I encountered build errors, configuration issues, and Git-related mistakes.',
          'After learning the deployment workflow using GitHub and Vercel, I realized deployment is an essential skill - not just an optional step.',
        ],
      },
      {
        heading: '6. Underestimating Git',
        body: [
          'At first, Git seemed complicated.',
          'Now I understand how important version control is.',
          'Being able to track changes, undo mistakes, and deploy directly from GitHub has become part of my daily workflow.',
        ],
      },
      {
        heading: '7. Reading Error Messages Carefully',
        body: [
          'One lesson changed how I approach debugging.',
          'Instead of searching randomly on the internet, I began reading error messages carefully.',
          'Often, the solution was already written in the console.',
          'Learning to interpret errors has saved me countless hours.',
        ],
      },
      {
        heading: '8. Progress Is More Important Than Perfection',
        body: [
          'I used to compare my projects with experienced developers.',
          'Eventually, I realized every developer starts as a beginner.',
          'The important thing is to keep building, keep learning, and improve with every project.',
        ],
      },
      {
        heading: 'What React Has Taught Me',
        body: [
          'React has taught me much more than just JavaScript.',
          'It has taught me how to organize projects, think in reusable components, debug effectively, use Git professionally, deploy applications, and keep improving through practice.',
        ],
      },
    ],
  },
]

function BlogCard({ date, author, title, excerpt, sections }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
      <div className="text-xs text-white/45">{date} | {author}</div>
      <h3 className="mt-3 text-lg sm:text-xl font-bold text-white leading-snug">{title}</h3>
      <p className="mt-3 text-sm text-white/55 leading-6">{excerpt}</p>

      {isExpanded ? (
        <div className="mt-5 space-y-5 text-sm text-white/60 leading-6">
          {sections.map((section) => (
            <section key={section.heading}>
              <h4 className="text-sm font-bold text-white/85">{section.heading}</h4>
              <div className="mt-2 space-y-2">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setIsExpanded((value) => !value)}
        className="mt-5 text-sm text-emerald-400/80 hover:text-emerald-300"
      >
        {isExpanded ? 'Show Less' : 'Read More ->'}
      </button>
    </article>
  )
}

export default function BlogsPage() {
  return (
    <div className="bg-black min-h-screen">
      <main className="px-6 sm:px-10 md:px-20 lg:px-40">
        <Navbar />

        <section className="pt-8 pb-14 font-mono">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
            Blogs<span className="text-emerald-400">.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm sm:text-base text-white/55">
            My thoughts on software development, learning, and building better projects.
          </p>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {blogs.map((blog) => (
              <BlogCard key={blog.title} {...blog} />
            ))}
          </div>

          <p className="mt-20 text-center text-white/25 text-xs sm:text-sm">More articles coming soon!</p>
        </section>

        <Footer />
      </main>
    </div>
  )
}
