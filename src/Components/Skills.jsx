
const skillList = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Redux',
    'SASS',
    'Material UI',
    'Git',
    'CI/CD',
    'Jest',
    'Enzyme',
  ]

const Skills = () => {
  return (
    <section id="skills" className="pt-36 bg-secondary">
        <h2 className="text-4xl font-bold font-text text-center">Skills</h2>
        <ul className="flex flex-wrap m-auto max-w-lg justify-center py-10">
            {skillList.map((skill) => (
            <li key={skill} className='p-4 m-2 border font-text border-gray-200 shadow-lg rounded transition-transform
                                        transform hover:scale-105  hover:-translate-y-2 duration-200 
                                        text-xl  select-none cursor-default'>
                {skill}
            </li>
            ))}
        </ul>              
     </section>
  )
}

export default Skills