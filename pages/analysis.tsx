import { useEffect, useState } from 'react'
import { withRouter } from 'next/router'
import MainSidebar from '@/components/MainSidebar/MainSidebar'
import { PatientData } from '@/pages/patients'
import { Table } from 'flowbite-react'
import Title from '@/components/Title/title'
import Chart from '@/components/Chart/Chart'
import Zander from '../../assets/testImages/zanderUpdated.jpeg'

interface AnalysisProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  router: any
}

const Analysis: React.FC<AnalysisProps> = (props: AnalysisProps) => {
  const [data, setData] = useState<PatientData | null>()

  useEffect(() => {
    if (!(props.router.query.data == null)) {
      setData(JSON.parse(props.router.query.data))
    }
  }, [props.router.query])

  useEffect(() => {
    const localData = window.localStorage.getItem('data')
    // catches null and undefined
    if (!(localData == null) && localData != 'undefined') {
      setData(JSON.parse(localData))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('data', JSON.stringify(data))
  }, [data])

  return (
    <>
      <MainSidebar />
      {/* <div className="p-4 sm:ml-64 bg-slate-200 h-screen"> */}
      <div className="MainScreen">
        <Title title={'EKG Analysis'} />
        {data && (
          <Table striped={true}>
            <Table.Row
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
              key={data.date + data.patientid}
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {data.name}
              </Table.Cell>
              <Table.Cell>{data.patientid}</Table.Cell>
              <Table.Cell>{data.date}</Table.Cell>
              <Table.Cell>{data.time}</Table.Cell>
              <Table.Cell>{data.doctor}</Table.Cell>
              <Table.Cell>{data.room}</Table.Cell>
              <Table.Cell>{data.team}</Table.Cell>
              <Table.Cell>{data.primary_diagnosis}</Table.Cell>
            </Table.Row>
          </Table>
        )}
        <Chart />
      </div>
    </>
  )
}

export default withRouter(Analysis)
