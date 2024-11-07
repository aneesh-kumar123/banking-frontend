import React from 'react'
import Table from '../sharedComponents/Table'
import { getAllusers } from '../service/user'

const HomePage = () => {
  return (
    <div>
        <Table user = {getAllusers}></Table>
    </div>
  )
}

export default HomePage