import MainSidebar from '@/components/MainSidebar/MainSidebar'
import MainTable from '@/components/MainTable/MainTable'
import Searchbar from '@/components/Searchbar/Searchbar'
import Title from '@/components/Title/title'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export interface PatientData {
  name: string
  patientid: string
  date: string
  time?: string
  doctor: string
  room: string
  team: string
  primary_diagnosis: string
}

const Patients = (): JSX.Element => {
  const router = useRouter();

  const [patientData, setPatientData] = useState<Array<PatientData>>([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/patientapi')
      .then((res) => res.json())
      .then((data) => {
        setPatientData(data)
      })
  }, []);

  const columns = [
    //blank reserved for patient image
    ' ',
    'Name',
    'Patient ID',
    'Date',
    'Time',
    'Doctor',
    'Room',
    'Team',
    'Primary Diagnosis',
  ]

  return (
    <>
      <MainSidebar />
      <div className="MainScreen">
        <Searchbar />
        <Title title={'Patients'} />
        <MainTable columns={columns} tableData={patientData} />
      </div>
    </>
  )
}

export default Patients
