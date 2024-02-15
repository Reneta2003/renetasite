    import React from 'react';
    import './index.css';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import {Container, Row, Col, Button} from 'react-bootstrap';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
    import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
    const SkillSet = () => {
        const skills = [
            'Java', 'Python', 'JavaScript', 'React', 'Vue',
            'Bootstrap', 'HTML', 'CSS', 'SQL', 'GraphQL',
            'C', 'C#', 'VHDL', 'Clash', 'ModelSim'
        ];

        return (
            <div className="skill-set my-5">
                <h1 className="text-left mb-4 text-center" style={{ color: '#003d66' }}>Skills</h1>
                <div className="skills-container" style={{maxWidth:'60%', margin:'auto'}}>
                    {skills.map(skill => (
                        <span key={skill} className="skill-badge">{skill}</span>
                    ))}
                </div>
            </div>
        );
    };
    export default function App() {
        return (
            <div className={"page"}>
                <div className="cv-background ">
                    <Container>
                        <Row className="align-items-center" style={{minHeight: '70vh'}}>
                            <Col xs={12} md={6} className="align-items-center">
                                <h2 className={"text-center mt-5"} style={{color: '#8585ad'}}>Ren<span style={{color: '#60607a'}}>e</span>ta Trifonova</h2>
                                <h1 className={"text-center"} style={{color: '#003d66'}}>Student Developer</h1>
                                <div className="text-center">
                                    <a href="/CV%20Reneta%20Trifonova.pdf" download>

                                    <Button style={
                                        {
                                            backgroundColor: "#1a88dc",
                                            borderColor: "#1a88dc",
                                            width: '80%',
                                            marginTop: '30px',
                                            borderRadius: '0px',
                                            fontSize: '1.7rem'
                                        }} className={"btn-lg"}>Download CV</Button>
                                    </a>
                                </div>

                            </Col>
                            <Col xs={12} md={6} className="my-5 d-flex justify-content-center p-0">
                                <div className="image-placeholder"/>
                            </Col>
                        </Row>
                    </Container>
                    <Container className={"my-5"}>
                        <div className="text-left" style={{maxWidth:'80%', margin:'auto'}}>
                            <h1 className="text-left mb-4" style={{color: '#003d66'}}>About Me</h1>
                            <p style={{color: '#727281', fontSize: '1.5rem'}}> Hi! My name is Ren<span style={{color: '#424249'}}>e</span>ta and I am passionate about both Software Development and Embedded Systems. With my academic background in Computer Science, I strive to deliver  quality solutions to intricate problems while also having fun. Below you can find more information about me. </p>
                        </div>
                    </Container>
                    <hr className=" hr-style1"/>
                    <hr className=" hr-style2"/>
                    <Container className={"my-5"}>
                        <div className="text-center">
                            <h1 className="text-center mb-4" style={{color: '#003d66'}}>Education</h1>
                            <h3 style={{color: '#8585ad', display: 'inline'}}>Bsc&nbsp;</h3>
                            <h3 style={{color: '#3c7598', display: 'inline'}}>Technical Computer Science&nbsp;</h3>
                            <h3 style={{color: '#8585ad', display: 'inline'}}> @ University of Twente</h3>
                            <h4 style={{color: '#8585ad'}}> (3rd year student) </h4>
                        </div>
                    </Container>
                    <hr className=" hr-style1"/>
                    <hr className=" hr-style2"/>
                    <Container className={"my-5"}>
                        <h1 className="text-left mb-4 text-center" style={{color: '#003d66'}}>Experience</h1>

                        <div className={"ml-4 mr-4 "}>
                        <ul className="text-left" style={{listStyleType: 'disc', paddingLeft: '20px', margin: 'auto', textAlign: 'left', maxWidth: 'fit-content'}}>
                            <li>
                                <h4 style={{color: '#3c7598'}}>Product and Implementation Engineer @ Cofano Software Solutions&nbsp;</h4>
                                <h5 style={{color: '#8585ad'}}>July 2022 - June 2023</h5>
                            </li>
                            <li>
                                <h4 style={{color: '#3c7598'}}>Student Developer @ Cofano Software Solutions&nbsp;</h4>
                                <h5 style={{color: '#8585ad'}}>July 2023 - Present</h5>
                            </li>
                            <li>
                                <h4 style={{color: '#3c7598'}}>Teaching Assistant @ University of Twente</h4>
                                <h5 style={{color: '#8585ad'}}>September 2022 - Present</h5>
                            </li>
                            <li>
                                <h4 style={{color: '#3c7598'}}>Student Developer @ EDAcation</h4>
                                <h5 style={{color: '#8585ad'}}>July 2023 - December 2023</h5>
                            </li>
                        </ul>
                        </div>

                    </Container>
                    <hr className=" hr-style1"/>
                    <hr className=" hr-style2"/>
                    <Container className={"my-5"}>
                        <SkillSet />
                    </Container>


                    <br/>
                </div>
                <div className="contact-icons my-5">
                    <h2 className="text-left mb-4 text-center" style={{color: '#003d66'}}>Contact me:</h2>

                    <a href="https://www.linkedin.com/in/reneta-trifonova" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="3x" />
                    </a>
                    <a href="mailto:connect@reneta.nl">
                        <FontAwesomeIcon icon={faEnvelope} size="3x" />
                    </a>
                </div>

            </div>


        );
    }

