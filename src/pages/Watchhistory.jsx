import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getallhistory } from '../components/services/allAPI'


function Watchhistory() {
const [history,setHistory]=useState([])
const handleHistory = async ()=>{
  //make api call

const {data} = await getallhistory()
setHistory(data);

}
console.log(history);

useEffect(()=>{
  handleHistory()
},[])

const handleDeletehistory = async(id)=>{
  await deleteHistory(id)
  handleHistory()
}

  return (
    <>
<div className="container mt-5 mb-5 d-flex justify-content-between">
<h3>Watch-History</h3>
<Link to={'/home'} style={{textDecoration:'none',fontSize:'20px',color:'blueviolet'}}><i class="fa-solid fa-circle-arrow-left fa-beat-fade"></i>Back To Home</Link>

</div>
<table className='table mt-5 mb-5 container'>
  <thead>
    <th>#</th>
    <th>Name</th>
    <th>URL</th>
    <th>TimeStamp</th>
  </thead>
  <tbody>
    {
      history?history.map((item,index)=>(

        <tr key={item?.id}>
        <td>{index+1}</td>
        <td>{item?.caption}</td>
        <td><a href={item?.embedLink} target='_blank'> {item?.embedLink}</a></td>
        <td>{item?.timeStamp}</td>
        <td><button onClick={()=>handleDeletehistory(item?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i> </button></td>
        </tr>

      )):<p className='fw-bolder text-danger fs-5'>Nothing Tpo Display </p>

    }
  </tbody>
</table>

    </>
  )
}

export default Watchhistory