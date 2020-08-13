import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../PageHeader';
import TeacherItem, { Teacher } from '../TeacherItem';

import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);

                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
                    return teacher.id;
                });

                setFavorites(favoritedTeachersIds);
            }
        });
    }

    useFocusEffect(() => {
        React.useCallback(() => {
            loadFavorites();
        }, []);
    });

    return (
        <View style={styles.container}>
            <PageHeader title="Meus Proffys Favoritos" />

            <ScrollView style={styles.teacherList} contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16
            }}>
                {
                    favorites.map((teacher: Teacher) => {
                        return (
                            <TeacherItem key={teacher.id} teacher={teacher} favorited={true} />
                        );
                    })
                }
            </ScrollView>
        </View>
    );
}

export default Favorites;