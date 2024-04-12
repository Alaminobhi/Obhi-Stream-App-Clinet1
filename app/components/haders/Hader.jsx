import { Link } from "react-router-dom";
// import Nav from 'react-bootstrap/Nav';
import React, { useState } from "react";
import Cricket from '../Cricket/Cricket';
import { Button, Form, FormControl, Modal, Nav, OverlayTrigger, Popover } from 'react-bootstrap';
import Drawer from '@material-ui/core/Drawer';
import { ReactCircleModal } from 'react-circle-modal';
import { AiOutlineHome, AiOutlineMail, AiFillCaretRight, AiFillUnlock, AiOutlineBars, AiOutlineExport, AiTwotoneShopping, AiOutlineSearch, AiTwotoneFolderOpen, AiOutlineClose } from "react-icons/ai";


function Hader() {
  const [state, setState] = useState(false);
  const Close = () => setState(false);
  const Open = () => setState(true);
  // const popover = (
  //   <Popover id="popover-basic">
  //     <Popover.Title as="h3">helo</Popover.Title>
  //     <Popover.Content>
  //     <Cricket/>
  //     </Popover.Content>
  //   </Popover>
  // );
  const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  const user = JSON.parse(localStorage.getItem('userId'));
  
const LogOutUser = () => {
  localStorage.removeItem('userId');
  window.location.reload();
}
    return ( 
        <div className="fixed-top">
           <Nav className="d-flex justify-content-between bg-light" activeKey="/home">
        <Nav.Item className="ml-2 ml-sm-0">
        <React.Fragment key="left">
           <h3 onClick={Open}><AiOutlineExport /></h3>
           <Drawer anchor="left" open={state} onClose={Open}>
           <div
            role="presentation"
            onClick={Close}
            onKeyDown={Close}
          >
            <div className="primary" onClick={Close}>
              <h1 className="text-right"><AiOutlineClose/></h1>
            </div>
            <li><Link className="btn" to="/">Home</Link></li>
            <li><Link className="btn" to={'uploadfile'}>File Upload</Link></li>
            <li><Link className="btn" to={'radio'}>Radio</Link></li>
            <li><Link className="btn" to={'alltvchannel'}>TV Channel</Link></li>
            <li><Link className="btn" to={'hisab'}>Hisab Nikash</Link></li>
            <li><Link className="btn" to={'cricket'}>Cricket</Link></li>
            <li><Link className="btn" to={'createLive'}>Create Live Streaming</Link></li>
            </div>
          </Drawer>
        </React.Fragment>
        </Nav.Item>
        <Nav.Item className="ml-md-auto mr-sm-0 mr-md-5">
        <Form inline>
          <FormControl type="text" placeholder="Search"  className="mr-sm-2" />
          <Link className="ml-2 ml-sm-0" to="/home"><h3><AiOutlineSearch/></h3></Link>
        </Form>
        </Nav.Item>
        <Nav.Item className="mx-md-5 mx-sm-0">
        <OverlayTrigger trigger="click" placement="bottom" overlay={(
          <Popover>
            <Popover.Title as="h3">
             Hello User
            </Popover.Title>
          </Popover>
        )}>
        <h3><AiTwotoneFolderOpen/></h3>
       </OverlayTrigger>
        </Nav.Item>
        <Nav.Item>
        <ReactCircleModal
        backgroundColor="#97349a"
        toogleComponent={onClick => (
        <h4 className="mr-md-5 animate__animated animate__bounce" onClick={onClick}>
        <AiTwotoneShopping/>
        </h4>
      )}
      // Optional fields and their default values
      offsetX={0}
      offsetY={0}
      >
      {(onClick) => (
        <div style={{ backgroundColor: '#fff', padding: '1em' }}>
        <div className="border p-2">
        <div onClick={onClick}>
        <div className="row">
        <p className="col">You have reduced delivery charge ৳ {23}</p>
        <h2 className="col-4" onClick={onClick}>
            Close
        </h2>
        </div>
        {/* <h3 className="m-2 text-center">CheckOut List {data?.length} </h3>  */}
        </div>
        <div className="bg-light border p-2">
            {/* {
             (shopData.length ? shopData : data)?.map(it => <Review
             key={it._id}
             it={it}>
             </Review>)
            } */}
     
            <hr/>
        <div className="row">
            <p className="col">Total TK</p>
            <p className="col">৳ </p>
        </div>
        </div>  <br/>
        <div className="nav justify-content-end">
        <Link className="btn btn-primary col" to='/orderReview' onClick={onClick} >Order Now</Link>
         </div>
     </div>
        </div>
      )}
    </ReactCircleModal>
        </Nav.Item>
        <Nav.Item className="mr-2 mr-sm-0">
        <h3 variant="primary" onClick={handleShow}>
        <AiOutlineBars/>
        </h3>
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>{user?<><Link className="" to={'profile'}> <img className="mr-auto" style={{height: 80, width: 80}} src={user.photoURL} alt="" /> {user.displayName}</Link> <Link onClick={LogOutUser}>Logout</Link></>:<Link to={'login'}>Login</Link>}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <h5 className="ml-5" onClick={handleClose}>
            <Link className="btn hov" to='/orderReview'><AiOutlineMail/> Order Now</Link> <br/>
            <Link className="btn hov" to="/orderList"><AiFillCaretRight/> Order List</Link>
            </h5>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Nav.Item>
      </Nav>
          {/* <Nav className="d-flex justify-content-between bg-light mr-2" activeKey="/">
            <Nav.Item>
              <Link to={'/'}>Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to={'uploadfile'}>File Upload</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to={'radio'}>Radio</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to={'alltvchannel'}>TV Channel</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to={'hisab'}>Hisab Nikash</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to={'cricket'}>Cricket</Link>
            </Nav.Item>
            <Nav.Item>
            <Link to={'createLive'}>Create Live Streaming</Link>
            </Nav.Item>
            {user?<>
            <Nav.Item>
              <Link to={'profile'}><div><img src={user.photoURL} alt="NO PHOTO" width="30" height="40"></img>{user.displayName}</div></Link>
            </Nav.Item>
            <Nav.Item>
            <Link onClick={LogOutUser}>Logout</Link>
          </Nav.Item></>
            :
            <Nav.Item>
              <Link to={'login'}>Login</Link>
            </Nav.Item>}
        </Nav> */}
        </div>
     );
}

export default Hader;