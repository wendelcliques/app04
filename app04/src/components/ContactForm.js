import React, {useState, useEffect} from "react"



const ContactForm = ({apagar, onDelete, addOrEdit, currentId, contactsObjects}) => {
    const initialFieldsValues = {
        fullName: '',
        mobile: '',
        email: '',
        address: '',
    }

    var [values, setValues] = useState(initialFieldsValues);

  

    console.log("values", currentId)
    console.log("apagar", apagar)

    if (apagar) {
        
    }

useEffect(() => {

if(currentId === '')
setValues({
    ...initialFieldsValues
})
//else if(apagar === '')
//setValues({
 //   ...contactsObjects[currentId]
//})
else
setValues({
    ...contactsObjects[currentId]
})

}, [ apagar, currentId, contactsObjects])

    const handleInputChange = e => {
       var {name, value} = e.target
       setValues({
           ...values,
       [name]: value
       })
    }

const handleFormSubmit = e => {
    if (apagar) {
        e.preventDefault();
        onDelete(values)
    }
    else 
    {
    e.preventDefault();
    addOrEdit(values)
    }
}


    return (
       <form 
       autoComplete="off" 
       onSubmit={handleFormSubmit}
       
       >
           <div className="form-group input-group">
                        <input 
                        className="form-control" 
                        placeholder="Full Name"
                        name="fullName"
                        value={values.fullName} 
                        onChange={handleInputChange}
                    />
           </div>
           <div className="form-row">


           <div className="form-group input-group">
                        <input 
                        className="form-control" 
                        placeholder="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                    />
           </div>


           <div className="form-group input-group">
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
                <input 
                type="submit" 
                value={
                    
                    
                    currentId === '' ? "Save" : "Update" } 
                className="btn btn-primary btn-block" 
                />

</div>

           </div>
       </form>
    );
}

export default ContactForm;