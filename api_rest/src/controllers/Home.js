class Home {
  async index(req, res) {
    res.json('Index');
  }
}

export default new Home();
