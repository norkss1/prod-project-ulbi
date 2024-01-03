import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AdminPanelPage = () => {
    const { t } = useTranslation('admin_panel');

    return <Page data-testid="AdminPanelPage">{t('admin_panel_page')}</Page>;
};

export default AdminPanelPage;
