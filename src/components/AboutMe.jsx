import { useState, useTransition } from 'react'
import { FaCss3Alt, FaDatabase, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import TabButton from './TabButton.jsx'

const TAB_DATA = [
  {
    title: 'Frontend',
    id: 'Frontend',
    content: (
      <ul className="text-gray-400 py-5 text-2xl">
        <li className="mb-4 flex items-center">
          <FaHtml5 className="mr-2" /> HTML
        </li>
        <li className="mb-4 flex items-center">
          <FaCss3Alt className="mr-2" /> CSS
        </li>
        <li className="mb-4 flex items-center">
          <FaJs className="mr-2" /> JavaScript
        </li>
        <li className="mb-4 flex items-center">
          <FaReact className="mr-2" /> React.js
        </li>
      </ul>
    ),
  },
  {
    title: 'Backend',
    id: 'Backend',
    content: (
      <ul className="text-gray-400 py-5 text-2xl">
        <li className="mb-4">• RESTful APIs</li>
      </ul>
    ),
  },
  {
    title: 'Languages',
    id: 'Languages',
    content: (
      <ul className="text-gray-400 py-5 text-2xl">
        <li className="mb-4">• Java</li>
        <li className="mb-4">• JavaScript</li>
        <li className="mb-4">• C++</li>
      </ul>
    ),
  },
  {
    title: 'Database',
    id: 'Database',
    content: (
      <ul className="text-gray-400 py-5 text-2xl">
        <li className="mb-4 flex items-center">
          <FaDatabase className="mr-2" /> MySQL
        </li>
      </ul>
    ),
  },
  {
    title: 'Others',
    id: 'Others',
    content: (
      <ul className="text-gray-400 py-5 text-2xl">
        <li className="mb-4">• Git</li>
        <li className="mb-4">• GitHub</li>
      </ul>
    ),
  },
]

export default function AboutMe() {
  const [tab, setTab] = useState('Frontend')
  const [, startTransition] = useTransition()

  const handleTabChange = (id) => {
    startTransition(() => setTab(id))
  }

  const customFontStyle = { fontFamily: 'Britannic Bold' }

  return (
    <section className="text-white border-b border-teal-200 pb-40 pt-20">
      <div className="md:grid md:grid-cols-3 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16 rounded-xl border text-card-foreground shadow hover:scale-105 transition-transform duration-300">
        <div className="col-span-1 flex items-center">
          <img
            src="/photo.jpg"
            className="rounded-full px-5 py-5"
            alt="Arnav Panchal"
            width={500}
            height={500}
            loading="lazy"
          />
        </div>
        <div className="col-span-2" style={customFontStyle}>
          <h2 className="text-6xl py-5 font-bold text-teal-500 md-4">About me</h2>
          <p className="text-4xl py-2 text-yellow-200 lg:text-lg">
            Frontend Developer with strong foundations in C++ (DSA) and hands-on experience building scalable,
            responsive applications using React.js and Redux Toolkit. Skilled in MySQL, Firebase, and writing optimized,
            maintainable code with focus on performance and clean architecture.
          </p>

          <div className="flex flex-row mt-8 flex-wrap">
            <TabButton selectTab={() => handleTabChange('Frontend')} active={tab === 'Frontend'}>
              Frontend
            </TabButton>
            <TabButton selectTab={() => handleTabChange('Backend')} active={tab === 'Backend'}>
              Backend
            </TabButton>
            <TabButton selectTab={() => handleTabChange('Languages')} active={tab === 'Languages'}>
              Languages
            </TabButton>
            <TabButton selectTab={() => handleTabChange('Database')} active={tab === 'Database'}>
              Database
            </TabButton>
            <TabButton selectTab={() => handleTabChange('Others')} active={tab === 'Others'}>
              Others
            </TabButton>
          </div>

          <div className="mt-8">{TAB_DATA.find((item) => item.id === tab)?.content}</div>
        </div>
      </div>
    </section>
  )
}

