import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('a123_page')}
            {t('about_page')}
        </div>
    );
};

export default AboutPage;
