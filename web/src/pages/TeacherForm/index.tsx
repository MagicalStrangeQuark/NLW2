import React from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';

function TeacherForm() {
    return (
        <div id="#pager-teacher-form" className="container">
            <PageHeader title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição" />
            <main>
                <fieldset>
                    <legend>Seus Dados</legend>

                    <div className="input-block">
                        <label htmlFor="name">Nome Completo</label>
                        <input type="" id="name"></input>
                    </div>

                    <div className="input-block">
                        <label htmlFor="avatar">Avatar</label>
                        <input type="" id="avatar"></input>
                    </div>

                    <div className="input-block">
                        <label htmlFor="whatsapp">Whatsapp</label>
                        <input type="" id="whatsapp"></input>
                    </div>
                </fieldset>
            </main>
        </div>
    );
}

export default TeacherForm;