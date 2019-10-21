/* GET home page */
const about = function(req, res){
  res.render('generic-text', { 
	title: 'About',
	content: 'Loc8r was created to help people......'
  });
};

module.exports = {
  about
};