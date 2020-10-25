import React from 'react';

require('../style.scss');

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto max-w-3xl pt-8 min-h-screen flex flex-col justify-between">
      <div>
        <main className="px-4">
          {children}
        </main>
        <footer class="border-t-2 border-gray-200 pb-8 pt-4 mx-4 text-sm text-gray-700">
          Designed and developed by Isabelle Viktoria Maciohsek<br/>
          © {new Date().getFullYear()}, built with <a href="https://www.gatsbyjs.com" rel="nofollow noreferrer">Gatsby</a>, icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik" rel="nofollow noreferrer">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" rel="nofollow noreferrer">www.flaticon.com</a>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
