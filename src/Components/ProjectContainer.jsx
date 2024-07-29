import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const ProjectContainer = ({project}) => {
  return (
    <div className="min-w-[20rem] max-w-[20rem] text-center drop-shadow-xl border p-4 px-4 m-12 mb-20 bg-white rounded-3xl
                    transition-transform transform hover:scale-105 hover:shadow-l" 
                    style={{background:"#EBEBF4"}}>
        {/*Continue from here */}
        <h3 className='text-3xl font-bold font-text pt-3'>{project.name}</h3>
        <p className='text-gray-700 mb-4 max-w-sm font-text text-xl p-4'>{project.description}</p>
        {project.stack && (
        <ul className='flex justify-center space-x-4 pb-5'>
            {project.stack.map((item) => (
              <li key={project.name} className='font-bold font-text'>
                {item}
              </li>
            ))}
          </ul>
        )}
        <div className='pb-3 space-x-2'>
          {project.sourceCode && (
            <a
              href={project.sourceCode}
              aria-label='source code'
              
            >
              <GitHubIcon className=' hover:text-purple-500 transition duration-1000' fontSize='large'/>
            </a>
          )}

          {project.livePreview && (
            <a
              href={project.livePreview}
              aria-label='live preview'
            >
              <LaunchIcon className=' hover:text-purple-500 transition duration-1000' fontSize='large'/>
            </a>
          )}
        </div>
    </div>
  
  )
}

export default ProjectContainer