import {AnimatedModal} from '../animated-modal'
import React, {useState} from 'react'
import {useStore} from 'effector-react'
import {
    $createTaskModalAnimatedValue,
    $createTaskModalEmailInputValue,
    $createTaskModalNameInputValue,
    $createTaskModalTextInputValue,
    $isMountedCreateTaskModal,
    hideCreateTaskModal,
    resetCreateModalFields,
    setCreateTaskModalEmailInputValue,
    setCreateTaskModalNameInputValue,
    setCreateTaskModalTextInputValue,
} from './models/models'
import {View} from 'react-native'
import {createTask} from '../../api/rest/create-task'
import {Title} from '../../ui/atoms/title/title'
import {InputWithValidation} from '../../ui/atoms/input/input-with-validation'
import {TwoButtonRow} from '../two-button-row'
import {$taskCount, setTaskCount} from '../../screens/main/models/models'

export const CreateTaskModal: React.FC = () => {
    const nameInputValue = useStore($createTaskModalNameInputValue)
    const emailInputValue = useStore($createTaskModalEmailInputValue)
    const textInputValue = useStore($createTaskModalTextInputValue)
    const [isStatedValidate, setIsStartedValidate] = useState(false)
    const animatedValue = useStore($createTaskModalAnimatedValue)
    const isMounted = useStore($isMountedCreateTaskModal)


    const onPressCancel = () => {
        resetCreateModalFields()
        hideCreateTaskModal()
        setIsStartedValidate(false)
    }

    const emailValidate = (email: string) => {
        return email.length >= 3 && email.includes('@') && email.includes('.')
    }

    const onPressAdd = async () => {
        setIsStartedValidate(true)
        if (nameInputValue && emailInputValue && textInputValue && emailValidate(emailInputValue)) {
            setTaskCount($taskCount.getState() + 1)
            const result = await createTask({username: nameInputValue, email: emailInputValue, text: textInputValue})
            if (result?.status === 'ok') {
                hideCreateTaskModal()
                setIsStartedValidate(false)
            }
        } else {

        }
    }

    return (
        <AnimatedModal animatedValue={animatedValue} isMounted={isMounted}>
            <View style={{flex: 1}}>
                <Title>Create Task</Title>
                <InputWithValidation
                    label='Name'
                    value={nameInputValue}
                    onChange={setCreateTaskModalNameInputValue}
                    emailValidate={false}
                    isStartedValidate={isStatedValidate}
                />

                <InputWithValidation
                    label='Email'
                    value={emailInputValue}
                    onChange={setCreateTaskModalEmailInputValue}
                    emailValidate={true}
                    isStartedValidate={isStatedValidate}
                />
                <InputWithValidation
                    label='Text'
                    value={textInputValue}
                    onChange={setCreateTaskModalTextInputValue}
                    emailValidate={false}
                    isStartedValidate={isStatedValidate}
                />
                <TwoButtonRow
                    labelLeftButton='Cancel'
                    labelRightButton='Add'
                    onPressLeftButton={onPressCancel}
                    onPressRightButton={onPressAdd}/>
            </View>
        </AnimatedModal>
    )
}

