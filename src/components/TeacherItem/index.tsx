import React from 'react';
import whatsappIcon from './../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (<article className="teacher-item">
        <header>
            <img src="https://avatars2.githubusercontent.com/u/49111142?s=460&u=1d9e3fb6724c7141793c67760847255de73cdb4a&v=4" alt="Wesley Flôres" />
            <div>
                <strong>Wesley Flôres</strong>
                <span>Química</span>
            </div>
        </header>

        <p>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.
        <br />
            <br />
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
        corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
        officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
    </p>

        <footer>
            <p>
                Preço/Hora
            <strong>R$ 70,00</strong>
            </p>
            <button>
                <img src={whatsappIcon} alt="Whatsapp" />
            Entrar em contato
        </button>
        </footer>
    </article>);
}

export default TeacherItem;