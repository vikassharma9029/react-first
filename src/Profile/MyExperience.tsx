import Box from "@mui/material/Box";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Layout from "../pages/First/Layout/Layout";
import { useState } from "react";

interface IJobDetails {
    name: string,
    possition: string,
    duration: string,
    jobs: string[];
}


const MyExperience = () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

        const organisationDetails = [{
            name: 'HCL Technologies PVT. LTD.',
            possition: 'Technical Lead',
            duration: 'July 2021 to Till now',
            jobs: ['Working as a frontend developer in Multiple projects.', 'Take care of overall Development and Deployment of the applications.', 'Writing unit test cases for all the functionalities.', 'Participate all project related calls with clients','Participate overall scrum meetings like scrum, sprint planing, retrospective meaning.', 'Helping the team when ever its required. ', 'Got appreciations from clients also from internal manager.']
        },
        {
            name: 'Extramarks PVT. LTD.',
            possition: 'Software Engineer',
            duration: 'October 2017 to July 2021',
            jobs: ['Worked as backend and frontend developer in school lms team.', 'Take care of overall Development and Deployment of web based applications.', 'Make Coordination with Mobile team, Design team, QA team and backend team.', 'Ensure that applications are tested to meet total performance requirements','Take part of Full life-cycle of project.', 'Got praised couple of times from chief of technology team to release application on short time. ']
        },
        {
            name: 'NextGen Invent Corporation',
            possition: 'Software Developer',
            duration: 'September 2016 to October 2017',
            jobs: ['Core Development and Designing (Coding and Logic).', 'Take care of overall Development and Deployment of web based applications.', 'I used to take the client calls and get the requirements and sometimes demo the features as well.']
        },
        {
            name: 'MPS Infotecnics (Formar Visesh Infotecnics)',
            possition: 'Jr. Software Developer',
            duration: 'January 2016 to September 2016',
            jobs: ['Core Development and Designing (Coding and Logic).', 'Implemented features for various applications.', 'Integrated third party libraries.',  'Integrated payment gateways and SMS alert APIs']
        }];

    const personalInfo = {
        name: 'Vikas Sharma',
        designation: 'Technical Lead',
        title: 'Web Designer/Web Developer',
        address: 'Sector 70 Noida, Uttar Pradesh',
        dob: 'July 26, 1992'
    }
    return (
        <Layout personalInfo={personalInfo}>
            <Box className="tab-content" id="nav-tabContent">
                <Box className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    
                        <div>
                            {organisationDetails && organisationDetails.map((data: IJobDetails, idx: number) =>{
                                return (
                                    <Accordion style={{flexGrow: 1}} expanded={expanded === `panel${idx+1}`} onChange={handleChange(`panel${idx+1}`)}>
                                <AccordionSummary 
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`panel${idx+1}-content`}
                                    id={`panel${idx+1}-header`}
                                >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                        {data.name}
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}><i>{data.possition} </i></Typography>
                                    <Typography sx={{ color: 'text.secondary' }}><i>{data.duration} </i></Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{background: '#edededd4'}}>
                                    <Typography>
                                        <ul>
                                       {
                                        data && data.jobs.map((item) => {
                                            return <li>{item}</li>
                                        })
                                       }
                                       </ul>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                                )
                            })}
                        </div>

                    </Box>
                {/* </Box> */}
            </Box>
        </Layout>
    )
}

export default MyExperience;