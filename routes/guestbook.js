let number = 0;

app.route("/guestbook")
  .get((req, res) => {
      number++;
      res.send('Du är besökare nr ' + number)
  })

export default guestbook();