import React, { useState } from 'react';
import { View, Text, Image, Linking } from 'react-native';

import AsynctStorage from '@react-native-community/async-storage';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string,
    subject: string;
    user_id: number;
    whatsapp: string;
}

interface TeacherItemProps {
    teacher: Teacher,
    favorited: boolean
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
    const [isFavorited, setIsFavorited] = useState(favorited);

    function handleLinkToWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
    }

    async function handleToogleFavorite() {
        const favorites = await AsynctStorage.getItem('favorites');

        let favoritesArray: Teacher[] = [];

        if (favorites) {
            const favoritesArray = JSON.parse(favorites);
        }

        if (isFavorited) {
            const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
                return teacherItem.id === teacher.id;
            });

            favoritesArray.splice(favoriteIndex, 1);

            setIsFavorited(false);
        } else {
            favoritesArray.push(teacher);

            setIsFavorited(true);
        }

        await AsynctStorage.setItem('favorites', JSON.stringify(favoritesArray));
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{ uri: teacher.avatar }} />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                {teacher.bio}
            </Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora: {'   '}
                    <Text style={styles.priceValue}>{teacher.cost}</Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton onPress={handleToogleFavorite} style={[styles.favoriteButton, isFavorited ? styles.favorited : []]}>
                        {isFavorited ? <Image source={unFavoriteIcon} /> : <Image source={heartOutlineIcon} />}
                    </RectButton>
                    <RectButton onPress={handleLinkToWhatsapp} style={styles.contactButton}>
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