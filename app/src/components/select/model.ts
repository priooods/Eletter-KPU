import { StyleProp, ViewStyle } from "react-native"

export interface ModelSelect {
    label: string,
    placeholder?: string,
    options: Array<any>,
    isRequired?: boolean,
    optionKey: string,
    optionLabel: any,
    optionSelect: string,
    onSelected: (value: any) => void
    styleContainer?: StyleProp<ViewStyle>,
    styleInput?: StyleProp<ViewStyle>,
}