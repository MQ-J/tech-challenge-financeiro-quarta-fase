import { useAccount } from "@/contexts/AccountContext";
import { Animated, StyleSheet, Text } from "react-native";

interface GreetingProps {
    headerOpacity: Animated.Value
    headerTranslateY: Animated.Value
}

export function Greeting({ headerOpacity, headerTranslateY }: GreetingProps) {
    const { account } = useAccount()

    const firstName = account?.userName.split(' ')[0] ?? ''

    return (
        <Animated.View
            style={[
                styles.header,
                { opacity: headerOpacity, transform: [{ translateY: headerTranslateY }] },
            ]}
        >
            <Text style={styles.greeting}>Olá, {firstName}!</Text>
            <Text style={styles.date}>{getGreeting()}</Text>
        </Animated.View>
    )
}

function getGreeting(): string {
    const date = new Date()
    const dayOfWeek = date.toLocaleDateString('pt-BR', { weekday: 'long' })
    const formattedDate = date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    })
    const capitalized = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)
    return `${capitalized}, ${formattedDate}`
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 24,
    },
    greeting: {
        fontSize: 24,
        fontWeight: '700',
        color: '#fff',
        marginBottom: 4,
    },
    date: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.7)',
    },
})