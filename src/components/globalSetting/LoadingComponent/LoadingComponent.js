import React from 'react';
import './LoadingComponent.css';
import { useSelector } from 'react-redux';

export default function LoadingComponent() {
  const loading = useSelector(state => state.LoadingReducer.loading);
  console.log('loading: ', loading);
  const renderLoading = () => {
    if (loading) {
      return <div className='bg-loading'>
        <img src={require("../../../assets/images/loading.gif")} style={{ width: "2%" }} alt='/#' />
      </div>
    } else {
      return false;
    }
  }
  return (
    <>
      {renderLoading()}
    </>

  )
}
