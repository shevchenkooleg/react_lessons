import React, {ChangeEvent, useState} from 'react';

type EtitableSpanPropsType = {
    oldTitle: string
    callBack: (title:string) => void
}

export const EditableSpan = (props: EtitableSpanPropsType) => {
    let [edit, setEdit] = useState(false)
    let [newTitle, setNewTile] = useState(props.oldTitle)

    const onDoubleClickHandler = () => {

        setEdit(true)
    }

    const onBlurHandler = () => {
        props.callBack(newTitle)
        setEdit(false)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTile(e.currentTarget.value)
    }

    return (
        edit
            ? <input onBlur={onBlurHandler} onChange={onChangeHandler} autoFocus value={newTitle}/>
            : <span onDoubleClick={onDoubleClickHandler}>{props.oldTitle}</span>
    );
};