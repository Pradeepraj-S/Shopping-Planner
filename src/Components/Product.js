
import React, { useState, useEffect } from 'react';
import Cart from './Cart';
import { useHistory } from 'react-router-dom';
import './Product.css';

// const getDatafromLS = () => {
//   const data = localStorage.getItem('details');
//   if (data) {
//     return JSON.parse(data);
//   } else {
//     return [];
//   }
// };

export default function Product() {
  const [details, setdetails] = useState([]);
  const [strikeDetails, setStrikeDetails] = useState([])

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [allTotal, setAllTotal] = useState(0)

 
  const history = useHistory(''); 

  const handleDetailsSubmit = e => {
    e.preventDefault();

    let detail = {
      name,
      description,
      price,
      
    };
    setdetails([
      ...details,
      detail
    ])
    setdetails([...details, detail]);
    localStorage.setItem("detail", JSON.stringify(details));
    setName('');
    setDescription('');
    setPrice('');
    // history.push('/New')
  };

  const strike = (id) => {
    
    let strikeDetail = details[id]
    setStrikeDetails([
      ...strikeDetails,
      strikeDetail
    ])
    let newDetails = details
    newDetails.splice(id, 1)
    setdetails(newDetails)
  }

 

  const deleteDetails = price => {
    const filteredDetails = details.filter((element, index) => {
      return element.price !== price;
    });
    setdetails(filteredDetails);
    
  };

  
  useEffect(()=>{
    let newtotal = 0
    for (let i = 0; i<details.length; i++){
        newtotal = (details[i].price*details[i].description)+newtotal
    }
    setAllTotal(newtotal)
})

  
  let update = () => {
    console.log('try')
    }

    

  return (
    <div className="container">
      <div>
        <h1>ADD CART</h1>

        <div className="">
          <div className="addproduct ">
            <form autoComplete="off" className="form-group" />
            <label className="h4">Product Name</label>
            <br />
            <input
              type="text"
              className="names"
              placeholder='Enter the Product Name'
              required
              onChange={e => setName(e.target.value)}
              value={name}
            ></input>
            <br /> <br />
            <label className="h4">Quantity</label>
            <br />
            <input
              type="number"
              className="names"
              placeholder='Enter the Quantity'
              required
              onChange={e => setDescription(e.target.value)}
              value={description}
            ></input>
            <br /> <br />
            <label className="h4">Price</label>
            <br />
            <input
              type="number"
              className="names"
              placeholder='Enter the Price'
              required
              onChange={e => setPrice(e.target.value)}
              value={price}
            ></input>
            <br /> <br />
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleDetailsSubmit}
            >
              Submit
            </button>
          </div>
          <br />
          <br />
          <br />
          <div className="container">
            <div className="table-responsive addproduct">
              <table className="table">
                <thead>
                  <tr className="h3">
                    <td></td>
                    <th>Action</th> 
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                    
                  </tr>
                  
                </thead>

                <tbody>
                  <Cart details={details} deleteDetail={deleteDetails} update={update} />

                  {details.map((detail, index)=> {
                    return(
                      <tr className='text-i'>
                      
                      <td></td>
                      <td onClick = {() => strike(index)}> <input type='checkbox' /></td>
                      <td>{detail.name}</td>
                      <td>{detail.description}</td>
                      <td>{detail.price}</td>
                      <td>{detail.description*detail.price}</td> 
                      </tr>
                    )
                  })}
                </tbody>
                
              </table>
              <tr> 
              <h2 className='totalprice'> Total: {allTotal}</h2> </tr>
            </div>
            
          </div>
        </div>
        <br />
        <br />
        <br />
        

        <div className="container">
          
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr className="h3">
                  <td></td>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  
                  
                </tr>
                {strikeDetails.map((detail, index)=> {
                  return(
                    <tr className='text' >
                    <td></td>
                    <td>{detail.name}</td>
                      <td>{detail.description}</td>
                      <td>{detail.price}</td>
                      
                    </tr>
                  )
                })}
              </thead>

              <tbody>
             
              </tbody>
            </table>
            <br />
            <br />
            <br />
            <br />
            
          </div>
        </div>
      </div>
    </div>
  );
}
