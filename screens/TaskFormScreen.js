import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import {saveTask,getTask,updateTask} from '../Api'


export const TaskFormScreen = ({navigation,route}) => {
  const [task, setTask]= useState({
    title:'',
    description:''

  })

  const[editing, setEditing]= useState(false)
  const handleChange = (name,value) => setTask({... task,[name]:value})

  const handleSubmit = async() =>{
try{
  if(!editing){
    await saveTask(task);
   
  }else{
await updateTask(route.params.id,task)
  }
  navigation.navigate('HomeScreens')
}
catch(error){
console.log(error)
}
  }

useEffect(()=>{
if(route.params && route.params.id){
  navigation.setOptions({headerTitle:'updating a Task'});
  setEditing(true);
  (async () =>{
    const task= await getTask(route.params.id)
  setTask({title:task.title, description:task.description})
  })();
}
},[]);
  return (
    <Layout>
      <TextInput style={styles.input}
        placeholder= "Write a title"
        placeholderTextColor='#576574'
        onChangeText={(text)=>handleChange('title', text)}
        value={task.title}
        />
      <TextInput style={styles.input}
      placeholder="Write A Description"
      placeholderTextColor='#576574'
      onChangeText={text => handleChange('description', text)}
      value={task.description}
      />

      {
        !editing ?(
          <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Save Task</Text>
        </TouchableOpacity>
        ): (
          <TouchableOpacity style={styles.buttonUpdate} onPress={handleSubmit}>
          <Text style={styles.buttonText}>update task</Text>
        </TouchableOpacity>
        )
      }
   

    </Layout>
  )
};

const styles= StyleSheet.create({
input:{
  width: '90%',
  marginBottom: 7,
  borderWidth:1,
  fontSize:14,
  borderColor:'#10ac84',
  height:35,
  color:'#ffffff',
  padding:4,
  textAlign:'center',
  borderRadius:10

},
buttonSave:{
  paddingTop:10,
  paddinBotton: 10 ,
  borderRadius:5,
  marginbottom:3,
  backgroundColor:'#10ac84',
  width:'90%',
},
buttonText:{
  color:'#ffffff',
  textAlign:'center'
},
buttonUpdate:{
  padding:10,
  paddinBottom:10,
  borderRadius:5,
  marginBottom:3,
  backgroundColor:'#e58e26',
  width:'90%'

}
})

