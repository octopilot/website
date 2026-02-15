import type { Component } from 'solid-js';

const QuickstartSteps: Component = () => {
    return (
        <section id="quickstart-steps" class="py-16 border-b border-slate-800/50 bg-slate-900/20">
            <div class="max-w-[1200px] mx-auto px-8">
                <div class="flex items-center gap-3 mb-8">
                    <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span class="text-green-400 font-bold text-sm uppercase tracking-wider">Quickstart</span>
                </div>

                <h2 class="text-4xl font-bold text-white mb-12">Get Running in 15 Minutes</h2>

                <div class="space-y-8">
                    <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <div class="flex items-center gap-6 mb-6">
                            <div class="flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full flex-shrink-0">
                                <div class="text-3xl font-bold text-blue-400">1</div>
                            </div>
                            <h3 class="text-2xl font-bold text-white">Install GitHub App</h3>
                        </div>
                        <div>
                            <p class="text-slate-300 mb-4 leading-relaxed">
                                Install secret-controller-manager from the GitHub Marketplace to your organization or personal account. The app will automatically configure webhooks and permissions.
                            </p>
                            <div class="bg-slate-950/50 border border-slate-700 rounded-lg p-4 mb-4">
                                <div class="flex items-center justify-between mb-3">
                                    <span class="text-slate-400 text-sm">Installation URL</span>
                                    <button class="text-blue-400 hover:text-blue-300 text-xs font-medium flex items-center gap-1">
                                        <i class="fa-solid fa-copy"></i>
                                        Copy
                                    </button>
                                </div>
                                <div class="text-green-400 text-sm">https://github.com/apps/secret-controller-manager</div>
                            </div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div class="bg-slate-950/50 border border-slate-700 rounded-lg p-4">
                                    <div class="text-white font-semibold mb-2">Required Permissions</div>
                                    <ul class="space-y-1 text-slate-400 text-sm">
                                        <li class="flex items-center gap-2">
                                            <i class="fa-solid fa-check text-green-400 text-xs"></i>
                                            Repository contents (read/write)
                                        </li>
                                        <li class="flex items-center gap-2">
                                            <i class="fa-solid fa-check text-green-400 text-xs"></i>
                                            Actions (read/write)
                                        </li>
                                        <li class="flex items-center gap-2">
                                            <i class="fa-solid fa-check text-green-400 text-xs"></i>
                                            Secrets (read/write)
                                        </li>
                                    </ul>
                                </div>
                                <div class="bg-slate-950/50 border border-slate-700 rounded-lg p-4">
                                    <div class="text-white font-semibold mb-2">Installation Time</div>
                                    <div class="text-3xl font-bold text-blue-400 mb-1">~2 min</div>
                                    <div class="text-slate-400 text-sm">One-click installation process</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <div class="flex items-center gap-6 mb-6">
                            <div class="flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full flex-shrink-0">
                                <div class="text-3xl font-bold text-purple-400">2</div>
                            </div>
                            <h3 class="text-2xl font-bold text-white">Deploy Kubernetes Controller</h3>
                        </div>
                        <div>
                            <p class="text-slate-300 mb-4 leading-relaxed">
                                Deploy the secret-controller-manager to your Kubernetes cluster using Helm or kubectl. The controller watches for encrypted secrets and decrypts them at runtime.
                            </p>
                            <div class="bg-slate-950 border border-slate-700 rounded-lg p-4 mb-4">
                                <div class="text-slate-500 text-xs mb-2">Helm Installation (Recommended)</div>
                                <pre class="text-green-400 text-sm whitespace-pre-wrap"><code>export APP_ID=YOUR_APP_ID
                                    export INST_ID=YOUR_INSTALLATION_ID

                                    helm repo add octopilot https://charts.octopilot.app
                                    helm repo update
                                    helm install secret-controller octopilot/secret-controller-manager \
                                    --namespace octopilot-system \
                                    --create-namespace \
                                    --set github.appId={'${APP_ID}'} \
                                    --set github.installationId={'${INST_ID}'}</code></pre>
                            </div>
                            <div class="bg-slate-950 border border-slate-700 rounded-lg p-4">
                                <div class="text-slate-500 text-xs mb-2">kubectl Installation (Alternative)</div>
                                <pre class="text-green-400 text-sm whitespace-pre-wrap"><code>kubectl apply -f https://octopilot.app/inst/latest.yaml</code></pre>
                            </div>
                        </div>
                    </div>

                    <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <div class="flex items-center gap-6 mb-6">
                            <div class="flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full flex-shrink-0">
                                <div class="text-3xl font-bold text-cyan-400">3</div>
                            </div>
                            <h3 class="text-2xl font-bold text-white">Generate Repository Keys</h3>
                        </div>
                        <div>
                            <p class="text-slate-300 mb-4 leading-relaxed">
                                Create repo-scoped GPG key pairs for each repository or team. Keys are automatically stored in your configured cloud KMS (AWS, GCP, or Azure).
                            </p>
                            <div class="bg-slate-950 border border-slate-700 rounded-lg p-4 mb-4">
                                <div class="text-slate-500 text-xs mb-2">Generate Keys for Single Repository</div>
                                <pre class="text-green-400 text-sm whitespace-pre-wrap"><code>octopilot keygen --repo your-org/your-repo \
                                    --kms aws \
                                    --key-id arn:aws:kms:us-east-1:123456789:key/abc-123</code></pre>
                            </div>
                            <div class="bg-slate-950 border border-slate-700 rounded-lg p-4 mb-4">
                                <div class="text-slate-500 text-xs mb-2">Generate Keys for Multiple Teams (Batch)</div>
                                <pre class="text-green-400 text-sm whitespace-pre-wrap"><code>octopilot keygen --batch teams.yaml \
                                    --kms aws \
                                    --key-id arn:aws:kms:us-east-1:123456789:key/abc-123</code></pre>
                            </div>
                            <div class="bg-gradient-to-br from-cyan-950/20 to-slate-900/50 border border-cyan-900/30 rounded-lg p-4">
                                <div class="flex items-start gap-3">
                                    <i class="fa-solid fa-info-circle text-cyan-400 mt-1"></i>
                                    <div>
                                        <div class="text-white font-semibold mb-1">Key Isolation Enforced</div>
                                        <p class="text-slate-400 text-sm">Each repository gets its own GPG key pair. Secrets encrypted with repo A's key cannot be decrypted by repo B—cryptographic segmentation, not policy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <div class="flex items-center gap-6 mb-6">
                            <div class="flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full flex-shrink-0">
                                <div class="text-3xl font-bold text-green-400">4</div>
                            </div>
                            <h3 class="text-2xl font-bold text-white">Encrypt Your First Secret</h3>
                        </div>
                        <div>
                            <p class="text-slate-300 mb-4 leading-relaxed">
                                Encrypt secrets locally using the repository's GPG key, then commit the encrypted YAML to Git. The Kubernetes controller will decrypt at runtime.
                            </p>
                            <div class="bg-slate-950 border border-slate-700 rounded-lg p-4 mb-4">
                                <div class="text-slate-500 text-xs mb-2">Create Unencrypted Secret File (secret.yaml)</div>
                                <pre class="text-green-400 text-sm whitespace-pre overflow-x-auto"><code>
                                    apiVersion: v1{"\n"}
                                    kind: Secret{"\n"}
                                    metadata:{"\n"}
                                    name: database-credentials{"\n"}
                                    namespace: production{"\n"}
                                    type: Opaque{"\n"}
                                    stringData:{"\n"}
                                    username: admin{"\n"}
                                    password: super-secret-password-123
                                </code></pre>
                            </div>
                            <div class="bg-slate-950 border border-slate-700 rounded-lg p-4 mb-4">
                                <div class="text-slate-500 text-xs mb-2">Encrypt with Repository Key</div>
                                <pre class="text-green-400 text-sm whitespace-pre-wrap"><code>octopilot encrypt secret.yaml \
                                    --repo your-org/your-repo \
                                    --output secret.enc.yaml</code></pre>
                            </div>
                            <div class="bg-slate-950 border border-slate-700 rounded-lg p-4">
                                <div class="text-slate-500 text-xs mb-2">Commit Encrypted Secret to Git</div>
                                <pre class="text-green-400 text-sm whitespace-pre-wrap"><code>git add secret.enc.yaml
                                    git commit -m "Add encrypted database credentials"
                                    git push origin main</code></pre>
                            </div>
                        </div>
                    </div>

                    <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-8">
                        <div class="flex items-center gap-6 mb-6">
                            <div class="flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-full flex-shrink-0">
                                <div class="text-3xl font-bold text-orange-400">5</div>
                            </div>
                            <h3 class="text-2xl font-bold text-white">Verify Decryption in Cluster</h3>
                        </div>
                        <div>
                            <p class="text-slate-300 mb-4 leading-relaxed">
                                Deploy your application and verify that the secret-controller-manager automatically decrypts secrets and injects them into pods at runtime.
                            </p>
                            <div class="bg-slate-950 border border-slate-700 rounded-lg p-4 mb-4">
                                <div class="text-slate-500 text-xs mb-2">Check Controller Logs</div>
                                <pre class="text-green-400 text-sm whitespace-pre-wrap"><code>kubectl logs -n octopilot-system deployment/secret-controller-manager</code></pre>
                            </div>
                            <div class="bg-slate-950 border border-slate-700 rounded-lg p-4 mb-4">
                                <div class="text-slate-500 text-xs mb-2">Verify Secret Exists in Namespace</div>
                                <pre class="text-green-400 text-sm whitespace-pre-wrap"><code>kubectl get secrets -n production database-credentials</code></pre>
                            </div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div class="bg-slate-950/50 border border-slate-700 rounded-lg p-4">
                                    <div class="text-white font-semibold mb-2">Expected Output</div>
                                    <div class="text-green-400 text-xs mb-1">✓ Secret decrypted successfully</div>
                                    <div class="text-green-400 text-xs mb-1">✓ Injected into namespace: production</div>
                                    <div class="text-green-400 text-xs">✓ Available to pods</div>
                                </div>
                                <div class="bg-slate-950/50 border border-slate-700 rounded-lg p-4">
                                    <div class="text-white font-semibold mb-2">Security Note</div>
                                    <div class="text-slate-400 text-xs">Secret never touches disk unencrypted. Decryption happens in-memory during controller runtime.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-8 bg-gradient-to-br from-green-950/20 to-slate-900/50 border border-green-900/30 rounded-xl p-8">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                            <i class="fa-solid fa-check-circle text-green-400 text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-white">You're All Set!</h3>
                    </div>
                    <p class="text-slate-300 leading-relaxed mb-6">
                        Your repository-local encryption is now live. Secrets are encrypted in Git, decrypted at runtime by the Kubernetes controller, and never shared across repositories. Next steps:
                    </p>
                    <div class="flex flex-col sm:flex-row items-center gap-4">
                        <button class="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold flex items-center justify-center gap-2">
                            <i class="fa-solid fa-code-branch"></i>
                            Set Up CI/CD Integration
                        </button>
                        <button class="w-full sm:w-auto px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-semibold flex items-center justify-center gap-2">
                            <i class="fa-solid fa-users"></i>
                            Configure Multi-Team Policies
                        </button>
                        <a href="/documentation" class="w-full sm:w-auto px-6 py-3 border border-slate-700 hover:border-slate-600 text-white rounded-lg transition-colors font-semibold flex items-center justify-center gap-2">
                            <i class="fa-solid fa-book"></i>
                            Read Full Documentation
                        </a>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default QuickstartSteps;
