import { useRouter } from "expo-router"
import { Button, Text, View } from "react-native";

export default function Screen1() {
    const router = useRouter();
    const users = [
        {
            id: 1, name: "Luis", age: 34
        },
        {
            id: 2, name: "Sebastian", age: 50
        },
        {
            id: 3, name: "Roberto", age: 44
        }
    ]
    return (
        <View>
            <Text>Lista de Usuarios</Text>
            {users.map((user) => (
                <View key={user.id}>
                    <Text>Nombre: {user.name}</Text>
                    <Text>Edad: {user.age}</Text>
                    <Button
                        title={`Ver más detalles de: ${user.name}`}
                        onPress={() => router.push(`./screen2/${user.id}?name=${user.name}&age=${user.age}`)}/>
                </View>
            ))}
        </View>
    )
}