import { Bounce, ToastContainer } from 'react-toastify';

type MessagesContainerProps = {
  children: React.ReactNode;
};

export function MessagesContainer({ children }: MessagesContainerProps) {
  const theme =
    document.documentElement.getAttribute('data-theme') === 'light'
      ? 'light'
      : 'dark';

  return (
    <>
      {children}

      <ToastContainer
        position='top-center'
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
        transition={Bounce}
      />
    </>
  );
}
