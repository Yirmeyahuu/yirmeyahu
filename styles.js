const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});



const hiddenElements = document.querySelectorAll('.hero__container');
hiddenElements.forEach((el) => observer.observe(el));

const hidden1Elements = document.querySelectorAll('.main__container');
hidden1Elements.forEach((el) => observer.observe(el));

const hidden2Elements = document.querySelectorAll('.projects__wrapper');
hidden2Elements.forEach((el) => observer.observe(el));

const hidden3Elements = document.querySelectorAll('.contact__container');
hidden3Elements.forEach((el) => observer.observe(el));