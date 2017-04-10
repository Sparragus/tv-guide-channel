import React from 'react'

import './ProgramList.css'

function ProgramList ({ programs = [] }) {
  return (
    <ul className='ProgramList unstyled'>
      {
        programs.map((program, index) => (
          <li className='ProgramList-item' key={index}>
            <Program {...program} />
          </li>
        ))
      }
    </ul>
  )
}

function Program ({ name, url }) {
  return (
    <div className='Program'>
      <a href={url}>{name}</a>
    </div>
  )
}

export default ProgramList
