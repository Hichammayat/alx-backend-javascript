/**
 * Contains the miscellaneous route handlers.
 * @author hicham <https://github.com/hichammayat>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
