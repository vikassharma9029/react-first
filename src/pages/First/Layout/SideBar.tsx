import Box from "@mui/material/Box"

type IInfo = {
    name: string,
    designation: string,
    title: string,
    address: string,
    dob: string
}

type IProps = {
    personalInfo: IInfo;
}


const skillsStack = [{
    name: 'React',
    value: '85%'
},
{
    name: 'typeScript',
    value: '70%'
},
{
    name: 'javaScript',
    value: '85%'
},{
    name: 'jQuery',
    value: '85%'
},
{
    name: 'Redux',
    value: '70%'
},{
    name: 'Unit Test',
    value: '65%'
},{
    name: 'MUI',
    value: '70%'
},{
    name: 'CSS',
    value: '70%'
},{
    name: 'HTML',
    value: '75%'
},]

const SideBar = ({ personalInfo }: IProps) => {
    return (
        <Box className="col-md-4">
            <Box className="cv-info">
                <Box className="cvp">
                    <h6>General Information</h6>
                    <b>Name</b>
                    <p>{personalInfo.name}</p>
                    <b>Date of Birth</b>
                    <p>{personalInfo.dob}</p>
                    <b>Address</b>
                    <p>{personalInfo.address}</p>
                </Box>
                <h6 className="skillc">Skills</h6>
                <Box className="skp">
                    <Box className="profess-cover  no-margin">
                        {skillsStack && skillsStack.map((item) => {
                            return <Box className=" prog-row row">
                                <Box className="col-6">
                                   <b> {item.name}</b>
                                </Box>
                                <Box className="col-6">
                                    <Box className="progress">
                                        <Box className="progress-bar" role="progressbar" style={{ width: item.value }}></Box>
                                    </Box>
                                </Box>
                            </Box>
                        })}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default SideBar;