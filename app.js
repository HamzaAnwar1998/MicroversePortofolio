//declaring variable
const header=document.getElementById('header');
const title = document.getElementById('title');
const bars = document.getElementById('bars');
const cross = document.getElementById('cross');
const links = document.getElementById('links');
const wrapper = document.getElementById('wrapper');
const navItems = document.querySelectorAll('.nav-items');

// clicking on hamburger icon
document.getElementById('bars').addEventListener('click',()=>{

    // activating header to full height
    header.classList.add('active');

    // hiding the title
    title.classList.add('active');

    // hiding the bars
    bars.classList.add('active');

    // showing the cross
    cross.classList.add('active');

    // showing the links
    links.classList.add('active');

    // overflow hidden to wrapper
    wrapper.classList.add('active');

})

// clicking on cross icon
cross.addEventListener('click',()=>{

    // deactivating header from full height to normal
    header.classList.remove('active');

    // showing the title
    title.classList.remove('active');

    // showing the bars
    bars.classList.remove('active');

    // hiding the cross
    cross.classList.remove('active');

    // overflow auto to wrapper
    wrapper.classList.remove('active');
    
})

navItems.forEach((navItem)=>{
    navItem.addEventListener('click',()=>{
         // deactivating header from full height to normal
        header.classList.remove('active');

        // showing the title
        title.classList.remove('active');

        // showing the bars
        bars.classList.remove('active');

        // hiding the cross
        cross.classList.remove('active');

        // overflow auto to wrapper
        wrapper.classList.remove('active');
    })
})