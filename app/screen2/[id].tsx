import { useLocalSearchParams, useRouter } from "expo-router"
import { Button, Text, View } from "react-native";

export default function Screen2() {
    const router = useRouter();
    const { id, name, age } = useLocalSearchParams();
    return (
        <View>
            <Text>Los datos del usuario son:</Text>
            <Text>id: {id ? id : `No recibí nada` }</Text>
            <Text>Nombre: {name ? name : `No recibí nada` }</Text>
            <Text>Edad: {age ? age : `No recibí nada` }</Text>
            <Button
                title={`Lista de usuarios`}
                onPress={()=>router.back()}/>
        </View>
    )
}