import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
    return(
        <section>
            <h1 id="about">Who am I?</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fortasse id optimum, sed ubi illud: Plus semper voluptatis? Itaque fecimus. Et harum quidem rerum facilis est et expedita distinctio. Sed fac ista esse non inportuna; Duo Reges: constructio interrete. Efficiens dici potest.

            </p>
        </section>
  
    );
}

export default About;