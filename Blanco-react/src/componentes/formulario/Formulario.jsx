import { useState } from "react"
import Form from "./Form"
import { formValidation } from "./FormValidation"


const FormValidation= formValidation(Form)

const Formulario = () => {
    const [formData, setFormData] = useState({
        name : '',
        email : ''
    })
    console.log(formData)

    const handleOnChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name] : evt.target.value
        })
    }
    return (
        <div>

            <div className='w-50'>
            {/* <Form 
                formData={formData} 
                handleOnChange={handleOnChange} 
            />                 */}
            < FormValidation
                formData={formData}
                handleOnChange={handleOnChange}
            />
        </div>
        </div>
    )
}

export default Formulario