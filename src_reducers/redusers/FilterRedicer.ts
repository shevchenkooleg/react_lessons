import {FilterValuesType} from "../App";

export const FilterReducer = (state: FilterValuesType, action: changeFilterACType) => {
    switch (action.title) {
        case 'CHANGE-FILTER': {
            return action.payload.value
        }
        default:
            return state
    }
}

export type changeFilterACType = ReturnType<typeof changeFilterAC>
export const changeFilterAC = (value: FilterValuesType) => {
    return {
        title: 'CHANGE-FILTER',
        payload:{value}
    } as const
}