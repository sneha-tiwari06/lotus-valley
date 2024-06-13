import React from 'react'

function About() {
  return (

    <div class="w-100 padding position-relative padding scrollto overflow-hidden overview-container">
    <div class="container">
        <div class="row align-items-center overviewmailn">
            
            <div class="col-md-6 col-lg-7 overview-img">
                <img src="../assets/about.jpg" />
            </div>
            <div class="col-md-6 col-lg-5 overview-text">
                <div class="inner">
                    <div class="heading d-none d-md-none d-lg-block">
                        <h2 class="text-primary mb-0">About Us</h2>
                    </div>
                    <p>At <em class="text-secondary">Lotus Valley International School</em>, we aspire to craft socially conscious, self-aware and responsible global citizens who will construct, shape, and serve society.</p>
                    <p>The school proposes to create a system that is aligned with the aspirational goals of state-of-the-art education, including SDG4 while building upon India’s traditions and value systems. </p>
                    <div class="readmore"><a href="about-school.php" class="button">Learn more <span>&rarr;</span></a></div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default About