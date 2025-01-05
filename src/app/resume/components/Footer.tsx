import React from "react";

const today = new Date();

const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

function Footer() {
  return (
    <footer className="bg-slate-800 text-white p-5">
      <p className="text-center">Sanghoon Bae's Resume©{formattedDate}</p>
    </footer>
  );
}

export default Footer;
