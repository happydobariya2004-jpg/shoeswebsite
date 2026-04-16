import React, { useState } from 'react'
// import Header from '../Commonpage/Header'
// import Footer from '../Commonpage/Footer'
import { ToastContainer, toast } from 'react-toastify';

const Crud = () => {

    let [formData, setformData] = useState({
        uname: '',
        uphone: '',
        uemail: '',
        umessage: '',
        id: ''
    })

    let changeInputValue = (e) => {
        let oldFormData = { ...formData }
        let getInputsName = e.target.name
        let getInputsValue = e.target.value
        oldFormData[getInputsName] = getInputsValue
        setformData(oldFormData)
    }

    let [userData, setUserData] = useState([])

    let handleSubmit = (e) => {
        e.preventDefault()

        let currentUserData = {
            uname: formData.uname,
            uphone: formData.uphone,
            uemail: formData.uemail,
            umessage: formData.umessage,
        }

        if (formData.id === '') {
            let checkInputs = userData.filter((v, i) => v.uphone === formData.uphone || v.uemail === formData.uemail)

            if (checkInputs.length >= 1) {
                toast.error('Phone and Email already Exist')
            } else {
                let oldUserData = [...userData, currentUserData]
                setUserData(oldUserData)
                setformData({
                    uname: '',
                    uphone: '',
                    uemail: '',
                    umessage: '',
                    id: ''
                })
                toast.success('Form Submmited')
            }
        } else {

            let indexNumbernew = formData.id
            let newUserData = userData

            let checkInputs = userData.filter((v, i) => (v.uphone === formData.uphone || v.uemail === formData.uemail) && i !== formData.id)


            console.log(checkInputs);

            if (checkInputs.length === 0) {

                newUserData[indexNumbernew]['uname'] = formData.uname
                newUserData[indexNumbernew]['uphone'] = formData.uphone
                newUserData[indexNumbernew]['uemail'] = formData.uemail
                newUserData[indexNumbernew]['umessage'] = formData.umessage

                setUserData(newUserData)
                setformData({
                    uname: '',
                    uphone: '',
                    uemail: '',
                    umessage: '',
                    id: ''
                })
                toast.success('Data Updated')
            } else {
                toast.error('Phone and Email already Exist')
            }

        }
    }
   // delete
   
    let deleteRow = (indexNumber) => {
        let rowAfterDelete = userData.filter((v, i) => i !== indexNumber)

        setUserData(rowAfterDelete)
    }
  // update


    let updateRow = (indexNumber) => {
        let rowAfterUpdate = userData.filter((v, i) => i === indexNumber)[0]
        rowAfterUpdate['id'] = indexNumber

        setformData(rowAfterUpdate)
    }

    return (
        <>
            <ToastContainer position="top-center"></ToastContainer>     {/* error mate toast  */}
            {/* <Header></Header> */}
            <div className="container">
                <h1>Crud Opration</h1>
                <div className="row py-5">
                    <div className="col-5">
                        <form onSubmit={handleSubmit}>
                            <div className="pb-3">
                                <label>User Name</label>
                                <input type="text" onChange={changeInputValue} name='uname' value={formData.uname} className=' form-control' />
                            </div>
                            <div className="pb-3">
                                <label>User Phone</label>
                                <input type="text" onChange={changeInputValue} name='uphone' value={formData.uphone} className=' form-control' />
                            </div>
                            <div className="pb-3">
                                <label>User Email</label>
                                <input type="text" onChange={changeInputValue} name='uemail' value={formData.uemail} className=' form-control' />
                            </div>
                            <div className="pb-3">
                                <label>User Message</label>
                                <textarea name='umessage' onChange={changeInputValue} value={formData.umessage} className='form-control'></textarea>
                            </div>

                            <button
                                className={`${formData.id === '' ? 'btn btn-success' : 'btn btn-warning'}`}
                            >{formData.id === '' ? 'Save' : 'Update'}</button>
                        </form>
                    </div>
                    <div className="col-7">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">No.</th>
                                    <th scope="col">UName</th>
                                    <th scope="col">UPhone</th>
                                    <th scope="col">UEmail</th>
                                    <th scope="col">UMessage</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userData.length >= 1 ?
                                        (
                                            <>
                                                {
                                                    userData.map((v, i) => {
                                                        return (
                                                            <tr>
                                                                <th scope="row">{i + 1}</th>
                                                                <td>{v.uname}</td>
                                                                <td>{v.uphone}</td>
                                                                <td>{v.uemail}</td>
                                                                <td>{v.umessage}</td>
                                                                <td>
                                                                    <button className=' btn btn-warning' onClick={() => updateRow(i)} >Update</button>
                                                                    <button className=' btn btn-danger' onClick={() => deleteRow(i)}>Delete</button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </>
                                        )
                                        :
                                        (
                                            <>
                                                <tr>
                                                    <td colSpan={7} className=' text-center'>No Data Found</td>
                                                </tr>
                                            </>
                                        )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Crud