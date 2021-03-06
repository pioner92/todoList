import {AnimatedModal} from '../animated-modal'
import {View} from 'react-native'
import React, {useEffect} from 'react'
import {useStore} from 'effector-react'
import {
    $editTaskModalAnimatedValue,
    $editTaskModalInputValue,
    $isMountedEditTaskModal,
    $selectedTaskId,
    hideEditTaskModal,
    setEditTaskModalInputValue,
} from './models/models'
import {Input} from '../../ui/atoms/input/input'
import {TwoButtonRow} from '../two-button-row'
import {Title} from '../../ui/atoms/title/title'
import {editTask} from '../../api/rest/edit-task'
import {$taskList, editTaskText, statusValidate} from '../../screens/main/models/models'


export const EditTaskModal = () => {
    const isMounted = useStore($isMountedEditTaskModal)
    const animatedValue = useStore($editTaskModalAnimatedValue)
    const inputValue = useStore($editTaskModalInputValue)
    const taskList = useStore($taskList)
    const selectedTaskID = useStore($selectedTaskId)


    const onPressSave = () => {
        hideEditTaskModal()
        if (selectedTaskID) {
            const task = taskList.find((el) => el.id === selectedTaskID)
            if (task && task.text !== inputValue) {
                const taskStatus = task.status === 0 ? 1 : 10
                editTaskText({text: inputValue, id: selectedTaskID})
                editTask({text: inputValue, id: selectedTaskID, status: statusValidate(taskStatus)})
            }
        }
    }

    useEffect(() => {
        const task = taskList.find((el) => el.id === selectedTaskID)
        if (task) {
            setEditTaskModalInputValue(task?.text)
        }
    }, [selectedTaskID])


    if (!isMounted) {
        return null
    }

    return (
        <AnimatedModal animatedValue={animatedValue} isMounted={isMounted}>
            <View style={{height: 130}}>
                <Title>Edit Task</Title>
                <Input value={inputValue} onChange={setEditTaskModalInputValue}/>
                <TwoButtonRow
                    labelLeftButton='Cancel'
                    labelRightButton='Save'
                    onPressLeftButton={hideEditTaskModal}
                    onPressRightButton={onPressSave}
                />
            </View>
        </AnimatedModal>
    )
}
