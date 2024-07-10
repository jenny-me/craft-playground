// See online demo for details: https://www.a11ywithlindsey.com/blog/javascript-accessibility-accordions/

var accordionBlock = (function() {
  var accordion,
      accordionButtons,
      accordionSections;

  function init(set) {
    // Make settings available to all functions
    settings = set;

    accordion = document.getElementById(settings.id);
    accordionButtons = accordion.querySelectorAll('.accordion__button');
    accordionSections = accordion.querySelectorAll('.accordion__section');

    accordionSections.forEach(section =>  {
      section.setAttribute('aria-hidden', true);
      section.classList.remove('open');
    });

    accordionButtons.forEach(button => {
      button.setAttribute('aria-expanded', false);

      const expanded = button.getAttribute('aria-expanded');
      const number = button.getAttribute('id').split('-').pop();
      //const associatedSection = document.getElementById(`accordion-section-${number}`);
      const associatedSection = accordion.querySelector(`#accordion-section-${settings.id}-${number}`);

      button.addEventListener('click', () => {  
        button.classList.toggle('expanded');
        associatedSection.classList.toggle('open');
        if (button.classList.contains('expanded')) {
          closeAll();   
          button.classList.add('expanded');
          associatedSection.classList.add('open');

          button.setAttribute('aria-expanded', true);
          associatedSection.setAttribute('aria-hidden', false);
        } else {
          closeAll();   
        }
        button.scrollIntoView();
      });

    });
  }

  function closeAll() {
    accordionButtons = accordion.querySelectorAll('.accordion__button');
    accordionSections = accordion.querySelectorAll('.accordion__section');

    accordionSections.forEach(section =>  {
      section.setAttribute('aria-hidden', true);
      section.classList.remove('open');
    });
    accordionButtons.forEach(button => { 
      button.classList.remove('expanded');
      button.setAttribute('aria-expanded', false);
    });
  }
  
  // Making some functions public
  return {
    init:init
  };
});