import { Link,Outlet } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";


function Archive(){

//THIS STATE WILL GRAB THE DATA THAT WE WANT TO DISPLAY
const [reimbursementForm, setReimbursementForm] = useState([]);




//THIS GET REQUEST DEFINES THE setReimbursementForm TO GRAB ALL THE DATA THAT THE GET REQUEST MAKES
//THE QUERY FOR THIS GET REQUEST IS 'SELECT * FROM formdetails ' CAN BE CHANGE TO SAY WHERE empid = $1 
//BUT I DONT KNOW HOW TO SEND THE CORRECT empid INTO THE QUERY
const getForm = () => {
    Axios.get("http://localhost:3001/archive").then((response) => {
      setReimbursementForm(response.data);
    });
  };



  return (
<<<<<<< HEAD
    <>
    <div className="title">Dashboard </div>
  
    <nav className="navigate">  
         <Link to="/"> Home</Link> 
     </nav>

     <div className="container" id="container1">
        <button onClick={getForm}>Show Requests</button>
        {/* just a link to not get stuck */}
        <div>
         
=======
    <div className="App">

      <div className="form">
        <button onClick={getForm}>Show Requests</button>
        {/* just a link to not get stuck */}
        <div>
            <nav>
           
                    <Link to="/"> Home</Link>
           
            </nav>
            <Outlet />
>>>>>>> main
        </div>

        {/* THIS IS HOW THE GET REQUEST IS DIPLAYED THEY CAN BE ON THE SAME LINE OR IN A PARAGRAPH FORM I JUST LISTED THEM TO TELL THEM APART*/}
        {reimbursementForm.map((val, key) => {
          return (
<<<<<<< HEAD
           
            <div className="my-3" >
            <h3 className="card-header bg-dark text-light p-2 m-0"></h3>
                    <div>
               
                    <div className="bg-light py-4">
              <blockquote
                className="p-4"
                style={{
                  fontSize: '1.5rem',
                  fontStyle: 'italic',
                  border: '2px dotted #1a1a1a',
                  lineHeight: '1.5',
                }}
              >
               Full Name: {val.fullname}<br/>
               dept: {val.dept}<br/>
               
               title: {val.title}<br/>
              eventname: {val.eventname}<br/>
              facilitator: {val.facilitator}<br/>
              startdate: {val.startdate}<br/>
              enddate: {val.enddate}<br/>
              eventname: {val.eventname}<br/>
              description: {val.description}<br/>
                      total: {val.total}<br/>
                      certificationname: {val.certificationname}<br/>
                      empmessage: {val.empmessage}<br/>
                      empsignature: {val.empsignature}<br/>
                      todaysdate: {val.todaysdate}<br/>
                      status: {val.status}<br/>
                      supermessage: {val.supermessage}<br/>
                      depthead: {val.depthead}<br/>
                      benefitscoor: {val.benifitscoor}<br/>
                   
              </blockquote>
           
              </div>
                  </div>
                  </div>

          );
          
=======
            <div className="form">
              <div>
              <h3>Full Name: {val.fullname}</h3>
                <h3>dept: {val.dept}</h3>
                <h3>title: {val.title}</h3>
                <h3>eventname: {val.eventname}</h3>
                <h3>facilitator: {val.facilitator}</h3>
                <h3>startdate: {val.startdate}</h3>
                <h3>enddate: {val.enddate}</h3>
                <h3>eventname: {val.eventname}</h3>
                <h3>description: {val.description}</h3>
                <h3>total: {val.total}</h3>
                <h3>certificationname: {val.certificationname}</h3>
                <h3>empmessage: {val.empmessage}</h3>
                <h3>empsignature: {val.empsignature}</h3>
                <h3>todaysdate: {val.todaysdate}</h3>
                <h3>status: {val.status}</h3>
                <h3>supermessage: {val.supermessage}</h3>
                <h3>depthead: {val.depthead}</h3>
                <h3>benefitscoor: {val.benifitscoor}</h3>

                <p>---------------------------------</p>
              </div>
            </div>
          );
>>>>>>> main
        })}
      </div>
              {/* just a link to not get stuck at the bottom in case theres a long list*/}

      <div>
<<<<<<< HEAD
          
          
        </div>

    </>
    
=======
            <nav>
           
                    <Link to="/"> Home</Link>
           
            </nav>
            <Outlet />
        </div>

    </div>
>>>>>>> main
  );



}
<<<<<<< HEAD
   
=======

>>>>>>> main
export default Archive;