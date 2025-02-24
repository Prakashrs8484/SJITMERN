import React from 'react'
import Exam from './Exam'

const CoE = (res) => {
  return (
    <div>
        <h1>Result Published</h1>
        <h1>Result :</h1>
        <h2>SGPA: {res.sgpa}</h2>
        <h2>CGPA: {res.cgpa}</h2>
    </div>
  )
}

export default CoE