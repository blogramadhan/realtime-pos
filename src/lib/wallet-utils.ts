// Fungsi untuk mendapatkan provider ethereum dengan aman
export const getEthereumProvider = () => {
  if (typeof window !== 'undefined') {
    // Gunakan provider yang sudah disimpan jika ada
    if (window._ethereum) {
      return window._ethereum;
    }
    // Atau gunakan provider asli jika tersedia
    if (window.ethereum) {
      return window.ethereum;
    }
  }
  return null;
};

// Fungsi untuk memeriksa apakah wallet terhubung
export const isWalletConnected = async () => {
  const provider = getEthereumProvider();
  if (!provider) return false;
  
  try {
    const accounts = await provider.request({ method: 'eth_accounts' });
    return accounts && accounts.length > 0;
  } catch (error) {
    console.error('Error checking wallet connection:', error);
    return false;
  }
};

// Deklarasi tipe untuk TypeScript
declare global {
  interface Window {
    ethereum?: any;
    _ethereum?: any;
  }
} 