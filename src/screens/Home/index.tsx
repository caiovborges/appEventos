import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../../components/Participant";
import { useState } from "react";

export default function Home(){

    const [participant, setParticipant] = useState<string[]>([])
    const [participantName,setParticipantName] = useState<string>('')

    function handleParticipantAdd(){
        
        if(participant.includes(participantName)){
            Alert.alert("Participante", "Já existe um participante com esse nome a lista.");
        }
        setParticipant(prevState => [...prevState,participantName]);
        setParticipantName('');
    }

    function handleParticipantRemove(name: string){
        Alert.alert('Remover', `Você deseja remover o ${name}`,[
            {
                text: 'Sim',
                onPress: () => setParticipant(prevState => prevState.filter(participant => participant !== name))
            },
            {
                text: 'Não',
                style: "cancel"
            }
        ])
    }

    return(
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do Evento</Text>
            <Text style={styles.evenDate}>Sexta, 4 de Novembro</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do Participante"
                    placeholderTextColor={'#6B6B6B'}
                    onChangeText={setParticipantName}
                    value={participantName}
                />
                <TouchableOpacity style={styles.Button} onPress={handleParticipantAdd}>
                    <Text style={styles.textButton}>+</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={participant}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguem chegou ainda? Adicione participantes a sua lista de presensa!
                    </Text>
                )}
            /> 
            
        </View>
    )
}