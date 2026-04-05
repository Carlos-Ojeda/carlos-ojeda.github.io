import React from 'react';
import { Typography } from 'antd';
import { useTranslations } from '../../../hooks/useTranslations';

const { Title, Text } = Typography;

const ContactHeader = () => {
  const { t } = useTranslations();

  return (
    <div className="section-header">
      <Title level={2} className="section-title">
        {t('contact.title')}
      </Title>
      <Text type="secondary" className="section-subtitle">
        {t('contact.subtitle')}
      </Text>
    </div>
  );
};

export default ContactHeader;
