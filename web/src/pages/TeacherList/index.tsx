import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import { Materias, Select, WeekDay } from '../../components/Select';

import './styles.css';

function TeacherList() {
    return (
        <div id="pager-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <Select name="subject" label="Matéria" options={Materias} />
                    <Select name="week_day" label="Dia da Semana" options={WeekDay} />
                    <Input type="time" name="time" label="Hora" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    );
}

export default TeacherList;