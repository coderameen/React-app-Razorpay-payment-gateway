import React, {useState} from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
const App = () => {
  const [amount, setamount] = useState('');
  const handlePay= (e) =>{
     if(amount == ""){
      alert("Please Enter the Amount");
     }
     else{
      //alert(amount);
      var options ={
        key:"rzp_test_VyJYYxTfQzX5aF",
        key_secret:"rzp_test_VyJYYxTfQzX5aF",
        amount: amount*100,
        currency:"INR",
        name:"ameen",
        description:"for testing purpose",
        handler:function(response){
          alert(response.razorpay_payment_id);
        },
        prefill:{
          name:"ameenhasan",
          email:"coderameen@gmail.com",
          contact:"7204768219"
        },
        notes:{
          address:"Razorpay corporate office"
        },
        theme:{
          color:"#3399cc"
        }
      };
      var pay=new window.Razorpay(options);
      pay.open()
     }
  }
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto">
          
          <div className="row">
            <h1>Payment Gateway using Razorpay API</h1>
            <input type="text" placeholder='Enter the Amount' className="form-control" value={amount} onChange={(e)=>{setamount(e.target.value)}}/>
            <br/>
            <br/>
            <button className='btn btn-primary btn-lg' onClick={handlePay}>Pay</button> 
            </div>

        </div>

      </div>
    </div>
    </>

  )
}

export default App