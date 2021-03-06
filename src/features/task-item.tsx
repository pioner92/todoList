import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {taskType} from '../api/rest/get-tasks'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import {useStore} from 'effector-react'
import {$isAuth} from '../models/models'
import {Bookmark} from '../ui/atoms/icons/bookmark'
import {BookmarkOutline} from '../ui/atoms/icons/bookmark-outline'
import {PenSvg} from '../ui/atoms/icons/pen'
import {editTask} from '../api/rest/edit-task'
import {setSelectedTaskId, showEditTaskModal} from './edit-task-modal/models/models'
import {editTaskStatus} from '../screens/main/models/models'


type propsType = {
    item: taskType
}

export const TaskItem: React.FC<propsType> = ({item}) => {
    const isAuth = useStore($isAuth)

    const isChecked = (status: number) => {
        return (status === 10 || status === 11)
    }

    const onPressEditTask = (id: number) => {
        setSelectedTaskId(id)
        showEditTaskModal()
    }

    const createNewStatus = (status: number) => {
        switch (status) {
        case 0:
            return 10
            break
        case 1:
            return 11
            break
        case 10:
            return 0
            break
        case 11:
            return 1
            break
        default:
            return status
        }
    }

    const editChecked = (isChecked: boolean, id: number) => {
        const status = createNewStatus(item.status)
        editTaskStatus({id, status})
        editTask({id, status: status ? 10 : 0})
    }


    return (
        <View style={styles.container}>
            {isAuth &&
            <BouncyCheckbox
                size={20}
                style={{flex: 1, margin: 0}}
                disableText={true}
                isChecked={isChecked(item.status)}
                borderColor={'#ccc'}
                fillColor="#0b8f09"
                onPress={(checked) => editChecked(checked, item.id)}
            />
            }

            <View style={styles.content}>

                <View style={{flex: 5}}>
                    <Text>{item.username}</Text>
                    <Text>{item.email}</Text>
                </View>

                <View style={styles.divider}/>
                <View style={styles.textContent}>
                    <Text>{item.text}</Text>
                </View>

            </View>

            <View style={styles.status}>
                <View style={{height: 10, alignItems: 'center', justifyContent: 'center'}}>
                    {item.status === 1 || item.status === 11 ?
                        <Text style={styles.editedTitle}>Edited by admin</Text> :
                        null
                    }
                </View>

                <View style={{alignItems: 'center', justifyContent: 'center', height: 50, flexDirection: 'row'}}>
                    {item.status >= 10 ?
                        <Bookmark/> :
                        <BookmarkOutline/>
                    }
                    {isAuth &&
                    <TouchableOpacity onPress={() => onPressEditTask(item.id)}
                        style={{flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
                        <PenSvg/>
                    </TouchableOpacity>
                    }
                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 5,
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#f5f5f5',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.10,
        shadowRadius: 1.41,
        elevation: 2,
    },
    content: {
        flex: 10,
    },
    status: {
        alignItems: 'flex-end',
        flex: 3,
    },
    divider: {
        borderWidth: 0.5,
        borderColor: '#E1E1E1',
        width: '100%',
    },
    editedTitle: {
        color: '#696969',
        fontSize: 10,
    },
    textContent: {
        paddingVertical: 5,
    },
})
