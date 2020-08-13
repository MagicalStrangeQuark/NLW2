import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem() {
    const uri = "https://avatars2.githubusercontent.com/u/49111142?s=460&u=1d9e3fb6724c7141793c67760847255de73cdb4a&v=4";

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{ uri: uri }} />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Wesley Flôres</Text>
                    <Text style={styles.subject}>Química</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                System Analysis and Development Student
            </Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora: {'   '}
                    <Text style={styles.priceValue}></Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unFavoriteIcon} />
                    </RectButton>
                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>
                            Entrar em contato
                        </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;