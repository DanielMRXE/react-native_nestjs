import { FlatList, RefreshControl } from 'react-native'
import React,{useState,useEffect} from 'react'
import TaskItem from './TaskItem'
import {getTasks, deleteTask} from '../Api'
import {useIsFocused} from '@react-navigation/native'

const TaskList = () => {
  const [tasks,setTasks] = useState([]);
  const [refresing, setRefresing]= useState(false)

  const isFocused= useIsFocused()

  const loadTasks = async()=>{
  const data= await getTasks()
  console.log('loaded')
 setTasks(data)
  }

  useEffect(()=>{
    loadTasks()
  },[isFocused])

const onRefresh = React.useCallback(async()=>{
  setRefresing(true);
  await loadTasks();
  setRefresing(false);
})
 
const handleDelete=async(id)=>{
  await deleteTask(id)
  await loadTasks()
}

const renderItem= ({item}) =>{
    return <TaskItem task={item} handleDelete={handleDelete}/>
};
  return (
    <FlatList 
    style={{width:'100%'}}
    data={tasks}
    keyExtractor={(item)=>item.id + ''}
    renderItem={renderItem}
    refreshControl={
      <RefreshControl
      refreshing={refresing}
      colors={["#78e08f"]}
      onRefresh={onRefresh}
      progressBackgroundColor='#0a3d62'
    
    />
    }
    />
  )
}

export default TaskList