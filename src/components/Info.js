import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from './backbutton';
import Spinner from './spinner';
import styles from './infostyle.module.css'

const Info = () => {
  const [company, setCompany] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/companies/${id}`)
      .then((response) => {
        setCompany(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.body}>
      <BackButton />
      <h1 className={styles.header}>Info</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className={styles.details}>
          <div className={styles.col}>
            <span className={styles.label}>Id:</span>
            <span className={styles.data}>{company._id}</span>
          </div>
          <div className={styles.col}>
            <span className={styles.label}>Organization:</span>
            <span className={styles.data}>{company.organization}</span>
          </div>
          <div className={styles.col}>
            <span className={styles.label}>Domainurl:</span>
            <span className={styles.data}>{company.domainurl}</span>
          </div>
          <div className={styles.col}>
            <span className={styles.label}>Email:</span>
            <span className={styles.data}>{company.email}</span>
          </div>
          <div className={styles.col}>
            <span className={styles.label}>Phone:</span>
            <span className={styles.data}>{company.phone}</span>
          </div>

        </div>
      )}
    </div>
  );
};

export default Info