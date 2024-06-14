import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });
import { ToastContainer,Bounce} from "react-toastify";

export const metadata = {
  title: 'deliveryss',
  description: 'Not Best, But Unique',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} global highlighted`}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
        {children}
        </body>
    </html>
  );
}
