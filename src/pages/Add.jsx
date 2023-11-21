import React from 'react'
import { PlusCircle } from 'react-feather'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideo } from '../services/allapi';
// for showing instead of toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({ handleRes}) {

  const [uploadData, setuploadData] = useState({
    id: "", caption: "", thumbnail: "", url: ""
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const setInput = (e) => {

    // console.log(e.target.value);
    const { name, value } = e.target

    setuploadData({ ...uploadData, [name]: value })

  }

  console.log(uploadData);

  // original url    :https://www.youtube.com/watch?v=7DaFmLEMt9c

  // src="https://www.youtube.com/embed/7DaFmLEMt9c"

  const extractUrl = (e) => {

    let youtubeUrl = e.target.value
    if (youtubeUrl.includes("v=")) {

      let index = youtubeUrl.indexOf("v=")
      console.log(index);


      let videourl = youtubeUrl.substring(index + 2, index + 13)
      console.log(videourl);


      let videoData = uploadData

      videoData.url = `https://www.youtube.com/embed/${videourl}`
      setuploadData(videoData)
    }
    console.log(uploadData);
  }

  // define handleAdd

  const handleAdd = async () => {

    // destructure uploaddata state

    const { id, caption, thumbnail, url } = uploadData
    if (!id || !caption || !thumbnail || !url) {

      toast('please fill the form completely')
    }
    else {

      // make an api call

      const response = await addVideo(uploadData)

      //  console.log(response);

      if (response.status >= 200 && response.status < 300) {
        // console.log(response.data);

        handleRes(response.data)
        toast.success('new video uploaded successfully',{
          position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,

theme: "dark",
        })
        setShow(false)
      }
      else {
        toast.warn("provide a unique id!!!",{
          position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
        })
      }
    }
  }

  return (
    <>
      <div onClick={handleShow}>
        <PlusCircle color='blue' size={90} />
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel className='mb-3' controlId="floatingId" label="Uploading video id">
              <Form.Control type="text" placeholder="Video id" name="id" onChange={setInput} />
            </FloatingLabel>

            <FloatingLabel className='mb-3' controlId="floatingCaption" label="Uploading video caption">
              <Form.Control type="text" placeholder="video Caption" name="caption" onChange={setInput} />
            </FloatingLabel>

            <FloatingLabel className='mb-3' controlId="floatingImage" label="Uploading video cover image url">
              <Form.Control type="text" placeholder="Video cover image url" name="thumbnail" onChange={setInput} />
            </FloatingLabel>

            <FloatingLabel className='mb-3' controlId="floatingLink" label="Uploading video link">
              <Form.Control type="text" placeholder="Video Link" name="url" onChange={extractUrl} />
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAdd} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default Add
