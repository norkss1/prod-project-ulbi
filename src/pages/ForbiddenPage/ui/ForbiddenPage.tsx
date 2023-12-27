import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const ForbiddenPage = () => {
    const { t } = useTranslation('forbidden');

    return (
        <Page>
            {t('forbidden_page')}
        </Page>
    );
};

export default ForbiddenPage;
