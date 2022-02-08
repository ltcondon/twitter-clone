import { Button } from '@mui/material';
import './RetweetModal.css'
import Modal from 'react-modal';
import Post from './Post';
import React from 'react';

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(4, 18, 21, 0.71)',
        zIndex: 1000
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        width: '40%',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(255, 255, 255, 1)'
    }
};

function RetweetModal(props) {
    const post = props.post

    function afterOpenModal(e) {
        props.onAfterOpen(e, 'After Modal Opened');
    }

    function onModalClose(event) {
        let data = { name: 'example', type: 'closed from child' };
        props.onCloseModal(event, data);
    }
    const retweet = (event) => {
        let data = { retweet: true };
        props.onCloseModal(event, data);
    }

  return (
    <div>
      <Modal
        isOpen={props.IsModalOpened}
        onAfterOpen={e => afterOpenModal(e)}
        style={customStyles}
        ariaHideApp={false}
      >
        <h2>Retweet this Post?</h2>
        <Post postData={post} key={post._id} isRetweet={true}/>
        <div className='retweet__buttonWrapper'>
            <Button variant='outlined' className='retweet__tweetButton' onClick={e => retweet(e)}>Retweet</Button>
            <Button variant='outlined' className='retweet__cancelButton' onClick={e => onModalClose(e)}>Cancel</Button>
        </div>
      </Modal>
    </div>
  );
}

export default RetweetModal;