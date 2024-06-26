import React, { useState } from 'react';
import BackButton from './backbutton';
import Spinner from './spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './addstyle.module.css'
//import { useSnackbar } from 'notistack';

const Create = () => {
  const [organization, setOrganization] = useState('');
  const [domainurl, setDomainurl] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
 // const { enqueueSnackbar } = useSnackbar();

  const handleSave = () => {
    const data = {
      organization,
      domainurl,
      email,
      phone
    };
    setLoading(true);
    axios
      .post('http://localhost:5000/companies/postdata', data)
      .then(() => {
        setLoading(false);
        alert('data entered successfully')
        navigate('/companylist');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please Check console');
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className={styles.add}>Create Entry </h1>
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
        <button className={styles.save} onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}

export default Create