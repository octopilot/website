import type { Component } from 'solid-js';

const Step3SigningGovernance: Component = () => {
    return (
        <section id="step3-signing-governance" class="py-24 bg-octo-dark border-b border-octo-border">
            <div class="max-w-[1200px] mx-auto px-8">
                <div class="flex items-start space-x-8 mb-12">
                    <div class="flex-shrink-0">
                        <div class="w-20 h-20 bg-gradient-to-br from-octo-accent to-blue-600 rounded-xl flex items-center justify-center">
                            <span class="text-3xl font-bold text-white">3</span>
                        </div>
                    </div>
                    <div class="flex-1">
                        <h2 class="text-3xl font-bold text-white mb-4">Step 3: Octopilot signing and governance checks</h2>
                        <p class="text-lg text-gray-400 mb-8">
                            Before signing the repository's GPG key, Octopilot performs comprehensive policy checks to ensure compliance with organizational security requirements.
                        </p>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-8 mb-8">
                    <div class="bg-octo-gray/30 border border-octo-border rounded-xl p-8">
                        <h3 class="text-xl font-bold text-white mb-6 flex items-center">
                            <i class="fa-solid fa-clipboard-check text-octo-accent mr-3"></i>
                            Pre-signing governance checks
                        </h3>
                        <div class="space-y-4">
                            <div class="bg-octo-darker border border-octo-border rounded-lg p-4">
                                <div class="flex items-start space-x-3">
                                    <i class="fa-solid fa-shield-halved text-octo-accent text-lg mt-1"></i>
                                    <div>
                                        <h4 class="text-white font-bold mb-1">Policy compliance verification</h4>
                                        <p class="text-gray-400 text-sm">Validates key meets organizational encryption standards and rotation requirements</p>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-octo-darker border border-octo-border rounded-lg p-4">
                                <div class="flex items-start space-x-3">
                                    <i class="fa-solid fa-ban text-octo-accent text-lg mt-1"></i>
                                    <div>
                                        <h4 class="text-white font-bold mb-1">Key reuse prevention</h4>
                                        <p class="text-gray-400 text-sm">Ensures key fingerprint is not already assigned to another repository</p>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-octo-darker border border-octo-border rounded-lg p-4">
                                <div class="flex items-start space-x-3">
                                    <i class="fa-solid fa-building text-octo-accent text-lg mt-1"></i>
                                    <div>
                                        <h4 class="text-white font-bold mb-1">Repository authorization</h4>
                                        <p class="text-gray-400 text-sm">Confirms repository is authorized for Octopilot key management</p>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-octo-darker border border-octo-border rounded-lg p-4">
                                <div class="flex items-start space-x-3">
                                    <i class="fa-solid fa-clock text-octo-accent text-lg mt-1"></i>
                                    <div>
                                        <h4 class="text-white font-bold mb-1">Rotation schedule validation</h4>
                                        <p class="text-gray-400 text-sm">Verifies rotation interval complies with security policy</p>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-octo-darker border border-octo-border rounded-lg p-4">
                                <div class="flex items-start space-x-3">
                                    <i class="fa-solid fa-certificate text-octo-accent text-lg mt-1"></i>
                                    <div>
                                        <h4 class="text-white font-bold mb-1">Algorithm compliance</h4>
                                        <p class="text-gray-400 text-sm">Checks key algorithm and strength meet minimum requirements</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-octo-gray/30 border border-octo-border rounded-xl p-8">
                        <h3 class="text-xl font-bold text-white mb-6 flex items-center">
                            <i class="fa-solid fa-pen-nib text-purple-400 mr-3"></i>
                            Cryptographic signing process
                        </h3>
                        <div class="space-y-6">
                            <div class="flex items-start space-x-4">
                                <div class="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <i class="fa-solid fa-1 text-purple-400"></i>
                                </div>
                                <div>
                                    <h4 class="text-white font-bold mb-2">Policy checks pass</h4>
                                    <p class="text-gray-400 text-sm">All governance requirements validated successfully</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4">
                                <div class="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <i class="fa-solid fa-2 text-purple-400"></i>
                                </div>
                                <div>
                                    <h4 class="text-white font-bold mb-2">Octopilot authority signature</h4>
                                    <p class="text-gray-400 text-sm">Repository's public key signed with Octopilot's master signing key</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4">
                                <div class="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <i class="fa-solid fa-3 text-purple-400"></i>
                                </div>
                                <div>
                                    <h4 class="text-white font-bold mb-2">Metadata embedding</h4>
                                    <p class="text-gray-400 text-sm">Repository identifier, policy version, and expiration embedded in signature</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4">
                                <div class="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <i class="fa-solid fa-4 text-purple-400"></i>
                                </div>
                                <div>
                                    <h4 class="text-white font-bold mb-2">Audit log entry</h4>
                                    <p class="text-gray-400 text-sm">Immutable record created with key fingerprint, timestamp, and policy snapshot</p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-6 bg-purple-500/5 border border-purple-500/20 rounded-lg p-4">
                            <h4 class="text-white font-bold mb-2 text-sm flex items-center">
                                <i class="fa-solid fa-certificate text-purple-400 mr-2"></i>
                                Signature verification
                            </h4>
                            <p class="text-gray-400 text-xs">The controller can cryptographically verify the signature to confirm key authenticity and policy compliance without contacting Octopilot.</p>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-6">
                    <div class="bg-blue-500/5 border border-blue-500/20 rounded-lg p-6">
                        <div class="flex items-center space-x-3 mb-3">
                            <i class="fa-solid fa-lock text-blue-400 text-xl"></i>
                            <h4 class="text-white font-bold">Tamper-proof</h4>
                        </div>
                        <p class="text-gray-400 text-sm">Signature cannot be forged or modified without detection</p>
                    </div>
                    <div class="bg-green-500/5 border border-green-500/20 rounded-lg p-6">
                        <div class="flex items-center space-x-3 mb-3">
                            <i class="fa-solid fa-check-double text-green-400 text-xl"></i>
                            <h4 class="text-white font-bold">Verifiable</h4>
                        </div>
                        <p class="text-gray-400 text-sm">Anyone can verify signature authenticity using Octopilot's public key</p>
                    </div>
                    <div class="bg-purple-500/5 border border-purple-500/20 rounded-lg p-6">
                        <div class="flex items-center space-x-3 mb-3">
                            <i class="fa-solid fa-database text-purple-400 text-xl"></i>
                            <h4 class="text-white font-bold">Auditable</h4>
                        </div>
                        <p class="text-gray-400 text-sm">Complete audit trail of all signing operations maintained</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Step3SigningGovernance;
