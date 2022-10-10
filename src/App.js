import {useState,useEffect} from 'react';
import axios from 'axios';


function App() {
        const [name, setName]=useState('');
        const [age,setAge]=useState('');
        const [dept,setDept]=useState('');

        const [data,setData]=useState([]);

        const handle=(e)=>{
          e.preventDefault();

          const data={Name:name,Age:age,Department:dept}
          axios.post('https://sheetdb.io/api/v1/luxi9obf7k84s',data).then(response=>{ 
          setName('');
          setAge('');
          setDept('');
        })
      }

      const getData=()=>{
        axios.get('https://sheetdb.io/api/v1/luxi9obf7k84s').then((response)=>{setData(response.data);
        })
      }

      useEffect(()=>{
        getData();},[data])
      


  return (
    <div className="App">
        <h1>Enter the Data</h1><br></br>
        <div class='container'>
          
        <form autoComplete='off' className='form' onSubmit={handle}>
          <label>Name</label>
          <input type='text' placeholder='Enter your name' required className='formControl' onChange={(e)=>setName(e.target.value)} value={name}/><br></br>
          <br></br>
          <label>Age</label>
          <input type='number' placeholder='Enter your age' required className='formControl' onChange={(e)=>setAge(e.target.value)} value={age}/><br></br>
          <br></br>
          <label>Department</label>
          <input type='text' placeholder='Enter your Department' required className='formControl' onChange={(e)=>setDept(e.target.value)} value={dept}/><br></br>
          <br></br>        
        <div>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
        </form>
        
        </div>



    </div>
  );
}

export default App;
