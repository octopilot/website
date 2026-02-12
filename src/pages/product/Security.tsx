import type { Component } from 'solid-js';

import SecurityHero from '../../components/product/security/SecurityHero';
import EncryptionStandards from '../../components/product/security/EncryptionStandards';
import AuditLogging from '../../components/product/security/AuditLogging';
import KeyRotation from '../../components/product/security/KeyRotation';
import AccessControl from '../../components/product/security/AccessControl';

const Security: Component = () => {
    return (
        <>
            <SecurityHero />
            <EncryptionStandards />
            <AuditLogging />
            <KeyRotation />
            <AccessControl />
        </>
    );
};

export default Security;
