import React, { useState, useEffect } from 'react';
import BackButton from './backbutton';
import Spinner from './spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './editstyle.module.css'

const Edit = () => {
    const [organization, setOrganization] = useState('');
    const [domainurl, setDomainurl] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    //const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5000/companies/${id}`)
    .then((response) => {
        setOrganization(response.data.organization);
        setDomainurl(response.data.domainurl)
        setEmail(response.data.email)
        setPhone(response.data.phone)

        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please Chack console');
        console.log(error);
      });
  }, [])
  
  const handleEdit = () => {
    const data = {
        organization,
        domainurl,
        email,
        phone
    };
    setLoading(true);
    axios
      .patch(`http://localhost:5000/companies/${id}`, data)
      .then(() => {
        setLoading(false);
        alert('Data Edited Successfully')
        //enqueueSnackbar('Book Edited successfully', { variant: 'success' });
        navigate('/companylist');
      })
      .catch((error) => {
        setLoading(false);
         alert(`${error}`);
        //enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className={styles.header}>Edit Book</h1>
      {loading ? <Spinner /> : ''}
      <div className={styles.details}>
        <div className={styles.col}>
          <label className={styles.label}>Organization</label>
          <input
            type='text'
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            className={styles.data}
          />
        </div>
        <div className={styles.col}>
          <label className={styles.label}>Domainurl</label>
          <input
            type='text'
            value={domainurl}
            onChange={(e) => setDomainurl(e.target.value)}
            className={styles.data}
          />
        </div>
        <div className={styles.col}>
          <label className={styles.label}>Email</label>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.data}
          />
        </div>
        <div className={styles.col}>
          <label className={styles.label}>Phone</label>
          <input
            type='number'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={styles.data}
          />
        </div>
        <button className={styles.edit} onClick={handleEdit}>
          Save
        </button>
      </div>
    </div>
  )
}

export default Edit