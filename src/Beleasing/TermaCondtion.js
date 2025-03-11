import React from 'react'
import { Card, Container } from 'react-bootstrap'

const TermaCondtion = () => {
    return (
        <div>
            <Container className="my-5 pt-5">
                <div className="row">
                    <div className="col-8">
                        <Card className="shadow-lg p-4 border-0">
                            <Card.Body>
                                <h1 className="text-center mb-4">Terms and Conditions</h1>
                                {/* <p className="text-muted text-center">Last Updated: [Date]</p> */}
                                <hr />
                                <h4>Acceptance of Terms</h4>
                                <ul className='ps-3' style={{ listStyleType: "'▪ '" }}>
                                    <li>By using <strong>driveOra</strong>, you accept and agree to abide by these Terms and Conditions.</li>
                                    <li>We may update these terms from time to time without prior notice.</li>
                                </ul>

                                <h4>Use of Website</h4>
                                <ul className='ps-3' style={{ listStyleType: "'▪ '" }}>
                                    <li>The content on this website is for informational purposes only, primarily showcasing luxury cars.</li>
                                    <li>You may not use this website for any illegal or unauthorized purpose.</li>
                                    <li>We reserve the right to modify, suspend, or discontinue any part of the website at any time without notice.</li>
                                </ul>

                                <h4>Intellectual Property</h4>
                                <ul className='ps-3' style={{ listStyleType: "'▪ '" }}>
                                    <li>All content, including text, images, and design elements related to luxury cars, belongs to <strong>driveOra</strong> unless stated otherwise.</li>
                                    <li>You may not reproduce, distribute, or use any content without our prior written consent.</li>
                                </ul>

                                <h4>Limitation of Liability</h4>
                                <ul className='ps-3' style={{ listStyleType: "'▪ '" }}>
                                    <li>We do not guarantee the accuracy, completeness, or reliability of any content on this website.</li>
                                    <li><strong>driveOra</strong> shall not be liable for any direct, indirect, or incidental damages arising from the use of this website.</li>
                                </ul>

                                <h4>Third-Party Links</h4>
                                <ul className='ps-3' style={{ listStyleType: "'▪ '" }}>
                                    <li>Our website may contain links to third-party websites.</li>
                                    <li>We do not control or take responsibility for the content or policies of these external sites.</li>
                                </ul>

                                <h4>Privacy Policy</h4>
                                <ul className='ps-3' style={{ listStyleType: "'▪ '" }}>
                                    <li>Any personal information collected through the website will be handled according to our Privacy Policy.</li>
                                </ul>

                                <h4>Governing Law</h4>
                                <ul className='ps-3' style={{ listStyleType: "'▪ '" }}>
                                    <li>These terms shall be governed by and interpreted in accordance with the laws of [Your Country/State].</li>
                                </ul>

                                <h4>Contact Us</h4>
                                <ul className='ps-3' style={{ listStyleType: "'▪ '" }}>
                                    <li>If you have any questions about these Terms and Conditions, please contact us at [Your Contact Information].</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-4 sticky-sidebar">
                        <Card className="shadow-lg p-4 border-0 sticky-sidebar">
                            <Card.Body>
                                <h1 className="text-center mb-4">Most Popular Cars in driveOra</h1>
                                <p className="text-center text-muted">Discover the top luxury cars available on driveOra.</p>
                                <ul className='ps-3' style={{ listStyleType: "'▪ '" }}>
                                    <li><strong>Rolls-Royce Phantom</strong> – The epitome of luxury and performance.</li>
                                    <li><strong>Lamborghini Aventador</strong> – Experience speed and style like never before.</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </div>


                </div>
            </Container>
        </div>
    )
}

export default TermaCondtion