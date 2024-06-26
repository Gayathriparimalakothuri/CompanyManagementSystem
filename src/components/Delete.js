import React, { useState } from 'react';
import BackButton from './backbutton';
import Spinner from './spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './deletestyle.module.css'

const Delete = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5000/companies/${id}`)
      .then(() => {
        setLoading(false);
        alert('Data deleted successfully')
        navigate('/companylist');
      })
      .catch((error) => {
        setLoading(false);
        alert(`${error}`);
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className={styles.header}>Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className={styles.body}>
        <h3 className={styles.content}>Are You Sure You want to delete this book?</h3>
        <button className={styles.delete} onClick={handleDelete}> Yes </button>
      </div>
    </div>
  )
}

export default Delete