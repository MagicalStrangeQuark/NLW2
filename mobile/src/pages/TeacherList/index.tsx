import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import PageHeader from '../PageHeader';
import TeacherItem, { Teacher } from '../TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';

function TeacherList() {
    const [teachers, setTeachers] = useState([]);
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    const [week_day, setWeekDay] = useState('');
    const [subject, setSubject] = useState('');
    const [time, setTime] = useState('');

    function handleToogleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    async function handleFiltersSubmit() {
        const response = await api.get('/classes', {
            params: {
                week_day: week_day,
                subject: subject,
                time: time
            }
        });

        setTeachers(response.data);
    }

    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis" headerRight={(
                <BorderlessButton onPress={handleToogleFiltersVisible}>
                    <Feather name="filter" size={20} color="#FFF"></Feather>
                </BorderlessButton>)}>
                {isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor="#C1BCCC"
                            placeholder="Qual a matéria?"
                            value={subject}
                            onChangeText={text => setSubject(text)} />
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da Semana</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholderTextColor="#C1BCCC"
                                    placeholder="Qual o dia?"
                                    value={week_day}
                                    onChangeText={text => setWeekDay(text)} />
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput style={styles.input}
                                    placeholderTextColor="#C1BCCC"
                                    placeholder="Qual horário?"
                                    value={time}
                                    onChangeText={text => setTime(text)} />
                            </View>
                        </View>
                        <RectButton onPress={handleFiltersSubmit} style={styles.submitbutton}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>

            <ScrollView style={styles.teacherList} contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16
            }}>

                {
                    teachers.map((teacher: Teacher) => <TeacherItem key={teacher.id} teacher={teacher} />)
                }
            </ScrollView>
        </View>
    );
}

export default TeacherList;
