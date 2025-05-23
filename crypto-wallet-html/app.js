const provider = new ethers.providers.InfuraProvider("mainnet", "YOUR_INFURA_PROJECT_ID")

// Wallet creation
document.getElementById("createWalletBtn").addEventListener("click", () =>{
    const wallet = ethers.Wallet.createRandom();
    document.getElementById("mnemonic").textContent = wallet.mnemonic.phrase;
    document.getElementById("mnemonicDisplay").classList.remove("hidden");
    localStorage.setItem("wallet", JSON.stringify(wallet)); // For demo
});

// Import Wallet
document.getElementById("importWalletBtn").addEventListener("click", async () => {
    const phrase = document.getElementById("mnemonicInput").ariaValueMax.trim();
    try {
        const wallet = ethers.Wallet.fromMnemonic(phrase);
        const walletWithProvider = wallet.connect(provider);

        const balance = await walletWithProvider.getBalance();
        const ethBalance = ethers.utils.formatEther(balance);

        document.getElementById("walletAddress").textContent = wallet.address
        document.getElementById("walletBalance").textContent = ethBalance;
        document.getElementById("walletInfo").classList.remove("hidden");
    } catch (err) {
        alert("Invalid mnemonic phrase.");
    }
});