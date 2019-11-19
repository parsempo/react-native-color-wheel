declare module 'react-native-color-wheel' {
    import { PureComponent } from 'react'
    import { StyleProp, ViewStyle } from 'react-native'

    export type ColorWheelProps = {
        initialColor?: string;
        onColorChange?: (color: string) => void;
        onColorChangeComplete?: (color: string) => void;
        thumbSize?: number;
        thumbStyle?: StyleProp<ViewStyle>;
        style?: StyleProp<ViewStyle>;
    }

    export class ColorWheel extends PureComponent<ColorWheelProps> {}
}