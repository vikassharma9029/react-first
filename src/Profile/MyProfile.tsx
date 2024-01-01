import Box from "@mui/material/Box";
import Layout from "../pages/First/Layout/Layout";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import img from '../../src/assets/img/image_compress.png';
import SideBar from "../pages/First/Layout/SideBar";

const MyProfile = () => {
    const personalInfo = {
        name: 'Vikas Sharma',
        designation: 'Technical Lead',
        title: 'Web Designer/Web Developer',
        address: 'Sector 70 Noida, Uttar Pradesh',
        dob: 'July 26, 1992'
    }

    return <Layout personalInfo={personalInfo}>
        <Box className="tab-content" id="nav-tabContent">
            <Box className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <Box className="cv-port row">
                    <SideBar personalInfo={personalInfo} />
                    <Box className="col-md-8">
                        <Box className="cv-stail row">
                            <Box className="col-sm-4 vbhfg center">
                                <Avatar
                                    src={img}
                                    sx={{ width: 200, height: 200 }}
                                />
                                {/* <img src={img} alt="" /> */}
                                <Link to="../../../assets/resume/vikas_resume.pdf" target="_blank" download><i className="fas fa-cloud-download-alt"></i> Download Resume</Link>
                            </Box>
                            <Box className="col-sm-8">
                                <h3>Hii It's Vikas.. </h3>
                                {/* <b>I will work hard to grow your business</b> */}
                                <p>A software developer by profession, a problem solver and I love building things that live on the web.</p>
                                <p>
                                    I have <b>7+ years </b>of hands-on experience in building high-impact web applications for big businesses and currently, I am working as a <b>Technical Lead at HCL Technology</b>. My experience spans developing performant web applications with aesthetic and responsive design.
                                </p>
                                <p>
                                    <b>Expertise:</b>
                                    <br />
                                    <b>Core:</b> Javascript, typescript, Jquery, HTML, CSS
                                    <br />
                                    <b>Frontend:</b> React JS, Redux, Hooks, Context API, Web performance
                                    <br />
                                    <b>Backend:</b> NodeJS, PHP Core, Zend Framework
                                </p>
                                <p>
                                    Reach out to me at <a href="mailto:v.sharma9029@gmail.com">v.sharma9029@gmail.com</a></p>
                            </Box>
                        </Box>
                        <Box className="jumbo-address row">
                            <Box className="row w-100 no-margin">
                                <Box className="col-lg-6 no-padding">

                                    <table className="addrss-list">
                                        <tbody>
                                            <tr>
                                                <th>Position</th>
                                                <td>Technical Lead</td>
                                            </tr>
                                            <tr>
                                                <th>Nationality</th>
                                                <td>Indian</td>
                                            </tr>
                                            <tr>
                                                <th>Date of birth</th>
                                                <td>26-07-1992</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </Box>
                                <Box className="col-lg-6 no-padding">
                                    <table className="addrss-list">
                                        <tbody>
                                            <tr>
                                                <th>Experiance</th>
                                                <td>5+ Years</td>
                                            </tr>
                                            <tr>
                                                <th>Website</th>
                                                <td>https://vikasfirstpro.netlify.app/</td>
                                            </tr>
                                            <tr>
                                                <th>Languages</th>
                                                <td>Hindi, English</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Box>
                            </Box>

                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Layout>
}

export default MyProfile;