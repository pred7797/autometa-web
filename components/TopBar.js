import Link from 'next/link';
import '../app/globals.css'

const TopBar = () => {
  return (
    <div className="top-bar">
      <Link href="/" className="logo">Autometa</Link>
      <Link href="/" className='login-button'>
      Login
      </Link>
    </div>
  );
};

export default TopBar;