import React, { useEffect } from 'react'
import ListEntry from './ListEntry'
import { List, ListSubheader } from '@mui/material'

export default function ApplicantList({ changeStatus, settings, data, unreadList }) {

  const readHeader = <ListSubheader sx={{ backgroundColor: "#E5E7EB" }}>Review previously screened applicants:</ListSubheader>;
  const unreadHeader = <ListSubheader sx={{ backgroundColor: "#E5E7EB" }}>Applicants that need to be screened:</ListSubheader>;

  return (
    <div className='border flex items-center align-middle bg-gray-200'>
      <List className='w-full' subheader={unreadList ? unreadHeader : readHeader} >
        {
          data
            .map(applicant =>
              <ListEntry unreadList={unreadList} changeStatus={changeStatus} applicantData={applicant} settings={settings} />
            )
        }
      </List>
    </div >
  )
}
