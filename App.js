import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput, Button, Linking} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNo: 'PHONE NUMBER',
      message: 'Olá gostaria de solicitar um atendimento',
    };
  }
  openWhatsApp = () => {
    let msg = this.state.message;
    let mobile = this.state.mobileNo;
    if (mobile) {
      if (msg) {
        let url =
          'whatsapp://send?text=' +
          this.state.message +
          '&phone=5521' +
          this.state.mobileNo;
        Linking.openURL(url)
          .then(data => {
            console.log('WhatsApp Opened successfully ' + data);
          })
          .catch(() => {
            alert('Make sure WhatsApp installed on your device');
          });
      } else {
        alert('Please enter message to send');
      }
    } else {
      alert('Please enter mobile no');
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center', fontSize: 20, paddingVertical: 30}}>
          ERIC BAHIA EMPRÉSTIMO CONSIGNADO OLÁ! SEJA VEM VINDO (A). NESSE
          MOMENTO VOCE ESTARÁ SENDO ASSESSORADO E ORIENTADO POR UM CONSULTOR
          FINANCEIRO COM 20 ANOS DE EXPERIENCIA NO CONSIGNADO. CONFIABILIADE,
          SEGURANÇA E SIGILO FORMAM O PILAR DE MINHA ASSESSORIA. ATENDIMENTO
          EXCLUSIVO AOS; APOSENTADOS E PENSIONISTAS DO INSS SERVIDOR PÚBLICO EM
          GERAL PEÇA AGORA SUA COTAÇAO TEL/ZAP 21-997532130 EMAIL.
          ericbahia@gmail.com Bancos parceiros Banco Pan – BMG – Itaú Consignado
          – Daycoval – Olé – Bradesco financeira – Banrisul
        </Text>

        <View style={{marginTop: 20}}>
          <Button onPress={this.openWhatsApp} title="Open WhatsApp message" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#ffffff',
  },
  input: {
    width: 255,
    height: 44,
    padding: 10,
    margin: 10,
    backgroundColor: '#FFF',
    borderColor: '#000',
    borderRadius: 0.5,
    borderWidth: 0.5,
  },
});
