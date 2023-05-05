import './Footer.css';

const pageLinlks = [
  'Privacy Policy',
  'Terms of Use',
  'Safe Dating',
  'Contact Us',
];

export default function Footer() {
  
  return (
    <footer>
      <ul>
        {pageLinlks.map((pageLink, i) => (
          <li key={pageLink + i}>
            <a href="">{pageLink}</a>
          </li>
        ))}
      </ul>
      <div>&copy; Copyright 2023, Kaleton Web s.r.o.</div>
    </footer>
  );
}
