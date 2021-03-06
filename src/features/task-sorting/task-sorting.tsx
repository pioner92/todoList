import React, {useMemo} from 'react'
import {SegmentedControlContainer} from '../segment-control'
import {setTaskSortingDirection, setTaskSortingField, sortDirections, sortFields} from './models/models'


export const TaskSorting = () => {
    const onChangeField = (index:number) => {
        setTaskSortingField(sortFields[index])
    }
    const onChangeDirection = (index:number) => {
        setTaskSortingDirection(sortDirections[index].value)
    }

    const sortDirectionsIcons = useMemo(()=>{
        return sortDirections.map((e)=>e.title)
    }, [])

    return (
        <>
            <SegmentedControlContainer values={sortFields} onChange={onChangeField}/>
            <SegmentedControlContainer values={sortDirectionsIcons} onChange={onChangeDirection}/>
        </>
    )
}
