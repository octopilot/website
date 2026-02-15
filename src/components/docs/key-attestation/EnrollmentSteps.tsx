import type { Component } from 'solid-js';

const EnrollmentSteps: Component = () => {
    return (
        <section class="py-16 border-b border-slate-800/50">
            <div class="max-w-[1000px] mx-auto px-8">
                <h2 class="text-3xl font-bold text-white mb-8">User Enrollment Guide</h2>

                <div class="space-y-12">
                    {/* Step 1 */}
                    <div class="flex gap-6">
                        <div class="flex-shrink-0">
                            <div class="w-10 h-10 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center justify-center text-green-400 font-bold">1</div>
                        </div>
                        <div class="flex-grow">
                            <h3 class="text-xl font-bold text-white mb-3">Generate your Reception Key</h3>
                            <p class="text-slate-400 mb-4">
                                This key is permanent and used <strong>only</strong> to receive your short-lived attested keys.
                                Ensure you use your corporate email address.
                            </p>
                            <div class="bg-slate-950 rounded-lg p-4 border border-slate-800 font-mono text-sm text-slate-300 overflow-x-auto">
                                <div class="text-slate-500 select-none mb-2"># Generate interactively</div>
                                <div class="text-green-400">gpg --full-generate-key</div>
                                <div class="mt-4 text-slate-500 select-none"># Select options:</div>
                                <div>1. Kind: (1) RSA and RSA or (9) ECC and ECC <span class="text-slate-500">(Recommended)</span></div>
                                <div>2. Size: 4096 (RSA) or Curve 25519 (ECC)</div>
                                <div>3. Expiry: 0 (Does not expire)</div>
                                <div>4. Email: <span class="text-yellow-300">yourname@company.com</span></div>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div class="flex gap-6">
                        <div class="flex-shrink-0">
                            <div class="w-10 h-10 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center justify-center text-green-400 font-bold">2</div>
                        </div>
                        <div class="flex-grow">
                            <h3 class="text-xl font-bold text-white mb-3">Upload to GitHub</h3>
                            <p class="text-slate-400 mb-4">
                                Export your public key and add it to your GitHub account settings. Octopilot scans your profile to find this key.
                            </p>
                            <div class="bg-slate-950 rounded-lg p-4 border border-slate-800 font-mono text-sm text-slate-300 overflow-x-auto">
                                <div class="text-green-400">gpg --armor --export yourname@company.com | pbcopy</div>
                            </div>
                            <div class="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                                <p class="text-sm text-blue-200">
                                    <i class="fa-solid fa-circle-info mr-2"></i>
                                    Go to <strong>GitHub Settings</strong> &gt; <strong>SSH and GPG keys</strong> &gt; <strong>New GPG key</strong> and paste the output.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div class="flex gap-6">
                        <div class="flex-shrink-0">
                            <div class="w-10 h-10 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center justify-center text-green-400 font-bold">3</div>
                        </div>
                        <div class="flex-grow">
                            <h3 class="text-xl font-bold text-white mb-3">Join a Team</h3>
                            <p class="text-slate-400 mb-4">
                                Once you are added to a GitHub Team in your organization, Octopilot will detect your membership, validate your Reception Key, and email you a new <strong>Attested Key</strong>.
                            </p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div class="flex gap-6">
                        <div class="flex-shrink-0">
                            <div class="w-10 h-10 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center justify-center text-green-400 font-bold">4</div>
                        </div>
                        <div class="flex-grow">
                            <h3 class="text-xl font-bold text-white mb-3">Import Attested Key</h3>
                            <p class="text-slate-400 mb-4">
                                You will receive an email with an encrypted attachment. Decrypt it using your Reception Key.
                            </p>
                            <div class="bg-slate-950 rounded-lg p-4 border border-slate-800 font-mono text-sm text-slate-300 overflow-x-auto">
                                <div class="text-slate-500 select-none mb-2"># Decrypt the private key</div>
                                <div class="text-green-400">gpg -d octopilot-attested.asc.gpg &gt; octopilot-attested.sec.asc</div>
                                <div class="text-slate-500 select-none my-2"># Import it</div>
                                <div class="text-green-400">gpg --import octopilot-attested.sec.asc</div>
                            </div>
                            <p class="text-slate-400 mt-4 text-sm">
                                Finally, upload the <strong>public key</strong> of this new key to GitHub. Octopilot will now trust this key for encryption operations in your repositories.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EnrollmentSteps;
