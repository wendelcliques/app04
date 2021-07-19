import React, {useState, useEffect} from "react"
import ContactForm from "./ContactForm";
import fireDb from "../firebase";
//import {firestore} from 'firebase';


const Contacts = () => {

    var [contactObjects, setContactObjects] = useState({})
    var [currentId, setCurrentId] = useState('')

    console.log("currentId v", currentId);

  /*  useEffect(() => {


/*let ref = fireDb.firestore().collection('contacts').onSnapshot(querySnapshot => {
    const data = []
    querySnapshot.forEach(doc => {
        data.push({
            ...doc.data(),
            id: doc.id
        })
    })
    setContactObjects(data)


})
return () => ref()
    }, [])*/

    useEffect(() => {
const fetchData = async () => {
const db = fireDb.firestore();
const data = await db.collection('contacts').get();
setContactObjects(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
};
fetchData();
    }, [currentId])

    //console.log("objeto", obj);

    const addOrEdit = obj => {
        console.log("currentId valor", currentId);
if(currentId === '')

    fireDb.firestore().collection('contacts').add(obj);
  else 
  fireDb
  .firestore()
  .collection('contacts')
  .doc(obj.id)
  
  .set(obj);

  setCurrentId('');
    }
const onDelete = (obj) => {
    if((window.confirm("apagar?"))) {
        console.log("apagou", obj.id)
    fireDb
    .firestore()
    .collection('contacts')
    .doc(obj.id)                                                    
    .delete();

   
    }

}
    
   
    console.log("prevent", addOrEdit, currentId, contactObjects)

    return (
<>
<div class="jumbotron jumbotron-fluid">
<div class="container">
<h1 class="display-4 text-center">Contact Register</h1>
</div>
</div>
        <div className="row">
            <div className="col-md-5">
                <ContactForm  
                //{  ...( {  } )} 
                    addOrEdit={addOrEdit}
                    currentId={currentId}
                    contactsObjects={contactObjects}
                    />
                
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
                                return <tr key={contactObjects.id} >
                                    <td>{contactObjects[id].fullName} </td>
                                    <td>{contactObjects[id].mobile} </td>
                                    <td>{contactObjects[id].email} </td>
                                    <td>
                                        <div>
                                            <input type="submit" 
                                                value="Editar" 
                                                className="btn btn-primary btn-block"
                                                onClick={() => {
                                                setCurrentId(id)
                                                    }} 
                                                    onKeyPress={() => {
                                                     setCurrentId(id)
                                                    }} 
                                                />


                                                <input 
                                                type="submit" 
                                                value="Apagar" 
                                                className="btn btn-primary btn-block" 
                                                onClick={() => {
                                                    onDelete(id)}


                                                     }
                                                        onKeyPress={() => {
                                                            onDelete(id)}
                                                        } 
                                                />
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