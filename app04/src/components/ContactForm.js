import React, {useState, useEffect} from "react"



const ContactForm = (props) => {
    const initialFieldsValues = {
        fullName: '',
        mobile: '',
        email: '',
        address: '',
    }

    var [values, setValues] = useState(initialFieldsValues);

useEffect(() => {

if(props.currentId === '')
setValues({
    ...initialFieldsValues
})
else
setValues({
    ...props.contactsObjects[props.currentId]
})
}, [props.currentId, props.contactsObjects])

    const handleInputChange = e => {
       var {name, value} = e.target
       setValues({
           ...values,
       [name]: value
       })
    }

const handleFormSubmit = e => {
    e.preventDefault();
    props.addOrEdit(values)
}

    return (
       <form autoComplete="off" onSubmit={handleFormSubmit}>
           <div className="form-group input-group">
               <div className="input-group-prepend">
                   <div className="input-group´text">
                       <i className="fas fa-user"></i>

                   </div>

               </div>
<input 
className="form-control" 
placeholder="Full Name"
name="fullName"
value={values.fullName} 
onChange={handleInputChange}
/>
           </div>
           <div clasName="form-row">
           <div className="form-group input-group">
               <div className="input-group-prepend">
                   <div className="input-group´text">
                       <i className="fas fa-user"></i>

                   </div>

               </div>
<input 
className="form-control" 
placeholder="Mobile"
name="mobile"
value={values.mobile}
onChange={handleInputChange}
 />
           </div>
           <div className="form-group input-group">
               <div className="input-group-prepend">
                   <div className="input-group-text">
                       <i className="fas fa-user"></i>

                   </div>

               </div>
<input 
className="form-control" 
placeholder="Email"
name="email"
value={values.email} 
onChange={handleInputChange}
/>
           </div>
<div>
    <textarea className="form-control" 
placeholder="Address"
name="address"
value={values.address} 
onChange={handleInputChange}
/>
</div>

<div>
    <input type="submit" value={props.currentId===''? "Save" : "Update"} className="btn btn-primary btn-block" />
</div>

           </div>
       </form>
    );
}

export default ContactForm;