const express = require('express');
let number = 0;

const guestbookGet = (req, res) => {
  console.log('Guestbook');
  number++
  res.send('Välkommen, du är besökare nr ' + number + '.');
}

module.exports = guestbookGet;