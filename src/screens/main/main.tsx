import React, {useEffect} from 'react'
import {KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native'
import {useStore} from 'effector-react'
import {$taskCount, $taskList} from './models/models'
import {getTasks} from '../../api/rest/get-tasks'
import {TaskList} from '../../features/taks-list'
import {LoginModal} from '../../features/login-modal/login-modal'
import {CreateTaskModal} from '../../features/create-task-modal/create-task-modal'
import {DataTable} from 'react-native-paper'
import {TaskSorting} from '../../features/task-sorting/task-sorting'
import {$taskSortingDirection, $taskSortingField} from '../../features/task-sorting/models/models'
import {EditTaskModal} from '../../features/edit-task-modal/edit-task-modal'
import {useHeaderHeight} from '@react-navigation/stack'


export const Main:React.FC = () => {
    const tasksList = useStore($taskList)
    const sortField = useStore($taskSortingField)
    const sortDirection = useStore($taskSortingDirection)
    const headerHeight = useHeaderHeight()
    const taskCount = useStore($taskCount)

    useEffect(()=>{
        getTasks({})
    }, [])

    const [page, setPage] = React.useState(1)

    useEffect(()=>{
        getTasks({page, sortDirection, sortField})
    }, [page, sortField, sortDirection])

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={{flex: 1}}
            keyboardVerticalOffset={Platform.OS === 'ios' ? headerHeight : 0}
        >
            <View style={styles.container}>
                <TaskSorting/>
                <TaskList tasks={tasksList}/>
                <DataTable >
                    <DataTable.Pagination
                        page={page}
                        style={{right: 0, marginRight: 30, marginBottom: 20}}
                        numberOfPages={Math.ceil(taskCount)}
                        onPageChange={(page) => page > 0 && setPage(page)}
                        label={`${page } of ${Math.ceil(taskCount / 3)}`}
                    />
                </DataTable>
                <LoginModal/>
                <CreateTaskModal/>
                <EditTaskModal/>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    list: {
        height: '100%',
        width: '100%',
    },
})
