const Copyright = () => {
  return (
    <p className="text-center text-neutral-600 dark:text-neutral-400">
      {'Copyright © '}
      {new Date().getFullYear()}
      {' Xila Luna'}
    </p>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="container py-3 mt-auto border-t border-color sm:py-5">
      <Copyright />
    </footer>
  );
};

export default Footer;
