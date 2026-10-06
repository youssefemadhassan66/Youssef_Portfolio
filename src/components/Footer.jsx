import { profile } from '../data/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__bar">
        <p>
          © {new Date().getFullYear()} {profile.name}. Designed and built in {profile.location.split(',')[0]}.
        </p>
        <a href="#top" className="link">
          Back to top
        </a>
      </div>
    </footer>
  );
}
