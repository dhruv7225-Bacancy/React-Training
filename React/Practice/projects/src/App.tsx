import React, { useState } from 'react'
import { patients, visits } from './patients'
import type { Patient } from './types'

const App = () => {
  const [currPatient, setCurrPatient] = useState<Patient | null>(null)
  const [show, setShow] = useState<boolean>(false)


  return (
    <>
      <select name="" id="" defaultValue={"Select Patient"} value={currPatient?.id} onChange={(e) => {
        setCurrPatient(patients.find((patient) => patient.id === Number(e.target.value)) || null)
        setShow(false)
      }}>
        <option value="Select Patient" disabled selected>Select Patient</option>
        {
          patients.map((patient) => (<option value={patient.id} key={patient.id}>{patient.name}</option>))
        }
      </select>
      <button onClick={() => {
        if(!currPatient)alert("please select some patient")
          setShow(true)
      }}>show</button>

      {
        show && currPatient && <div>Patient History: {currPatient.name}</div>
      }

      <div>
        <table border={2}>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Weight</th>
            <th>Doctor</th>
          </tr>

          {
            show && currPatient && visits.filter((visit) => visit.patientId === currPatient.id).map((visit) => (
              <>
                <tr>
                  <td>{visit.id}</td>
                  <td>{visit.date}</td>
                  <td>{visit.weight}</td>
                  <td>{visit.doctor}</td>
                </tr>
              </>
            ))
          }

          {
            show &&
            currPatient &&
            (
              <button 
              
                onClick={() => {
                  const newPatient = patients.find(patient => {
                    if(currPatient.id===patients.length){
                      return patient.id===1
                    }
                    return patient.id === (currPatient.id + 1)
                  })
                  if(newPatient){
                    setCurrPatient(newPatient)
                  }
                  
                }

              }>next</button>
            )
          }
        </table>
      </div>
    </>
  )
}

export default App

