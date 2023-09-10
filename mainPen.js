gsap.registerPlugin(ScrollTrigger)
function getTopHeight(){
    return document.querySelector('.top-image').clientHeight - 22;
}

function init(){
    
    // move pen to cover upper pen
    gsap.set('.part3',{
        y : ()=>{
            return -(getTopHeight());
        },
        scrollTrigger : {
            id : 'top-image',
            trigger : '.part3',
            start : 'top bottom-=270px',
            end : `+=${ getTopHeight()}`,
            pin : true,
            pinSpacing : false
            
        }
    });



    const parts = gsap.utils.toArray('.part');
    parts.forEach((part,index)=>{

        let start = 'top center';
        if(index === 2) start = `top+=${getTopHeight()} center`

        gsap.set(part,{

            scrollTrigger : {
                id : `${part.getAttribute('class')}`,
                trigger :part,
                start : start,
                toggleClass : 'fade-in'

            }
        })

    })


    const offsets = [547,722,842];

    gsap.utils.toArray(['.part4','.part5','.part6']).forEach((part,index) => {
       gsap.set(part, {y:-offsets[index]})

        gsap.to(part, {y :0, ease :'none', scrollTrigger : {
        trigger: '.pen-bottom',
        start : 'top bottom-=640px',
        end : `+=${offsets[index]}`,
        scrub :  true
    }})

    })


}

window.addEventListener('load', function(){
    init();
});
