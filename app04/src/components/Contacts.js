import React, {useState, useEffect} from "react"
import ContactForm from "./ContactForm";
import fireDb from "../firebase";
//import {firestore} from 'firebase';


const Contacts = () => {

    var [contactObjects, setContactObjects] = useState({})
    var [currentId, setCurrentId] = useState('')

    console.log("currentId v", currentId);

    useEffect(() => {
let ref = fireDb.firestore().collection('contacts').onSnapshot(querySnapshot => {
    const data = []
    querySnapshot.forEach(doc => {
        data.push({
            ...doc.data(),
            key: doc.id
        })
    })
    setContactObjects(data)
})
return () => ref()
    }, [])

    const addOrEdit = obj => {
        console.log("currentId valor", JSON.stringify(currentId));
if(currentId === '')
fireDb
.firestore()
.doc(currentId)


.set(obj);
    //fireDb.firestore().collection('contacts').add(obj);
  else 
  fireDb
  .firestore()
  .collection('contacts')
  .where('id', '==', 'eE2EjmF5id239C4OWllp')
  
  .set(obj);
    }
    return (
<>
<div class="jumbotron jumbotron-fluid">
<div class="container">
<h1 class="display-4 text-center">Contact Register</h1>
</div>
</div>
        <div className="row">
            <div className="col-md-5">
                <ContactForm { ... ({addOrEdit, currentId, contactObjects })} />
            </div>
            <div className="col-md-7">
                <table>
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(contactObjects).map(id => {
                                return <tr 
                               // key={id}
                                >
                                    <td>{contactObjects[id].fullName} </td>
                                    <td>{contactObjects[id].mobile} </td>
                                    <td>{contactObjects[id].email} </td>
                                    <td>
                                        <div>
<input type="submit" 
value="Editar" 
className="btn btn-primary btn-block"
onClick={() => {setCurrentId(id)}} />


<input type="submit" value="Apagar" className="btn btn-primary btn-block" />
                                        </div>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}

export default Contacts;
//fireDb.child('contacts').push(
     // obj,
  // err=>{
   // if (err)
   // console.log(err)
//}