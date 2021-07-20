import React, {useState, useEffect} from "react"



const ContactForm = ({apagar, onDelete, addOrEdit, currentId, contactsObjects}) => {
    const initialFieldsValues = {
        apresentador: '',
        professor: '',
        visibility: 'public',
        descricao: '',
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
                        placeholder="Apresentador"
                        name="apresentador"
                        value={values.apresentador} 
                        onChange={handleInputChange}
                    />
           </div>
           <div className="form-row">


           <div className="form-group input-group">
                        <input 
                        className="form-control" 
                        placeholder="Professor"
                        name="professor"
                        value={values.professor}
                        onChange={handleInputChange}
                    />
           </div>


           <div className="form-group input-group">
                    <input 
                        className="form-control" 
                        placeholder="Descrição"
                        name="descricao"
                        value={values.descricao} 
                        onChange={handleInputChange}
                    />
           </div>


            <div>
                <textarea className="form-control" 
                    placeholder="Address"
                    name="address"
                    value={values.visibility} 
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