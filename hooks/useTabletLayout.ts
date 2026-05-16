import { TABLET_BREAKPOINT } from "@/constants/layout"
import { useWindowDimensions } from "react-native"

export function useTabletLayout() {
    const { width } = useWindowDimensions()

    const isTablet = width >= TABLET_BREAKPOINT

    return {
        isTablet
    }
}