import { useAccount } from "@/contexts/AccountContext";
import { useAnimate } from "@/hooks/useAnimate";
import { Animated, StyleSheet, Text } from "react-native";

export function Greeting() {
    const { account } = useAccount()
    const { opacity, translateY } = useAnimate()

    const firstName = account?.userName.split(' ')[0] ?? ''


    return (
        <Animated.View
            style={[
                styles.header,
                { opacity, transform: [{ translateY }] },
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