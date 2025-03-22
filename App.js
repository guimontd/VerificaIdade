import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { styles } from './css/styles';

const Verificador = () => {
  const [idade, setIdade] = useState("");
  const [mensagem, setMensagem] = useState("");

  const verIdade = () => {
    const numIdade = parseInt(idade);
    if (!isNaN(numIdade)) {
      setMensagem(numIdade >= 18 ? "Você é maior de idade." : "Você é menor de idade.");
    } else {
      setMensagem("Por favor, insira uma idade válida.");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/LogoLiyue.png')} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
      />
      <TouchableOpacity style={styles.button} onPress={verIdade}>
        <Text style={styles.buttonText}>Verificar</Text>
      </TouchableOpacity>
      {mensagem !== "" && <Text style={styles.result}>{mensagem}</Text>}
    </View>
  );
};

export default Verificador;