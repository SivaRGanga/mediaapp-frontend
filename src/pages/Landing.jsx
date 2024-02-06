import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Landing() {

  const navigateByUrl= useNavigate()
  return (
    <div>
      <Row className='mt-5 align-items-center justify-content-between w-100'>
       <Col></Col>
       <Col lg={5}>
        <h1 style={{textAlign:'justify',color:'white'}}>Welcome To <span className='text-primary'>Media Player</span></h1>
        <p  style={{color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis necessitatibus eaque eveniet? Quis natus nobis impedit explicabo cumque ducimus porro assumenda sunt debitis totam culpa minima vero aperiam, tenetur nam!</p>
       <button onClick={()=>navigateByUrl('/home')} className='mt-4 btn btn-info'>Get Started</button>
       </Col>
       <Col lg={4}>
        <img src="https://i.gifer.com/7d20.gif" width={300} height={300} alt="" />
       </Col>
       <Col></Col>

      </Row>

      <div className='container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column'>
<h3>Features</h3>
<div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100 '>
<Card className='p-5 bg-transparent' style={{ width: '22rem' }}>
      <Card.Img height={300} width={300}  variant="top" src="https://media.tenor.com/15YUsMWt4FEAAAAj/music.gif" />
      <Card.Body>
        <Card.Title>Manage Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='p-5 bg-transparent' style={{ width: '22rem' }}>
      <Card.Img height={300} width={300} variant="top" src="https://media.tenor.com/Y_axIU155W4AAAAj/guitar-concert.gif" />
      <Card.Body>
        <Card.Title>Manage Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='p-5 bg-transparent' style={{ width: '22rem' }}>
      <Card.Img height={300} width={300} variant="top"  src="https://www.icegif.com/wp-content/uploads/2022/01/icegif-225.gif" />
      <Card.Body>
        <Card.Title>watch history</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>


</div>
<div className='container border rounded p-5 border-light mb-5 mt-5 d-flex align-items-center justify-content-between w-100 '>
<div className='col-lg-5'>
    <h3 className='mb-3 text-warning'>Simple,Powerful & Fast</h3>
    <h6 className='mb-5'><span className='fs-5 fw-bolder text-warning'>Play Everything</span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores perferendis autem harum soluta delectus est dolores omnis non corrupti recusandae officiis eveniet consequatur ipsum, eaque nisi ad ipsam cumque aspernatur.</h6>

    <h6 className='mb-5'><span className='fs-5 fw-bolder text-warning'>Play Everything</span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores perferendis autem harum soluta delectus est dolores omnis non corrupti recusandae officiis eveniet consequatur ipsum, eaque nisi ad ipsam cumque aspernatur.</h6>

    <h6 className='mb-5'><span className='fs-5 fw-bolder text-warning'>Play Everything</span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores perferendis autem harum soluta delectus est dolores omnis non corrupti recusandae officiis eveniet consequatur ipsum, eaque nisi ad ipsam cumque aspernatur.</h6>

  </div>

  <div className='video col-lg-6'>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/S0Y_JfrvnRc?si=1iH_stqu4_5PKaPJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</div>
      </div>
    </div>
  )
}

export default Landing