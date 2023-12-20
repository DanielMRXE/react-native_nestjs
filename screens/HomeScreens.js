import { View, Text} from 'react-native'
import React from 'react'
import TaskList from '../components/TaskList'
import Layout from '../components/Layout'

export const HomeScreens = () => (
    <Layout>
     <TaskList/>
      <Text>HomeScreens</Text>
    </Layout>
  )

