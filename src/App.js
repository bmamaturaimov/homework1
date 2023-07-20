import { useState } from 'react';
import './App.css';
import Heder from './Components/Heder';
import Texst from './Components/Texst';
import Map from './Map';
import Input from './Input';
import Delete from './Components/Delete';
import Modal from './Modal';
import NewEvenForm from './Components/NewEvenForm';

function App() {

  const [showModal,setShowModal] = useState(false)
// _________________________1_____________________________________

  const [state3,setState3] = useState()
 

  const array=[]
  const [state,setState] = useState (false)
  const [state2,setState2]=useState(array)
  
  function save(obj){
    setState2((newArr)=>[...newArr,obj])
  }

  const delet = (id)=>{
    const arr = state2.filter((e)=>{
      if (e.id !== id){
        return e
      }
    })
    setState2 (arr)
  }


  const add = () =>{
    setState3('no')
    setState ((setState3) => !setState3)
  }
// ___________________1___________________________


  const closeModal = () => {
    setShowModal(false)
  }

// ------------------------------------------------
  return (
    <div className="App">
      <Heder/>
      {state && <button className='butn' onClick={add}>Ok</button>}
      {!state && <button className='butn' onClick={add}>NO</button>}
      {state === true ? <Texst/>:<Map/>}

    <Input onSave={save}/>
    {state2.map((e)=>{
      return <Delete onDelete={delet} key={e.id} name={e.name} id={e.id}/>

    })}
{/* _________________________________2__________________________________________________ */}

    <button onClick={()=> {setShowModal(true)}} className='btn'>Click----</button>

    {showModal && <Modal closeModal={closeModal} isModeModal={false}>
     <NewEvenForm/>
      
     </Modal>}
     

    </div>
  );
}

export default App;
