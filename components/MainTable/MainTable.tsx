import { PatientData } from '../../pages/patients'
import { Table } from 'flowbite-react'
import { useRouter } from 'next/router'
import { LayerType } from '../Chart/Chart'
import Zander from '../../assets/testImages/zanderUpdated.jpeg'
import JSXStyle from 'styled-jsx/style'

interface TableProps {
  columns: string[]
  tableData: PatientData[]
}

const MainTable: React.FC<TableProps> = (props) => {
  const router = useRouter()
  const navButtonStyle =
    'px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'

  const onPatientClick = (data: PatientData) => {
    console.log(data)
    console.log('Patient Click: ' + data.name)
    router.push(
      { pathname: '/analysis', query: { data: JSON.stringify(data) } },
      '/analysis'
    )
  }

  return (
    <>
      <Table striped={true}>
        <Table.Head>
          {props.columns.map((column) => {
            return <Table.HeadCell key={column}>{column}</Table.HeadCell>
          })}
        </Table.Head>
        <Table.Body className="divide-y">
          {props.tableData.map((data) => {
            return (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={data.date + data.patientid}
              >
                <Table.Cell>
                  <img 
                    src={require('../../assets/testImages/zanderUpdated.jpeg') }
                  />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <a href={'#'} onClick={() => onPatientClick(data)}>
                    {data.name}
                  </a>
                </Table.Cell>
                <Table.Cell>{data.patientid}</Table.Cell>
                <Table.Cell>{data.date}</Table.Cell>
                <Table.Cell>{data.time}</Table.Cell>
                <Table.Cell>{data.doctor}</Table.Cell>
                <Table.Cell>{data.room}</Table.Cell>
                <Table.Cell>{data.team}</Table.Cell>
                <Table.Cell>{data.primary_diagnosis}</Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
      <nav
        className="flex items-center justify-between pt-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing{' '}
          <span className="font-semibold text-gray-900 dark:text-white">
            1-10
          </span>{' '}
          of{' '}
          <span className="font-semibold text-gray-900 dark:text-white">
            1000
          </span>
        </span>
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <a
              href="#"
              className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a href="#" className={navButtonStyle}>
              2
            </a>
          </li>
          <li>
            <a href="#" aria-current="page" className={navButtonStyle}>
              3
            </a>
          </li>
          <li>
            <a href="#" className={navButtonStyle}>
              ...
            </a>
          </li>
          <li>
            <a href="#" className={navButtonStyle}>
              100
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default MainTable
