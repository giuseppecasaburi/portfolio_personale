import { useState, useEffect, useRef } from 'react';

function TextTyping() {
    const text = "Full-Stack Web Developer.";

    const [displayText, setDisplayText] = useState("");
    const currentCharIndexRef = useRef(0);
    const directionRef = useRef(1); // +1 = typing, -1 = deleting
    const timeoutRef = useRef(null);

    useEffect(() => {
        const typeWriter = () => {
            const currentText = text;
            const idx = currentCharIndexRef.current;
            const dir = directionRef.current;

            // Fase di scrittura
            if (dir === 1) {
                if (idx < currentText.length) {
                    // Aggiungo un carattere
                    setDisplayText(currentText.slice(0, idx + 1));
                    currentCharIndexRef.current++;
                    // Next timeout per continuare a scrivere
                    timeoutRef.current = setTimeout(typeWriter, 50 + Math.random() * 100);
                } else {
                    // Ho finito di scrivere: scrivo ho finito e ora attendo 2s prima di cancellare
                    directionRef.current = -1;
                    timeoutRef.current = setTimeout(typeWriter, 2000);
                }

                // Fase di cancellazione
            } else {
                if (idx > 0) {
                    // Rimuovo un carattere
                    setDisplayText(currentText.slice(0, idx - 1));
                    currentCharIndexRef.current--;
                    // Next timeout per continuare a cancellare
                    timeoutRef.current = setTimeout(typeWriter, 50 + Math.random() * 100);
                } else {
                    // Ho finito di cancellare: cambio direzione e attendo 0.5s prima di riscrivere
                    directionRef.current = 1;
                    timeoutRef.current = setTimeout(typeWriter, 500);
                }
            }
        };

        // Avvio la macchina “typeWriter”
        typeWriter();

        // Al disassemblaggio, cancello l'eventuale timeout pendente
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []); // eseguo solo al montaggio

    return (
        <div className="flex items-center justify-center font-mono">
            <div className="typing-container">
                <p id="typing-text">
                    {displayText}
                    <span className="cursor">&nbsp;</span>
                </p>
            </div>
        </div>
    );
}

export default TextTyping;