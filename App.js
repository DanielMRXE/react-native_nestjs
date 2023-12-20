import React from 'react';
import {HomeScreens} from './screens/HomeScreens';
import {Text} from 'react-native';
import {TaskFormScreen} from './screens/TaskFormScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';


  const Stack = createStackNavigator()

  const App = () =>{
       
  return (
    <>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="HomeScreens" 
      component={HomeScreens}
      options={({navigation})=> ({
        title: 'Task App',
        headerStyle: {backgroundColor:"#222f3e"},
        headerTitleStyle:{color:'#ffffff'}, 
        headerRight:()=>(
          <TouchableOpacity onPress={()=>navigation.navigate('TaskFormScreen')}>
            <Text style={{color: '#ffffff',marginRight: 20, fontSize: 15}}>News</Text>
          </TouchableOpacity>
        ),
      })}
      />
      <Stack.Screen name="TaskFormScreen" component={TaskFormScreen}
      options={{
        title:'Create A tasks',
        headerStyle:{
          backgroundColor: '#222f3e'
        },
        headerTitleStyle:{color: "#ffffff"}
      }}
      
      />
    </Stack.Navigator>
    </NavigationContainer>
    </>
    );
}


export default App;
