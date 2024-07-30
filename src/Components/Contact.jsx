import React from 'react'
const Contact = () => {
  return (
    <section id='contact' className="bg-secondary py-10 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-text font-bold text-center">Contact</h2>
        <a
            href="mailto:kahmeng.lee12@gmail.com"
            className=" bg-white font-text text-customPurple border border-customPurple px-6 py-2 text-xl font-bold hover:bg-customPurple hover:text-white transition duration-300 
                         my-11"
        >
            Email
        </a>
    </section>
  )
}

export default Contact