import React from 'react'
import {
    View, 
    StyleSheet,
    Text,
    TouchableOpacity,
    Modal
} from 'react-native'

export default props => {
    return (
        <Modal onRequestClose={props.onCancel}
            visible={props.isVisible} animationType='slide'
            transparent={true}>
            <View style={styles.frame}>
                <View style={styles.container}>
                <Text style={styles.title}>Selecione o nível de sinceridade</Text>
                <TouchableOpacity
                    style={[styles.button, styles.bgEasy]}
                    onPress={() => props.onLevelSelected(0.1)}>
                    <Text style={styles.buttonLabel}>Muita sinceridade</Text>
                </TouchableOpacity>    
                <TouchableOpacity
                    style={[styles.button, styles.bgNormal]}
                    onPress={() => props.onLevelSelected(0.2)}>
                    <Text style={styles.buttonLabel}>Um pouco de sinceridade</Text>
                 </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.bgHard]}
                    onPress={() => props.onLevelSelected(0.3)}>
                    <Text style={styles.buttonLabel}>Nada de sinceridade</Text>
                 </TouchableOpacity>
               </View>  
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    container: {
        backgroundColor: '#ff4075',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    button: {
        marginTop: 10,
        padding: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold',
    },
    bgEasy: {
        backgroundColor: '#00ff00',
    },
    bgNormal: {
        backgroundColor: '#ffa500',
    },
    bgHard: {
        backgroundColor: '#ff0000',
    },
})