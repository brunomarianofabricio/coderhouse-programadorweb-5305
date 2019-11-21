<<<<<<< HEAD
import crossroads from 'crossroads'

function router () {
  crossroads.addRoute('', function () {
    console.log('Home page')
  })

  crossroads.addRoute('#/contact', function () {
    console.log('Contact page')
  })

  // En cada cambio del # va a verificar las rutas
  $(window).on('hashchange', function () {
    crossroads.parse(window.location.hash)
  })

  crossroads.parse(window.location.hash)
}

export default router
=======
import crossroads from 'crossroads';
import homeController from './controllers/homeController';

function router() {
  crossroads.addRoute('', function() {
    $('#root').load('./partials/home.html', homeController);
  });

  crossroads.addRoute('#/contact', function() {
    $('#root').load('./partials/contact.html', function() {});
  });

  // En cada cambio del # va a verificar las rutas
  $(window).on('hashchange', function() {
    crossroads.parse(window.location.hash);
  });

  crossroads.parse(window.location.hash);
}

export default router;
>>>>>>> upstream/master
