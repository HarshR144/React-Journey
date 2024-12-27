import { useEffect, useState } from 'react'
import ListItem from './components/ListItem';
import classes from './styles.module.css'
import TodoDetails from './components/ListDetails';
import { Skeleton } from '@mui/material';
function App() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  async function fetchTodoDetails(id){
    try{
      const data = await fetch(`https://dummyjson.com/todos/${id}`);
      const result = await data.json();

      if(result){
        setTodoDetails(result);
        setOpenDialog(true);
      }
      else{
        setTodoDetails(null);
        setOpenDialog(false);
      }
    }catch(e){
      console.log(e);
    }
  }

  async function fetchTodoListItems(){
    try{
        setLoading(true);
        const apiResponse = await fetch('https://dummyjson.com/todos');
        const result = await apiResponse.json();
        console.log(result);
        if(result?.todos && result?.todos.length > 0){
          setTodoList(result?.todos);
          setLoading(false);
        }
        setLoading(false);        
    }catch(e){
      console.log(e);
    }
  } 

  useEffect(()=>{
    fetchTodoListItems();
  },[])
  if(loading){
    return <Skeleton variant='rectangular' width={650} height={650}/>
  }

  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>Simple Todo App</h1>
      <div className={classes.todoListWrapper}>
        {
          todoList && todoList.length > 0 ?
          todoList.map((item)=><ListItem fetchTodoDetails = {fetchTodoDetails} item= {item} key= {item.id}/>) : (<p> No todo list found error</p>)
        }
      </div>
      <TodoDetails
        openDialog={openDialog} todoDetails={todoDetails} setOpenDialog= {setOpenDialog} setTodoDetails={setTodoDetails}
      />
    </div>    
  )
}

export default App
