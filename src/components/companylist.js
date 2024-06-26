import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import {FaInfoCircle,FaTrash, FaPlusSquare, FaPencilAlt} from 'react-icons/fa'
import Prevbutton from './prevbutton';
import styles from './companyliststyle.module.css'

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/companies/').then((companies)=>{
        setCompanies(companies.data)
        console.log(companies.data)
    }).catch( err => console.log(err))
  },[])
  return(
  <>
    <Prevbutton className = 'prevbutton'/>
    <Link to='/create'>
        <FaPlusSquare className={styles.additem}/> 
    </Link>
    <h1 className={styles.header}>Company List</h1>
    <table style={{'width':'100%'}} className={styles.table}>
      <thead className={styles.styling} >
        <tr >
          <th className={styles.tableheader}>Id</th>
          <th className={styles.tableheader}>organization</th>
          <th className={styles.tableheader}>domainurl</th>
          <th className={styles.tableheader}>email</th>
          <th className={styles.tableheader}>phone</th>
          <th className={styles.tableheader}>operations</th>
        </tr>
      </thead>
      <tbody  className={styles.tablebody} >
        {
          companies.map((company,index) =>{
            return <tr >
              <td className={styles.tablecontent}>{index+1}</td>
              <td className={styles.tablecontent}>{company.organization}</td>
              <td className={styles.tablecontent}>{company.domainurl}</td>
              <td className={styles.tablecontent}>{company.email}</td>
              <td className={styles.tablecontent}>{company.phone}</td>
              <td>
                <div className={styles.icons}>
                  <Link to = {`/info/${company._id}`}>
                    <FaInfoCircle className={styles.info}/>
                  </Link>

                  <Link to = {`/edit/${company._id}`}>
                    <FaPencilAlt className={styles.edit}/>
                  </Link>

                  <Link to = {`/delete/${company._id}`}>
                    <FaTrash className={styles.delete}/>
                  </Link>
                  
                </div>
           
                </td>
            </tr>
          })
        }
      </tbody>
    </table>
  </>
  )
};

export default CompanyList;