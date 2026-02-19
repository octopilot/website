import type { Component } from 'solid-js';
import PageMeta from '../../components/seo/PageMeta';
import SecurityHero from '../../components/product/security/SecurityHero';
import EncryptionStandards from '../../components/product/security/EncryptionStandards';
import AuditLogging from '../../components/product/security/AuditLogging';
import KeyRotation from '../../components/product/security/KeyRotation';
import AccessControl from '../../components/product/security/AccessControl';

const Security: Component = () => {
    return (
        <>
            <PageMeta
                title="Security Model"
                description="Octopilot's layered security model: repository-scoped encryption standards, immutable audit logging, automated key rotation, and fine-grained access control — all without a central vault."
                path="/product/security"
            />
            <SecurityHero />
            <EncryptionStandards />
            <AuditLogging />
            <KeyRotation />
            <AccessControl />
        </>
    );
};

export default Security;
