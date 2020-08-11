import React, { useState } from 'react';

import PageHeader from '../../components/PageHeader';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import { Select, Materias, WeekDay } from '../../components/Select';

import warningIcon from './../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm() {
    const [ScheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...ScheduleItems,
            {
                week_day: 0,
                from: '',
                to: ''
            }
        ]);
    }

    return (
        <div id="pager-teacher-form" className="container">
            <PageHeader title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição" />
            <main>
                <fieldset>
                    <legend>Seus Dados</legend>

                    <Input name="name" label="Nome Completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />
                    <Textarea name="bio" label="Biografia" />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select name="subject" label="Matéria" options={Materias} />
                    <Input name="cost" label="Custo da sua hora por aula" />
                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button" onClick={() => { addNewScheduleItem() }}>
                            + Novo horário
                        </button>
                    </legend>

                    {
                        ScheduleItems.map(scheduleItem => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select name="week_day" label="Dia da semana" options={WeekDay} />
                                    <Input name="from" label="Das" type="time" />
                                    <Input name="to" label="Até" type="time" />
                                </div>
                            );
                        })
                    }
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso Importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar Cadastro
                    </button>
                </footer>
            </main>
        </div>
    );
}

export default TeacherForm;
