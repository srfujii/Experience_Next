const router = require('express').Router();
const { Experience, User, Review, UserExperience } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    // Get all blog posts and JOIN with author data
    const experienceProviderData = await Experience.findAll();

    // Serialize data so the template can read it
    const experienceProviders = experienceProviderData.map((provider) => provider.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      experienceProviders, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/experience/:id', async (req, res) => {
//   try {
//     const experienceData = await Experience.findByPk(req.params.id, {
//       include: [
//         {
//           model: Comment,
//           attributes: ['comment_content', 'date_created', 'author_id'],
//           include: [
//             {
//               model: User,
//               attributes: ['name'],
//             }
//           ]
//         },
//       ],
//     });
    
//     // Serialize data for handlebars template
//     const experience = experienceData.get({ plain: true });


//     res.render('experience-detail', {
//       ...experience,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
       // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Experience, through: UserExperience, as: 'user_experience' }],
      });
  
    const user = userData.get({ plain: true });

    res.render('dashboard', 
    {
      ...user,
      logged_in: true
    }
    );
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('signup');
});

module.exports = router;
