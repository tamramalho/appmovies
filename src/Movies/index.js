import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';

import Detalhes from '../Detalhes';

export default function Movies({ data }) {

    const [visibleModal, setVisibleModal] = useState(false);

    return (
        <View>
            <View style={styles.card}>
                <Text style={styles.titulo}>{data.nome}</Text>

                <Image
                    source={{ uri: data.foto }}
                    style={styles.capa}
                />

                <View style={styles.areaButton}>
                    <TouchableOpacity style={styles.button} onPress={ () => setVisibleModal(true) }>
                        <Text style={styles.textButton}>LEIA MAIS</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal transparent={true} animationType='slide' visible={visibleModal}>
                <Detalhes movie={data} voltar={() => setVisibleModal(false) }/>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        margin: 15,
        elevation: 2,
    }, 
    titulo: {
        padding: 15,
        fontSize: 18,
    },
    capa: {
        height: 250,
        zIndex: 2,
    },
    areaButton: {
        alignItems: 'flex-end',
        marginTop: -45,
        zIndex: 9,
    },
    button: {
        width: 100,
        backgroundColor: '#09a6ff',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    textButton: {
        color: '#fff',
        textAlign: 'center',
    }
})