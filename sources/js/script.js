function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }

  new Vue({
    el: '#app',
    data: {
      content: '',
      name: '',
      photo: '',
      city: '',
      list: [
        {
          name: 'John Doe',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat magna ut dui egestas, in varius diam ultricies. Phasellus suscipit magna id arcu auctor, nec vulputate dolor elementum.',
          photo: './sources/images/account.png',
          email: 'john.doe@gmail.com'
        },
        {
          name: 'John Doe',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat magna ut dui egestas, in varius diam ultricies. Phasellus suscipit magna id arcu auctor, nec vulputate dolor elementum.',
          photo: './sources/images/account.png',
          email: 'john.doe@gmail.com'
        }
      ]
    },
    methods: {
      addReview(){
        this.list.push({
          name:this.name, 
          city:this.city,
          photo:this.photo,
          content:this.content
        }),
          this.name='',
          this.city='',
          this.content=''
      }
    },
  })
window.onload = (function() {
    var form = document.querySelector('.comments__form');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
    });
  
  })();

  $(document).foundation();