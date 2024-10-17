gsap.to("#three #scroll-container",{
    // transform:"translateX(-500%)",
    x:"-70%",
    duration:1,
    scrollTrigger:{
        trigger:"#three",
        scroller:"body",
        start:"top 0%",
        end:"top -300%",
        scrub:2,
        pin:true,
        anticipatePin: 1,  // Anticipate pin can help with pinning performance
        markers: false
    }
})