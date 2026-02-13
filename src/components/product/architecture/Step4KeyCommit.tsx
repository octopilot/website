import type { Component } from 'solid-js';

const Step4KeyCommit: Component = () => {
    return (
        <section id="step4-key-commit" class="py-24 border-b border-octo-border">
            <div class="max-w-[1200px] mx-auto px-8">
                <div class="flex items-start space-x-8 mb-12">
                    <div class="flex-shrink-0">
                        <div class="w-20 h-20 bg-gradient-to-br from-octo-accent to-blue-600 rounded-xl flex items-center justify-center">
                            <span class="text-3xl font-bold text-white">4</span>
                        </div>
                    </div>
                    <div class="flex-1">
                        <h2 class="text-3xl font-bold text-white mb-4">Step 4: Signed public key committed back to repository</h2>
                        <p class="text-lg text-gray-400 mb-8">
                            Octopilot creates a pull request to commit the signed GPG public key to the repository, making it available for the controller to use.
                        </p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-octo-gray/30 border border-octo-border rounded-xl p-8">
                        <h3 class="text-xl font-bold text-white mb-6 flex items-center">
                            <i class="fa-brands fa-github text-octo-accent mr-3"></i>
                            Pull request workflow
                        </h3>
                        <div class="space-y-6">
                            <div class="flex items-start space-x-4">
                                <div class="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <i class="fa-solid fa-code-branch text-green-400"></i>
                                </div>
                                <div>
                                    <h4 class="text-white font-bold mb-2">Branch creation</h4>
                                    <p class="text-gray-400 text-sm">Octopilot creates a branch: <code class="text-octo-accent font-mono text-xs">octopilot/add-gpg-key</code></p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4">
                                <div class="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <i class="fa-solid fa-file-import text-green-400"></i>
                                </div>
                                <div>
                                    <h4 class="text-white font-bold mb-2">Key file addition</h4>
                                    <p class="text-gray-400 text-sm">Signed public key added to <code class="text-octo-accent font-mono text-xs">config/repo.gpg.pub</code></p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4">
                                <div class="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <i class="fa-solid fa-code-pull-request text-green-400"></i>
                                </div>
                                <div>
                                    <h4 class="text-white font-bold mb-2">PR opened</h4>
                                    <p class="text-gray-400 text-sm">Automated pull request with key details and verification instructions</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4">
                                <div class="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <i class="fa-solid fa-shield-halved text-green-400"></i>
                                </div>
                                <div>
                                    <h4 class="text-white font-bold mb-2">Review & merge</h4>
                                    <p class="text-gray-400 text-sm">Team reviews key fingerprint and merges PR to activate</p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-6 bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
                            <h4 class="text-white font-bold mb-2 text-sm flex items-center">
                                <i class="fa-solid fa-info-circle text-blue-400 mr-2"></i>
                                Human review checkpoint
                            </h4>
                            <p class="text-gray-400 text-xs">The PR provides a human review checkpoint before the key becomes active. Teams can verify the key fingerprint and policy compliance before merging.</p>
                        </div>
                    </div>
                    <div class="space-y-6">
                        <div class="bg-octo-gray/30 border border-octo-border rounded-xl p-6">
                            <h4 class="text-white font-bold mb-4 flex items-center">
                                <i class="fa-solid fa-key text-purple-400 mr-3"></i>
                                Signed public key file
                            </h4>
                            <div class="bg-octo-darker border border-octo-border rounded-lg p-4 font-mono text-xs text-gray-400 overflow-x-auto">
                                <pre>{`-----BEGIN PGP PUBLIC KEY BLOCK-----

mQINBGXK7HsBEAC9fJ3kL2mN4pQ7...
[Repository-scoped GPG public key]
...8hK2jM9nP3qR5sT7vW1xY2zA==
=Ab3C
-----END PGP PUBLIC KEY BLOCK-----

-----BEGIN PGP SIGNATURE-----
[Octopilot authority signature]
Version: GnuPG v2
iQIcBAABCgAGBQJlyu...
[Cryptographic signature proving key authenticity]
...kL9mN3oP4qR6sU8wX2zA==
=Xy9Z
-----END PGP SIGNATURE-----`}</pre>
                            </div>
                            <div class="mt-3 flex items-center space-x-2 text-xs">
                                <i class="fa-solid fa-fingerprint text-octo-accent"></i>
                                <span class="text-gray-400">Fingerprint:</span>
                                <code class="text-octo-accent font-mono">A1B2 C3D4 E5F6 7890 1234 5678 9ABC DEF0</code>
                            </div>
                        </div>
                        <div class="bg-octo-gray/30 border border-octo-border rounded-xl p-6">
                            <h4 class="text-white font-bold mb-4 flex items-center">
                                <i class="fa-solid fa-file-lines text-yellow-400 mr-3"></i>
                                PR description template
                            </h4>
                            <div class="bg-octo-darker border border-octo-border rounded-lg p-4 text-sm text-gray-300 space-y-3">
                                <p><strong class="text-white">🔐 Octopilot GPG Key Addition</strong></p>
                                <p>This PR adds a repository-scoped GPG public key signed by Octopilot.</p>
                                <div class="space-y-1 text-xs">
                                    <p><strong class="text-white">Key Details:</strong></p>
                                    <p>• Fingerprint: <code class="text-octo-accent font-mono">A1B2C3D4...</code></p>
                                    <p>• Algorithm: RSA 4096-bit</p>
                                    <p>• Expiration: 90 days</p>
                                    <p>• Policy: Compliant</p>
                                </div>
                                <p class="text-xs"><strong class="text-white">Verification:</strong> Run <code class="text-octo-accent font-mono">gpg --verify config/repo.gpg.pub</code></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-8 bg-green-500/5 border border-green-500/20 rounded-lg p-6">
                    <div class="flex items-start space-x-4">
                        <i class="fa-solid fa-code-merge text-green-400 text-xl mt-1"></i>
                        <div>
                            <h4 class="text-white font-bold mb-2">After merge: Key activation</h4>
                            <p class="text-gray-400 text-sm leading-relaxed">
                                Once the PR is merged, the signed public key is available in the repository's main branch. The controller can now read this key and use it to decrypt secrets. No manual key distribution or configuration required — the key is declaratively managed through Git.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Step4KeyCommit;
