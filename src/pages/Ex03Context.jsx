import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';

export default function Ex03Context() {
    // Consome valor compartilhado sem passar props intermediárias.
    const { tema, alternarTema } = useContext(ThemeContext);

    return (
        <section className="panel">
            <h1>Context API</h1>
            <p>Tema atual: <strong>{tema === 'escuro' ? 'Escuro 🌙' : 'Claro ☀️'}</strong></p>
            <button onClick={alternarTema}>
                Alternar para tema {tema === 'claro' ? 'escuro' : 'claro'}
            </button>
        </section>
    );
}