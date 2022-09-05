import {AppRegistry} from 'react-native';
import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
const DATA = [
 {
 id: '1',
 title: 'SOL',
 text:'Es una estrella del tipo espectral G2, que se encuentra en el centro del Sistema Solar. Por sí sola representa el 98,6 % de la masa del Sistema Solar. La distancia media de la Tierra al sol es de 149.600.000 kilómetros y su luz recorre esta distancia en 8 minutos 19 segundos.',
 src:require('./src/imgs/1.jpg'),
 },
 {
 id: '2',
 title: 'ALFA CENTAURI',
 text:'Alfa Centauri, también conocido como Rigil Kent, es el sistema estelar más cercano a la tierra, considerado desde la antigüedad como una sola estrella y con gran importancia mitológica, la más brillante de la constelación de Centauro. Se trata de un sistema trinário, formado por tres estrellas, Alfa Centauri A, Alfa Centauri B, y Próxima Centauri.',
 src:require('./src/imgs/2.jpg'),
 },
 {
 id: '3',
 title: 'ESTRELLA DE BARNARD',
 text:'Se encuentra en la constelación de Ofiuco y es demasiado tenue para ser observada sin telescopio. Alrededor de ella orbitan varios planetas gaseosos.',
 src:require('./src/imgs/3.jpg'),
 },
{
 id: '4',
 title: 'WOLF 359',
 text:'Es la tercera estrella más cercana, después del sistema estelar Alfa Centauri y la estrella de Barnard, a parte el sol. Se encuentra en la constelación de Leo y es totalmente invisible al ojo humano sin ayuda de la óptica. ',
 src:require('./src/imgs/4.jpg'),
 },
 {
 id: '5',
 title: 'LALANDE 21185',
 text:'Es la quinta estrella más cercana a la Tierra, no es visible a simple vista, aunque sí con cualquier telescopio pequeño. Se la localiza en el rincón surestes de la constelación de la Osa Mayor.',
 src:require('./src/imgs/5.jpg'),
 },
 {
 id: '6',
 title: 'SIRIO',
 text:'Es el nombre propio de la estrella Alfa Canis Maioris, la más brillante de todo el cielo nocturno visto desde la Tierra, situada en la constelación del hemisferio de celeste sur Canis Mior.',
 src:require('./src/imgs/6.jpg'),
 },
 {
    id: '7',
    title: 'LUYTEN 726-8',
    text:'Es el séptimo sistema solar más cercano, situado a 8,73 años luz de distancia. Se trata de un sistema binario, compuesto por Luyten 726-8 A, estrella del tipo fulgurante, también llamada BL Ceti y Luyten 726-B, también una estrella fulgurante, así mismo llamada UV Ceti.',
    src:require('./src/imgs/7.jpg'),
    },
    {
    id: '8',
    title: 'ROSS 154',
    text:'Es actualmente la octava estrella más cercana a una distancia de 9.68 años luz. No es visible a simple vista. Se encuentra en la constelación de Sagitario. Es una estrella del tipo enana roja y su masa no supera el 17% de la masa de nuestro sol.',
    src:require('./src/imgs/8.jpg'),
    },
    {
        id: '9',
        title: 'ROSS 248',
        text:'Es la novena estrella más cercana. Se encuentra en la Constelación de Andrómeda. No es observable a simple vista. Se encuentra a 10,30 años luz, pero dentro de 37.100 años estará a 3,03 años luz de la Tierra, siendo la estrella más próxima.',
        src:require('./src/imgs/9.jpg'),
        },
        {
        id: '10',
        title: 'EPSILON ERIDANI',
        text:'Es la decima y última de nuestra lista de estrellas más cercanas. Se encuentra en la constelación de Eridanus y está a unos 10,5 años luz de la Tierra. Es la tercera más próxima visible a simple vista.',
        src:require('./src/imgs/10.jpg'),
        },
        {
            id: '11',
            title: 'El planeta Mercurio',
            text:'Mercurio fue nombrado de esta manera en honor a Hermes, el mensajero de los dioses griegos del Olimpo. Más tarde los romanos lo bautizaron, tal y como ocurre con el resto de los planetas, con el equivalente en su mitología para los dioses griegos, en este caso Mercurio. Y con ese nombre ha llegado hasta nuestros días.',
            src:require('./src/imgs/11.jpg'),
            },
            {
                id: '12',
                title: 'El planeta Venus',
                text:'Solo tras el Sol y la Luna, Venus es el objeto más brillante que se puede ver en el firmamento desde la Tierra. Esto propició, ya desde la antigüedad, que por su brillo y belleza los romanos asociaran el planeta con la diosa de la belleza y el amor, Venus, de la cual recibe su nombre.',
                src:require('./src/imgs/12.jpg'),
                },
                {
                    id: '13',
                    title: 'El planeta Marte',
                    text:'El planeta Marte recibe su nombre en honor a Ares, el dios griego de la guerra. Más tarde los romanos lo bautizaron, tal y como ocurre con el resto de los planetas, con el equivalente en su mitología para los dioses griegos, en este caso Marte.',
                    src:require('./src/imgs/13.jpg'),
                    },
                    {
                        id: '14',
                        title: 'El planeta Júpiter',
                        text:'Como no podía ser de otra manera, Júpiter, con más del doble de la masa que el resto de planetas juntos, es el planeta más grande del sistema solar por lo que recibe su nombre del dios entre los dioses del Olimpo, Zeus; Júpiter en la mitología romana.',
                        src:require('./src/imgs/14.jpg'),
                        },
                        {
                            id: '15',
                            title: 'El planeta Saturno',
                            text:'Saturno es otro de los planetas más grandes del sistema solar, por lo que al igual que Júpiter, recibe su nombre de uno de los dioses más importantes de la mitología para griegos y romanos, quienes respectivamente se referían a él como Cronos y Saturno, y en sendas mitologías fueron padres de Zeus y Júpiter. Cronos y Saturno eran, de hecho, los dioses del tiempo y la agricultura.',
                            src:require('./src/imgs/15.jpg'),
                            },

 ];
 const Item = ({ title, img, text }) => (
 <View style={styles.item}>
 <Text style={styles.title}>{title}</Text>
 <Text style={styles.text}>{text}</Text>
 <Image style={styles.img} source={img}/>
 </View>
 );
 
 const App = () => {
 const renderItem = ({ item }) => (
 <Item title={item.title} img={item.src} text={item.text}/>
 );
 
 return (
 <SafeAreaView style={styles.container}>
 <FlatList
 data={DATA}
 renderItem={renderItem}
 keyExtractor={item => item.id}
 />
 </SafeAreaView>
 );
 }
 
 const styles = StyleSheet.create({
 container: {
 flex: 1,
 marginTop: StatusBar.currentHeight || 0,
 },
 item: {
 backgroundColor: '#f9c2ff',
 padding: 20,
 marginVertical: 8,
 marginHorizontal: 16,
 alignItems: 'center'
 },
 title: {
 fontSize: 25,
 },
 img:{
    width:200,
    height:125,
    borderWidth:2,
    borderColor:'#d35647',
    resizeMode: 'contain',
    margin:8
 }
 });
AppRegistry.registerComponent("cars23", () => App);
