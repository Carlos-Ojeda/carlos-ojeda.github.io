import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

function SaluteAnimation() {
    const [currentText, setCurrentText] = useState('');
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const { t } = useTranslation();

    // Memoize the greetings array to prevent unnecessary re-renders
    const greetings = useMemo(() => {
            const result = [
                t('landing.salute.greeting1'),
                t('landing.salute.greeting2'),
                t('landing.salute.greeting3'),
                t('landing.salute.greeting4')
            ];
            return result.filter(greeting => greeting && !greeting.startsWith('landing.salute.greeting'));
    }, [t]);

    const sleep = useCallback((ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }, []);

    useEffect(() => {
        let isMounted = true;

        const animation = async () => {
            try {
                while (isMounted) {
                    await sleep(1000);
                    if (!isMounted) break;

                    let currentTextLocal = '';
                    const currentMessage = greetings[currentMessageIndex];
                    
                    console.log('Current message:', currentMessage, 'Index:', currentMessageIndex); // Debug log
                    
                    if (!currentMessage) {
                        setCurrentMessageIndex((prev) => (prev + 1) % greetings.length);
                        continue;
                    }

                    for (let j = 0; j < currentMessage.length; j++) {
                        if (!isMounted) break;
                        currentTextLocal += currentMessage[j];
                        setCurrentText(currentTextLocal);
                        await sleep(80);
                    }
                    
                    if (!isMounted) break;
                    await sleep(2000);
                    
                    if (!isMounted) break;
                    setCurrentText("");
                    await sleep(500);
                    
                    if (!isMounted) break;
                    setCurrentMessageIndex((prev) => (prev + 1) % greetings.length);
                }
            } catch (error) {
                console.error('Animation error:', error);
            }
        };

        animation();

        return () => {
            isMounted = false;
        };
    }, [currentMessageIndex, sleep, greetings]);

    return (
        <h1 className="salute-title">
            {currentText}<span className="flickering-cursor">|</span>
        </h1>
    );
}

export default SaluteAnimation;