import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions, Platform, ScrollView, Alert} from "react-native";
import {launchCamera, launchImageLibrary} from "react-native-image-picker";

export default class AddImage extends React.Component {
  state = {
    photo: {},
    comment: '',
  }

  pickImage = () => {
    launchImageLibrary({
      title: 'Escolha a imagem',
      mediaType: 'photo',
      includeBase64: true,
      maxHeight: 600,
      maxHeight: 800
    }, res => {
      if (!res.didCancel) {
        this.setState({photo: {uri: res.assets[0].uri, base64: res.assets[0].base64}});
      }
    });
  }

  takeImage = () => {
    launchCamera({
      title: 'Escolha a imagem',
      mediaType: 'photo',
      includeBase64: true,
      maxHeight: 600,
      maxHeight: 800
    }, (res) => {
      if (!res.didCancel) {
        this.setState({photo: {uri: res.assets[0].uri, base64: res.assets[0].base64}});
      }
    });
  }

  save = async () => {
    Alert.alert("Imagem adicionada", this.state.comment);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Compartilhe uma imagem</Text>

          <View style={styles.imageContainer}>
            <Image source={{uri: this.state.photo.uri}} style={styles.image}/>
          </View>

          <View style={styles.imgButtons}>
            <TouchableOpacity style={styles.button} onPress={this.pickImage}>
              <Text style={styles.buttonText}>Escolha a foto</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={this.takeImage}>
              <Text style={styles.buttonText}>Tire uma foto</Text>
            </TouchableOpacity>
          </View>

          <TextInput
            placeholder="Comentário"
            style={styles.input}
            value={this.state.comment}
            onChangeText={comment => this.setState({ comment })}
          />

          <TouchableOpacity style={styles.button} onPress={this.save}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginTop: Platform.OS === 'ios' ? 30 : 10,
    fontWeight: 'bold'
  },
  imageContainer: {
    width: '90%',
    height: Dimensions.get('window').width * 3/4,
    backgroundColor: "#eee",
    marginTop: 10
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').width * 3/4,
    resizeMode: 'center'
  },
  imgButtons:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%'
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4'
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  },
  input: {
    marginTop: 20,
    width: '90%'
  }
});