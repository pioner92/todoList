import {FlatList, View} from 'react-native'
import React from 'react'
import {tasksType} from '../api/rest/get-tasks'
import {TaskItem} from './task-item'

type propsType = {
    tasks:tasksType
}

export const TaskList:React.FC<propsType> = ({tasks}) => {
    return (
        <FlatList
            contentContainerStyle={{marginTop: 10}}
            ItemSeparatorComponent={
                () => <View style={{backgroundColor: 'transparent', height: 12}}/>
            }
            data={tasks}
            keyExtractor={(el) => el.id.toString()}
            renderItem={({item})=><TaskItem item={item}/>}
        />
    )
}
